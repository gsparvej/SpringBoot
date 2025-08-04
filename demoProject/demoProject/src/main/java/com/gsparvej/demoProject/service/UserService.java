package com.gsparvej.demoProject.service;

import com.gsparvej.demoProject.entity.JobSeeker;
import com.gsparvej.demoProject.entity.Role;
import com.gsparvej.demoProject.entity.User;
import com.gsparvej.demoProject.repository.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private IUserRepo userRepo;

    @Autowired
    private JobSeekerService jobSeekerService;

    @Value("src/main/resources/static/images")
    private String uploadDir;

    public void saveOrUpdate(User user, MultipartFile imageFile) {
        if(imageFile != null && !imageFile.isEmpty()) {
            String fileName = saveImageForUser(imageFile, user);
            user.setPhoto(fileName);
        }
        user.setRole(Role.ADMIN);
        userRepo.save(user);
    }

    public List<User> findAll() {
        return userRepo.findAll();
    }
    public User findById(int id) {
        return userRepo.findById(id).get();
    }
    public void delete(User user) {
        userRepo.delete(user);
    }


    // ekhane mail er method hbe , mail apatoto kori ni
    
    public String saveImageForUser(MultipartFile file, User user) {
        Path uploadPath = Paths.get(uploadDir+ "/users");
    if (!Files.exists(uploadPath)) {
        try {
            Files.createDirectory(uploadPath);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
    String fileName = user.getName()+ "_"+ UUID.randomUUID().toString();


        try {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return  fileName;

    }
    // for User Folder
    public String saveImageForJobSeeker(MultipartFile file, JobSeeker jobSeeker) {
        Path uploadPath = Paths.get(uploadDir+ "/jobSeeker");
        if(!Files.exists(uploadPath)) {
            try {
                Files.createDirectory(uploadPath);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

        }
        String jobSeekerName = jobSeeker.getName();
        String fileName = jobSeekerName.trim().replaceAll("\\s+", "_");

        String savedFileName = fileName+"_"+ UUID.randomUUID().toString();

        try {
            Path filePath = uploadPath.resolve(savedFileName);
            Files.copy(file.getInputStream(),filePath);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return savedFileName;
    }

    public void registerJobSeeker(User user, MultipartFile imageFile, JobSeeker jobSeekerData) {
        if (imageFile != null && !imageFile.isEmpty()) {
            String fileName = saveImageForUser(imageFile, user);
            String jobSeekerPhoto = saveImageForJobSeeker(imageFile, jobSeekerData);
            jobSeekerData.setPhoto(jobSeekerPhoto);
            user.setPhoto(fileName);
        }
        user.setRole(Role.JOBSEEKER);
        User savedUser = userRepo.save(user);

        jobSeekerData.setUser(savedUser);
        jobSeekerService.save(jobSeekerData);

    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findByEmail(username)
                .orElseThrow(()-> new UsernameNotFoundException(
                        ("User Not found")));
    }
}
