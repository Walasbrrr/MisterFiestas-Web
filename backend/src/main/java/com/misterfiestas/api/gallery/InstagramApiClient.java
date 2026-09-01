package com.misterfiestas.api.gallery;

import com.misterfiestas.api.gallery.dto.InstagramMediaPayload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Cliente HTTP para la Instagram Graph API.
 * <p>
 * Descarga el feed de medios de una cuenta Business/Creator y gestiona
 * la renovación del token de larga duración (60 días).
 */
@Component
public class InstagramApiClient {

    private static final Logger log = LoggerFactory.getLogger(InstagramApiClient.class);

    private static final String GRAPH_API_BASE = "https://graph.instagram.com";
    private static final String MEDIA_FIELDS =
            "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count";

    /** Límite de páginas para evitar loops infinitos. */
    private static final int MAX_PAGES = 10;

    private final RestClient restClient;

    @Value("${instagram.user-id}")
    private String userId;

    @Value("${instagram.access-token}")
    private String accessToken;

    @Value("${instagram.api-version:v21.0}")
    private String apiVersion;

    public InstagramApiClient(RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder
                .baseUrl(GRAPH_API_BASE)
                .build();
    }

    /**
     * Descarga todos los medios del feed de Instagram, manejando paginación.
     *
     * @return lista completa de medios del feed
     */
    public List<InstagramMediaPayload.MediaItem> fetchAllMedia() {
        List<InstagramMediaPayload.MediaItem> allMedia = new ArrayList<>();
        String url = "/{version}/{userId}/media?fields={fields}&access_token={token}&limit=50";

        try {
            InstagramMediaPayload response = restClient.get()
                    .uri(url, apiVersion, userId, MEDIA_FIELDS, accessToken)
                    .retrieve()
                    .body(InstagramMediaPayload.class);

            if (response != null && response.data() != null) {
                allMedia.addAll(response.data());
                log.info("Página 1: {} medios descargados de Instagram", response.data().size());

                // Seguir paginación si hay más páginas
                String nextUrl = (response.paging() != null) ? response.paging().next() : null;
                int pageCount = 1;

                while (nextUrl != null && pageCount < MAX_PAGES) {
                    pageCount++;
                    InstagramMediaPayload nextResponse = restClient.get()
                            .uri(nextUrl)
                            .retrieve()
                            .body(InstagramMediaPayload.class);

                    if (nextResponse != null && nextResponse.data() != null) {
                        allMedia.addAll(nextResponse.data());
                        log.info("Página {}: {} medios descargados", pageCount, nextResponse.data().size());
                        nextUrl = (nextResponse.paging() != null) ? nextResponse.paging().next() : null;
                    } else {
                        break;
                    }
                }
            }
        } catch (RestClientException e) {
            log.error("Error al obtener medios de Instagram: {}", e.getMessage(), e);
            throw e; // Se maneja como BAD_GATEWAY en GlobalExceptionHandler
        }

        log.info("Total de medios descargados de Instagram: {}", allMedia.size());
        return allMedia;
    }

    /**
     * Renueva el token de larga duración de Instagram.
     * <p>
     * Los tokens de larga duración expiran a los 60 días.
     * Este método debe llamarse antes de que expire (ej. mensualmente).
     *
     * @return el nuevo access token, o null si falló
     */
    @SuppressWarnings("unchecked")
    public String refreshLongLivedToken() {
        try {
            String url = "https://graph.instagram.com/refresh_access_token"
                    + "?grant_type=ig_refresh_token&access_token={token}";

            Map<String, Object> response = restClient.get()
                    .uri(url, accessToken)
                    .retrieve()
                    .body(Map.class);

            if (response != null && response.containsKey("access_token")) {
                String newToken = (String) response.get("access_token");
                Long expiresIn = response.get("expires_in") != null
                        ? ((Number) response.get("expires_in")).longValue()
                        : null;

                log.info("Token de Instagram renovado exitosamente. Expira en {} segundos", expiresIn);
                return newToken;
            }

            log.warn("Respuesta inesperada al renovar token de Instagram: {}", response);
            return null;

        } catch (RestClientException e) {
            log.error("Error al renovar token de Instagram: {}", e.getMessage(), e);
            return null;
        }
    }

    // --- Para actualizar el token en runtime sin reiniciar ---

    public void setAccessToken(String newToken) {
        this.accessToken = newToken;
    }

    public String getAccessToken() {
        return accessToken;
    }
}
