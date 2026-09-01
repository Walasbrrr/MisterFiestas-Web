package com.misterfiestas.api.gallery;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio JPA para acceder a los medios de la galería cacheados.
 */
@Repository
public interface GalleryMediaRepository extends JpaRepository<GalleryMedia, String> {

    /**
     * Obtiene todos los medios ordenados por fecha de publicación descendente.
     */
    Page<GalleryMedia> findAllByOrderByIgTimestampDesc(Pageable pageable);

    /**
     * Obtiene medios filtrados por tipo (IMAGE, VIDEO, CAROUSEL_ALBUM).
     */
    Page<GalleryMedia> findByMediaTypeOrderByIgTimestampDesc(String mediaType, Pageable pageable);
}
