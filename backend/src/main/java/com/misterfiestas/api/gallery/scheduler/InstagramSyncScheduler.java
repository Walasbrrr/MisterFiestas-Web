package com.misterfiestas.api.gallery.scheduler;

import com.misterfiestas.api.gallery.GalleryService;
import com.misterfiestas.api.gallery.InstagramApiClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Scheduler que sincroniza automáticamente el feed de Instagram
 * con la base de datos.
 * <p>
 * <b>Frecuencia de sincronización:</b>
 * <ul>
 *   <li>Feed de medios: cada lunes a las 6:00 AM (hora del servidor)</li>
 *   <li>Renovación de token: el día 1 de cada mes a las 3:00 AM</li>
 * </ul>
 */
@Component
public class InstagramSyncScheduler {

    private static final Logger log = LoggerFactory.getLogger(InstagramSyncScheduler.class);

    private final GalleryService galleryService;
    private final InstagramApiClient instagramClient;

    public InstagramSyncScheduler(GalleryService galleryService,
                                   InstagramApiClient instagramClient) {
        this.galleryService = galleryService;
        this.instagramClient = instagramClient;
    }

    /**
     * Sincroniza el feed de Instagram cada lunes a las 6:00 AM.
     * <p>
     * Cron: segundo minuto hora díaDelMes mes díaDeLaSemana
     * MON = lunes
     */
    @Scheduled(cron = "0 0 6 * * MON")
    public void syncInstagramFeed() {
        log.info("=== SYNC SEMANAL: Iniciando sincronización del feed de Instagram ===");

        try {
            int count = galleryService.syncFromInstagram();
            log.info("=== SYNC SEMANAL: Completado — {} medios sincronizados ===", count);
        } catch (Exception e) {
            log.error("=== SYNC SEMANAL: Error durante la sincronización ===", e);
        }
    }

    /**
     * Renueva el token de larga duración de Instagram el día 1 de cada mes a las 3:00 AM.
     * <p>
     * Los tokens de larga duración de Instagram expiran a los 60 días.
     * Renovarlo mensualmente garantiza que nunca expire.
     */
    @Scheduled(cron = "0 0 3 1 * *")
    public void refreshInstagramToken() {
        log.info("=== TOKEN REFRESH: Iniciando renovación del token de Instagram ===");

        try {
            String newToken = instagramClient.refreshLongLivedToken();

            if (newToken != null) {
                instagramClient.setAccessToken(newToken);
                log.info("=== TOKEN REFRESH: Token renovado exitosamente ===");
                log.warn("IMPORTANTE: Actualiza la variable INSTAGRAM_ACCESS_TOKEN en tu "
                        + "entorno (.env o VPS) con el nuevo token para que persista entre reinicios.");
            } else {
                log.error("=== TOKEN REFRESH: No se pudo renovar el token. "
                        + "Revisa las credenciales de Instagram. ===");
            }
        } catch (Exception e) {
            log.error("=== TOKEN REFRESH: Error durante la renovación ===", e);
        }
    }
}
