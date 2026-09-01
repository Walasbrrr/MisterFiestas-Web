package com.misterfiestas.api.gallery;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;

/**
 * Entidad JPA que representa un medio de Instagram cacheado en la base de datos.
 * <p>
 * Los datos se sincronizan semanalmente desde la Instagram Graph API y se sirven
 * desde PostgreSQL para no depender de Instagram en cada petición.
 */
@Entity
@Table(name = "gallery_media")
public class GalleryMedia {

    /** ID del medio en Instagram (ej. "17895695668004550"). */
    @Id
    @Column(name = "id", length = 50)
    private String id;

    /** Tipo de medio: IMAGE, VIDEO o CAROUSEL_ALBUM. */
    @Column(name = "media_type", nullable = false, length = 20)
    private String mediaType;

    /** URL pública del medio (imagen o video). */
    @Column(name = "media_url", nullable = false, columnDefinition = "TEXT")
    private String mediaUrl;

    /** URL de la miniatura (solo para VIDEO). */
    @Column(name = "thumbnail_url", columnDefinition = "TEXT")
    private String thumbnailUrl;

    /** Enlace permanente al post en Instagram. */
    @Column(name = "permalink", nullable = false, length = 500)
    private String permalink;

    /** Descripción/caption del post. */
    @Column(name = "caption", columnDefinition = "TEXT")
    private String caption;

    /** Fecha de publicación original en Instagram. */
    @Column(name = "ig_timestamp", nullable = false)
    private Instant igTimestamp;

    /** Cantidad de likes al momento de la última sincronización. */
    @Column(name = "like_count")
    private Integer likeCount;

    /** Momento en que se descargó/actualizó este registro. */
    @Column(name = "fetched_at", nullable = false)
    private Instant fetchedAt;

    protected GalleryMedia() {
        // Constructor vacío requerido por JPA
    }

    public GalleryMedia(String id, String mediaType, String mediaUrl,
                        String thumbnailUrl, String permalink, String caption,
                        Instant igTimestamp, Integer likeCount) {
        this.id = id;
        this.mediaType = mediaType;
        this.mediaUrl = mediaUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.permalink = permalink;
        this.caption = caption;
        this.igTimestamp = igTimestamp;
        this.likeCount = likeCount;
        this.fetchedAt = Instant.now();
    }

    // --- Getters y Setters ---

    public String getId() {
        return id;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getMediaUrl() {
        return mediaUrl;
    }

    public void setMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public String getPermalink() {
        return permalink;
    }

    public void setPermalink(String permalink) {
        this.permalink = permalink;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public Instant getIgTimestamp() {
        return igTimestamp;
    }

    public void setIgTimestamp(Instant igTimestamp) {
        this.igTimestamp = igTimestamp;
    }

    public Integer getLikeCount() {
        return likeCount;
    }

    public void setLikeCount(Integer likeCount) {
        this.likeCount = likeCount;
    }

    public Instant getFetchedAt() {
        return fetchedAt;
    }

    public void setFetchedAt(Instant fetchedAt) {
        this.fetchedAt = fetchedAt;
    }
}
