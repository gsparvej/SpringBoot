package com.gsparvej.demoProject.jwt;

import com.gsparvej.demoProject.service.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter  extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserService userService;

    public JwtAuthenticationFilter(JwtService jwtService, UserService userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain
                                    ) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        // If Authorization header is missing or doesn't start with "Bearer ", skip JWT processing
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);  // Continue with the next filter in the chain
            return;  // Exit current filter as no JWT is provided
        }

        // Extracting the JWT token from the Authorization header (removing "Bearer " prefix)
        String token = authHeader.substring(7);

        // Extracting the username from the token using JwtService
        String username = jwtService.extractUserName(token);

        // Proceed only if username is extracted and user is not already authenticated
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // Loading user details (from DB) using UserService based on extracted username
            UserDetails userDetails = userService.loadUserByUsername(username);

            // Validating the token against the loaded user details
            if (jwtService.isValid(token, userDetails)) {

                // If token is valid, create an Authentication token (Spring Security standard)
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,                      // Principal (user details)
                        null,                             // Credentials (password) — null since already authenticated
                        userDetails.getAuthorities()      // User roles/authorities
                );
                // Building web authentication details (like remote IP, session ID) from the request
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                // Setting the authentication object in Spring Security's SecurityContext
                SecurityContextHolder.getContext().setAuthentication(authToken);



    }
}
        // Continue with the remaining filter chain (other filters, controllers, etc.)
        filterChain.doFilter(request, response);
    }
}
