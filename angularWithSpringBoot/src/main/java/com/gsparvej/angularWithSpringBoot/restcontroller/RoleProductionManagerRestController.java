package com.gsparvej.angularWithSpringBoot.restcontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gsparvej.angularWithSpringBoot.dto.RoleMerchandiserManagerResponseDTO;
import com.gsparvej.angularWithSpringBoot.dto.RoleProductionManagerResponseDTO;
import com.gsparvej.angularWithSpringBoot.entity.RoleMerchandiserManager;
import com.gsparvej.angularWithSpringBoot.entity.RoleProductionManager;
import com.gsparvej.angularWithSpringBoot.entity.User;
import com.gsparvej.angularWithSpringBoot.service.AuthService;
import com.gsparvej.angularWithSpringBoot.service.RoleProductionManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.security.sasl.AuthenticationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/pro_manager")
public class RoleProductionManagerRestController {

    @Autowired
    private AuthService authService;

    @Autowired
    private RoleProductionManagerService roleProductionManagerService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    // Production Manager Registration

    @PostMapping("/reg")
    public ResponseEntity<Map<String, String>> saveProductionManager(
            @RequestPart("user") String userJson,
            @RequestPart("proManager") String proManagerJson,
            @RequestPart(value = "photo", required = false) MultipartFile file
    ) throws JsonProcessingException {

        Map<String, String> response = new HashMap<>();

        try {
            // Deserialize JSON strings to Java objects
            User user = objectMapper.readValue(userJson, User.class);
            RoleProductionManager roleProductionManager = objectMapper.readValue(proManagerJson, RoleProductionManager.class);

            // Call service to register Production Manager
            authService.registerProductionManager(user, file, roleProductionManager);

            response.put("message", " Production Manager saved successfully");
            return ResponseEntity.ok(response);

        } catch (AuthenticationException authEx) {
            // If there's an authentication issue, return 401 Unauthorized
            response.put("message", "Authentication failed: " + authEx.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);

        } catch (JsonProcessingException jsonEx) {
            // Bad JSON format
            response.put("message", "Invalid input data format: " + jsonEx.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);

        } catch (Exception e) {
            // Unexpected server error
            e.printStackTrace(); // Log full stack trace to console or log file
            response.put("message", "Admin save failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // Get all merchandiser manager
    @GetMapping("all")
    public ResponseEntity<List<RoleProductionManagerResponseDTO>> getAllProManagerResponseDTOs() {
        List<RoleProductionManagerResponseDTO> manager = roleProductionManagerService.getAllProductionManagerResponseDTOS();
        return ResponseEntity.ok(manager);
    }
}
