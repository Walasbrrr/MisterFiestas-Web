package com.misterfiestas.api.gallery.dto;

import com.misterfiestas.api.gallery.GalleryMedia;
import io.swagger.v3.oas.annotations.media.Schema;

import java.time.Instant;

/**
 * DTO de respuesta para un medio de la galería.
 * Se envía al frontend sin exponer detalles internos de la entidad JPA.
 */
@Schema(description = "Medio de la galería de Instagram")
public record GalleryMediaResponse(

        @Schema(description = "ID del medio en Instagram", example = "17895695668004550")
        String id,

        @Schema(description = "Tipo de medio", example = "IMAGE",
                allowableValues = {"IMAGE", "VIDEO", "CAROUSEL_ALBUM"})
        String mediaType,

        @Schema(description = "URL pública del medio")
        String mediaUrl,

        @Schema(description = "URL de miniatura (solo para VIDEO)")
        String thumbnailUrl,

        @Schema(description = "Enlace al post original en Instagram")
        String permalink,

        @Schema(description = "Descripción del post")
        String caption,

        @Schema(description = "Fecha de publicación original")
        Instant timestamp,

        @Schema(description = "Cantidad de likes")
        Integer likeCount
) {
    /**
     * Convierte una entidad JPA a DTO de respuesta.
     */
    public static GalleryMediaResponse from(GalleryMedia entity) {
        return new GalleryMediaResponse(
                entity.getId(),
                entity.getMediaType(),
                entity.getMediaUrl(),
                entity.getThumbnailUrl(),
                entity.getPermalink(),
                entity.getCaption(),
                entity.getIgTimestamp(),
                entity.getLikeCount()
        );
    }
}
