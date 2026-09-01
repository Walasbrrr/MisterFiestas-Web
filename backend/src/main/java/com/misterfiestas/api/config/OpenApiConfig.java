package com.misterfiestas.api.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

/**
 * Configuración de OpenAPI / Swagger para la documentación interactiva.
 * Accesible en /swagger-ui/index.html
 */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI misterFiestasOpenApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Mister Fiestas API")
                        .description("API para el sitio web de Mister Fiestas. "
                                + "Gestiona la galería de Instagram y futuros módulos del negocio.")
                        .version("v1.0.0")
                        .contact(new Contact()
                                .name("Equipo Mister Fiestas")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8080")
                                .description("Desarrollo local")));
    }
}
