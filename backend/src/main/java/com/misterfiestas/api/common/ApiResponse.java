package com.misterfiestas.api.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Wrapper estándar para todas las respuestas de la API.
 * <p>
 * Formato consistente:
 * <pre>
 * {
 *   "data": { ... },
 *   "message": "...",     // opcional
 *   "error": "..."        // solo en caso de error
 * }
 * </pre>
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "Respuesta estándar de la API")
public record ApiResponse<T>(

        @Schema(description = "Datos de la respuesta")
        T data,

        @Schema(description = "Mensaje informativo")
        String message,

        @Schema(description = "Descripción del error (solo si hubo error)")
        String error
) {

    /**
     * Respuesta exitosa con datos.
     */
    public static <T> ApiResponse<T> success(T data) {
        return new ApiResponse<>(data, null, null);
    }

    /**
     * Respuesta exitosa con datos y mensaje.
     */
    public static <T> ApiResponse<T> success(T data, String message) {
        return new ApiResponse<>(data, message, null);
    }

    /**
     * Respuesta de error.
     */
    public static <T> ApiResponse<T> error(String error) {
        return new ApiResponse<>(null, null, error);
    }

    /**
     * Respuesta de error con mensaje adicional.
     */
    public static <T> ApiResponse<T> error(String error, String message) {
        return new ApiResponse<>(null, message, error);
    }
}
