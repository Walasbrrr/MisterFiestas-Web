package com.misterfiestas.api.gallery.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

/**
 * DTOs para mapear la respuesta JSON de la Instagram Graph API.
 * <p>
 * Ejemplo de respuesta:
 * <pre>
 * {
 *   "data": [ { "id": "...", "media_type": "IMAGE", ... } ],
 *   "paging": { "cursors": { "after": "..." }, "next": "https://..." }
 * }
 * </pre>
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record InstagramMediaPayload(
        List<MediaItem> data,
        Paging paging
) {

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record MediaItem(
            String id,

            @JsonProperty("media_type")
            String mediaType,

            @JsonProperty("media_url")
            String mediaUrl,

            @JsonProperty("thumbnail_url")
            String thumbnailUrl,

            String permalink,
            String caption,
            String timestamp,

            @JsonProperty("like_count")
            Integer likeCount
    ) {}

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Paging(
            Cursors cursors,
            String next
    ) {}

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Cursors(
            String before,
            String after
    ) {}
}
