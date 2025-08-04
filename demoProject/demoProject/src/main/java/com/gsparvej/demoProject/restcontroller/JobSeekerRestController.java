package com.gsparvej.demoProject.restcontroller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gsparvej.demoProject.entity.JobSeeker;
import com.gsparvej.demoProject.entity.User;
import com.gsparvej.demoProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/jobSeeker/")
public class JobSeekerRestController {

    @Autowired
    private UserService userService;

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

    @GetMapping("")
    public List<JobSeeker> getAllJobSeekers() {
        List<JobSeeker> jobSeekers = new ArrayList<>();
        return jobSeekers;
    }
}
