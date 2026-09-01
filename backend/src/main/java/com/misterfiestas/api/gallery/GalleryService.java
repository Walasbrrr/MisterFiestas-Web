package com.misterfiestas.api.gallery;

import com.misterfiestas.api.gallery.dto.GalleryMediaResponse;
import com.misterfiestas.api.gallery.dto.InstagramMediaPayload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;

/**
 * Servicio de la galería.
 * <p>
 * Lee medios cacheados en PostgreSQL y sincroniza con Instagram
 * cuando se ejecuta el scheduler semanal.
 */
@Service
public class GalleryService {

    private static final Logger log = LoggerFactory.getLogger(GalleryService.class);

    private final GalleryMediaRepository repository;
    private final InstagramApiClient instagramClient;

    public GalleryService(GalleryMediaRepository repository,
                          InstagramApiClient instagramClient) {
        this.repository = repository;
        this.instagramClient = instagramClient;
    }

    /**
     * Obtiene medios de la galería desde la caché (PostgreSQL).
     *
     * @param page número de página (0-indexed)
     * @param size elementos por página
     * @param type filtro por tipo de medio (IMAGE, VIDEO, CAROUSEL_ALBUM) o null para todos
     * @return página de medios mapeados a DTO
     */
    @Transactional(readOnly = true)
    public Page<GalleryMediaResponse> getGalleryMedia(int page, int size, String type) {
        Pageable pageable = PageRequest.of(page, size);

        Page<GalleryMedia> mediaPage;
        if (type != null && !type.equalsIgnoreCase("ALL")) {
            mediaPage = repository.findByMediaTypeOrderByIgTimestampDesc(
                    type.toUpperCase(), pageable);
        } else {
            mediaPage = repository.findAllByOrderByIgTimestampDesc(pageable);
        }

        return mediaPage.map(GalleryMediaResponse::from);
    }

    /**
     * Obtiene un medio específico por su ID.
     *
     * @param id ID del medio en Instagram
     * @return DTO del medio o null si no existe
     */
    @Transactional(readOnly = true)
    public GalleryMediaResponse getMediaById(String id) {
        return repository.findById(id)
                .map(GalleryMediaResponse::from)
                .orElse(null);
    }

    /**
     * Sincroniza el feed de Instagram con la base de datos.
     * <p>
     * Descarga todos los medios de la Graph API y realiza un upsert
     * (inserta nuevos, actualiza existentes).
     *
     * @return cantidad de medios sincronizados
     */
    @Transactional
    public int syncFromInstagram() {
        log.info("Iniciando sincronización con Instagram...");

        List<InstagramMediaPayload.MediaItem> items = instagramClient.fetchAllMedia();

        int count = 0;
        for (InstagramMediaPayload.MediaItem item : items) {

            // Algunos posts (CAROUSEL_ALBUM, VIDEO) no tienen media_url; usar thumbnail_url como fallback
            String resolvedMediaUrl = item.mediaUrl() != null ? item.mediaUrl() : item.thumbnailUrl();
            if (resolvedMediaUrl == null) {
                log.warn("Saltando medio {} (tipo: {}) sin media_url ni thumbnail_url", item.id(), item.mediaType());
                continue;
            }

            GalleryMedia media = repository.findById(item.id())
                    .orElse(null);

            if (media == null) {
                // Nuevo medio — insertar
                media = new GalleryMedia(
                        item.id(),
                        item.mediaType(),
                        resolvedMediaUrl,
                        item.thumbnailUrl(),
                        item.permalink(),
                        item.caption(),
                        parseTimestamp(item.timestamp()),
                        item.likeCount() != null ? item.likeCount() : 0
                );
            } else {
                // Medio existente — actualizar campos que pueden cambiar
                media.setMediaUrl(resolvedMediaUrl);
                media.setCaption(item.caption());
                media.setLikeCount(item.likeCount() != null ? item.likeCount() : 0);
                media.setFetchedAt(Instant.now());
            }

            repository.save(media);
            count++;
        }

        log.info("Sincronización completada: {} medios procesados", count);
        return count;
    }

    /**
     * Parsea el timestamp de Instagram (formato ISO 8601) a Instant.
     */
    private Instant parseTimestamp(String timestamp) {
        if (timestamp == null || timestamp.isBlank()) {
            return Instant.now();
        }
        try {
            return Instant.parse(timestamp);
        } catch (Exception e) {
            log.warn("No se pudo parsear timestamp '{}', usando now()", timestamp);
            return Instant.now();
        }
    }
}
