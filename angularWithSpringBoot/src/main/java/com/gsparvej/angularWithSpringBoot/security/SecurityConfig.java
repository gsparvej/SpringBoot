package com.gsparvej.angularWithSpringBoot.security;

import com.gsparvej.angularWithSpringBoot.jwt.JwtAuthenticationFilter;
import com.gsparvej.angularWithSpringBoot.jwt.JwtService;
import com.gsparvej.angularWithSpringBoot.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {



    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,
                                           JwtAuthenticationFilter jwtAuthenticationFilter,
                                           UserService userService) throws Exception {

        return http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(req -> req
                        .requestMatchers("/api/auth/login", "/api/auth/logout","/api/auth/active/**","/api/auth/all","/api/super_admin/reg", "/api/super_admin/all", "/api/admin/reg",
                                "/api/admin/all" , "/api/hr_admin/reg", "/api/merchan_manager/reg", "/api/pro_manager/reg", "/api/purchase_manager/reg", "/api/admin/profile"
                                ).permitAll()
                        .requestMatchers("/api/super_admin/reg").hasRole("SUPERADMIN")
                        .requestMatchers("/api/admin/reg", "/api/admin/profile","/api/department" ,"/api/department/**", "/api/designation/by-department/**",
                                "/api/designation").hasRole("ADMIN")
                        .requestMatchers("/api/hr_admin/reg").hasRole("HRADMIN")
                        .requestMatchers("/api/order/**", "/api/bom/style/**" ,"/api/buyer", "/api/buyer/**", "/api/bomstyle", "/api/bomstyle/**", "/api/uom", "/api/uom/**",
                                "/api/raw_materials").hasRole("MERCHANDISERMANAGER")
                        .requestMatchers("/api/pro_manager/reg").hasRole("PRODUCTIONMANAGER")
                        .requestMatchers("/api/purchase_manager/reg").hasRole("PURCHASEMANAGER")
                        .anyRequest().authenticated()
                )
                .userDetailsService(userService)
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }






    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter(JwtService jwtService, UserService userService) {
        return new JwtAuthenticationFilter(jwtService, userService);
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:4200", "http://127.0.0.1:4200"));
        configuration.setAllowedMethods(List.of("GET", "POST", "DELETE", "PUT", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Cache_Control", "Content-type"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }



//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
////        configuration.setAllowedOrigins(List.of("http://localhost:4200", "http://192.168.88.250:4200"));
//        configuration.setAllowedOrigins(List.of("*"));
//        configuration.setAllowedMethods(List.of("GET", "POST", "DELETE", "PUT", "OPTIONS"));
//        configuration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
}
