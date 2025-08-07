package com.gsparvej.lastDemo.restcontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gsparvej.lastDemo.entity.JobSeeker;
import com.gsparvej.lastDemo.entity.User;
import com.gsparvej.lastDemo.repository.IJobSeekerRepository;
import com.gsparvej.lastDemo.repository.IUserRepository;
import com.gsparvej.lastDemo.service.AuthService;
import com.gsparvej.lastDemo.service.JobSeekerService;
import com.gsparvej.lastDemo.service.UserService;
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
@RequestMapping("/api/jobseeker/")
public class JobSeekerRestController {

    @Autowired
    private AuthService authService;

    @Autowired
    private IJobSeekerRepository jobSeekerRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private JobSeekerService jobSeekerService;
    @Autowired
    private UserService userService;

    @PostMapping("")
    public ResponseEntity<Map<String, String>> registerJobSeeker(
            @RequestPart(value = "user") String userJson,
            @RequestPart(value = "jobSeeker") String jobSeekerJson,
            @RequestParam(value = "photo") MultipartFile file
    ) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        User user = objectMapper.readValue(userJson, User.class);
        JobSeeker jobSeeker = objectMapper.readValue(jobSeekerJson, JobSeeker.class);

        try {
            authService.registerJobSeeker(user, file, jobSeeker);
            Map<String, String> response = new HashMap<>();
            response.put("Message", "User Added Successfully ");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {

            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("Message", "User Add Failed " + e);
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @GetMapping("all")
    public ResponseEntity<List<JobSeeker>> getAllUsers() {
        List<JobSeeker> jobSeekerList = jobSeekerService.getAll();
        return ResponseEntity.ok(jobSeekerList);

    }

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(Authentication authentication) {
        System.out.println("Authenticated User: " + authentication.getName());
        System.out.println("Authorities: " + authentication.getAuthorities());
        String email = authentication.getName();
        Optional<User> user =userRepository.findByEmail(email);
        JobSeeker jobSeeker = jobSeekerService.getProfileByUserId(user.get().getId());
        return ResponseEntity.ok(jobSeeker);

    }
}
