package com.gsparvej.demoProject.restcontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gsparvej.demoProject.entity.JobSeeker;
import com.gsparvej.demoProject.entity.User;
import com.gsparvej.demoProject.repository.IUserRepo;
import com.gsparvej.demoProject.service.JobSeekerService;
import com.gsparvej.demoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/api/jobSeeker/")
public class JobSeekerRestController {

    @Autowired
    private UserService userService;

    @Autowired
    private JobSeekerService  jobSeekerService;
    @Autowired
    private IUserRepo userRepo;

    @PostMapping("")
    public ResponseEntity<Map<String, String>> registerJobSeeker(
            @RequestPart(value = "user") String userJson,
            @RequestPart(value = "jobSeeker") String jobSeekerJson,
            @RequestParam(value = "photo")MultipartFile file
            ) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        User user = objectMapper.readValue(userJson, User.class);
        JobSeeker jobSeeker = objectMapper.readValue(jobSeekerJson, JobSeeker.class);


        try {
            userService.registerJobSeeker(user, file, jobSeeker);
            Map<String, String> response = new HashMap<>();
            response.put("Message", "User Added Succesfully");
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Message", "User Add Failed "+e);
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("all")
    public ResponseEntity<List<JobSeeker>> getAllUsers() {
        List<JobSeeker> jobSeekerList = jobSeekerService.getAll();
        return ResponseEntity.ok(jobSeekerList);
    }

    @GetMapping("profile")
    public ResponseEntity<?> getProfile(Authentication authentication) {
        System.out.println("Authentication User: " +authentication.getName());
        System.out.println("Authorities: " + authentication.getAuthorities());
        String email = authentication.getName();
        Optional<User> user = userRepo.findByEmail(email);
        JobSeeker jobSeeker = jobSeekerService.getProfileByUserId(user.get().getId());
        return ResponseEntity.ok(jobSeeker);
    }
}
