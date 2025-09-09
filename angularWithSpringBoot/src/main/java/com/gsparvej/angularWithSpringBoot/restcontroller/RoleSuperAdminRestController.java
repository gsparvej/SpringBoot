package com.gsparvej.angularWithSpringBoot.restcontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gsparvej.angularWithSpringBoot.dto.RoleSuperAdminResponseDTO;
import com.gsparvej.angularWithSpringBoot.entity.RoleSuperAdmin;
import com.gsparvej.angularWithSpringBoot.entity.User;
import com.gsparvej.angularWithSpringBoot.repository.IUserRepo;
import com.gsparvej.angularWithSpringBoot.service.AuthService;
import com.gsparvej.angularWithSpringBoot.service.RoleSuperAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/super_admin")
public class RoleSuperAdminRestController {

    @Autowired
    private IUserRepo userRepo;


    @Autowired
    private RoleSuperAdminService roleSuperAdminService;

    @Autowired
    private AuthService authService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    // Super Admin Registration
    @PostMapping("/reg")
    public ResponseEntity<Map<String, String>> saveSuperAdmin(
            @RequestPart("user") String userJson,
            @RequestPart("superadmin") String superAdminJson,
            @RequestPart(value = "photo", required = false) MultipartFile file
    ) throws JsonProcessingException {
        User user = objectMapper.readValue(userJson, User.class);
        RoleSuperAdmin roleSuperAdmin = objectMapper.readValue(superAdminJson, RoleSuperAdmin.class);

        try {
            authService.registerSuperAdmin(user, file, roleSuperAdmin);
            Map<String, String> response = new HashMap<>();
            response.put("message", "Super Admin Saved successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", " Super Admin Saved failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }


    // Get all super admins
    @GetMapping("all")
    public ResponseEntity<List<RoleSuperAdminResponseDTO>> getAllSuperAdminDTOs() {
        List<RoleSuperAdminResponseDTO> admins = roleSuperAdminService.getAllRoleSuperAdminResponseDTOS();
        return ResponseEntity.ok(admins);
    }

    // Get logged-in admin profile
//    @GetMapping("/profile")
//    public ResponseEntity<RoleSuperAdminResponseDTO> getProfile(Authentication authentication) {
//        if (authentication == null || authentication.getName() == null) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
//        String email = authentication.getName();
//        RoleSuperAdminResponseDTO admin = roleSuperAdminService.getProfileByEmail(email);
//        return ResponseEntity.ok(admin);
//    }


    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(Authentication authentication) {
        System.out.println("Authenticated User: " + authentication.getName());
        System.out.println("Authorities: " + authentication.getAuthorities());
        String email = authentication.getName();
        Optional<User> user =userRepo.findByEmail(email);
        RoleSuperAdmin roleSuperAdmin = roleSuperAdminService.getProfileByUserId(user.get().getId());
        return ResponseEntity.ok(roleSuperAdmin);

    }


}
