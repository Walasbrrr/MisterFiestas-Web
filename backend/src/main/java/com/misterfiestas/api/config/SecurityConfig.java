package com.misterfiestas.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;

/**
 * Configuración de seguridad mínima para el MVP.
 * <p>
 * Todos los endpoints de la API de galería son públicos.
 * Swagger UI y Actuator health también son accesibles.
 * Se preparará JWT cuando se necesite autenticación (panel admin).
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CorsConfigurationSource corsConfigurationSource;

    public SecurityConfig(CorsConfigurationSource corsConfigurationSource) {
        this.corsConfigurationSource = corsConfigurationSource;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(cors -> cors.configurationSource(corsConfigurationSource))
            .csrf(csrf -> csrf.disable())
            .headers(headers -> headers
                    .frameOptions(frame -> frame.sameOrigin())) // H2 console needs frames
            .sessionManagement(session -> session
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                    // Endpoints públicos
                    .requestMatchers("/api/v1/gallery/**").permitAll()
                    .requestMatchers("/api/gallery/**").permitAll()
                    .requestMatchers("/api/v1/services/**").permitAll()
                    // Swagger / OpenAPI
                    .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                    // Actuator health
                    .requestMatchers("/actuator/health").permitAll()
                    // H2 Console (solo en dev/h2)
                    .requestMatchers("/h2-console/**").permitAll()
                    // Todo lo demás requiere autenticación (futuro)
                    .anyRequest().authenticated()
            );

        return http.build();
    }
}
