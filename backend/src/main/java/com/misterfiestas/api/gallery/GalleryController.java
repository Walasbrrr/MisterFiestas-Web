package com.misterfiestas.api.gallery;

import com.misterfiestas.api.common.ApiResponse;
import com.misterfiestas.api.gallery.dto.GalleryMediaResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * REST Controller para la galería de Mister Fiestas.
 * <p>
 * Sirve los medios de Instagram cacheados en PostgreSQL.
 * Los datos se sincronizan semanalmente (cada lunes) desde la Graph API.
 */
@RestController
@RequestMapping("/api/v1/gallery")
@Tag(name = "Galería", description = "Endpoints para la galería de fotos y videos de Instagram")
public class GalleryController {

    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    /**
     * Lista paginada de medios de la galería.
     */
    @GetMapping
    @Operation(
            summary = "Listar medios de la galería",
            description = "Devuelve una lista paginada de fotos y videos del feed de Instagram, "
                    + "ordenados por fecha de publicación descendente."
    )
    public ResponseEntity<ApiResponse<Page<GalleryMediaResponse>>> listMedia(
            @Parameter(description = "Número de página (0-indexed)")
            @RequestParam(defaultValue = "0") int page,

            @Parameter(description = "Elementos por página")
            @RequestParam(defaultValue = "12") int size,

            @Parameter(description = "Filtro por tipo de medio: IMAGE, VIDEO, CAROUSEL_ALBUM o ALL")
            @RequestParam(defaultValue = "ALL") String type
    ) {
        Page<GalleryMediaResponse> media = galleryService.getGalleryMedia(page, size, type);
        return ResponseEntity.ok(ApiResponse.success(media));
    }

    /**
     * Detalle de un medio específico.
     */
    @GetMapping("/{id}")
    @Operation(
            summary = "Obtener medio por ID",
            description = "Devuelve el detalle de un medio específico de la galería."
    )
    public ResponseEntity<ApiResponse<GalleryMediaResponse>> getMedia(
            @Parameter(description = "ID del medio en Instagram")
            @PathVariable String id
    ) {
        GalleryMediaResponse media = galleryService.getMediaById(id);
        if (media == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(ApiResponse.success(media));
    }

    /**
     * Fuerza una sincronización manual con Instagram.
     * Útil para la primera carga o para actualizar datos inmediatamente.
     */
    @PostMapping("/sync")
    @Operation(
            summary = "Sincronizar galería con Instagram",
            description = "Fuerza una sincronización inmediata del feed de Instagram. "
                    + "Útil para la carga inicial o actualizaciones manuales."
    )
    public ResponseEntity<ApiResponse<String>> syncInstagram() {
        int count = galleryService.syncFromInstagram();
        return ResponseEntity.ok(
                ApiResponse.success("Sincronización completada: " + count + " medios procesados"));
    }
}
