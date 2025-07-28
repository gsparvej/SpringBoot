package com.emranhss.projectDemo.service;

import com.emranhss.projectDemo.entity.JobSeeker;
import com.emranhss.projectDemo.entity.Role;
import com.emranhss.projectDemo.entity.User;
import com.emranhss.projectDemo.repository.IUserRepo;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private IUserRepo userRepo;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JobSeekerService jobSeekerService;

    @Value("${file.upload-dir:src/main/resources/static/images}")
    private String uploadDir;

    public void saveOrUpdate(User user, MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            String filename = saveImage(imageFile, user.getName(), "users");
            user.setPhoto(filename);
        }

        user.setRole(Role.ADMIN);
        userRepo.save(user);
        sendActivationEmail(user);
    }

    public void registerJobSeeker(User user, MultipartFile imageFile, JobSeeker jobSeekerData) {
        if (imageFile != null && !imageFile.isEmpty()) {
            String userPhoto = saveImage(imageFile, user.getName(), "users");
            String jobSeekerPhoto = saveImage(imageFile, jobSeekerData.getName(), "jobSeeker");
            user.setPhoto(userPhoto);
            jobSeekerData.setPhoto(jobSeekerPhoto);
        }

        user.setRole(Role.JOBSEEKER);
        User savedUser = userRepo.save(user);
        jobSeekerData.setUser(savedUser);
        jobSeekerService.save(jobSeekerData);

        sendActivationEmail(savedUser);
    }

    private String saveImage(MultipartFile file, String name, String subFolder) {
        Path uploadPath = Paths.get(uploadDir, subFolder);

        try {
            Files.createDirectories(uploadPath);
            String cleanedName = name.trim().replaceAll("\\s+", "_");
            String filename = cleanedName + "_" + UUID.randomUUID();
            Path filePath = uploadPath.resolve(filename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            return filename;
        } catch (IOException e) {
            throw new RuntimeException("Failed to save image", e);
        }
    }

    private void sendActivationEmail(User user) {
        String subject = "Welcome to Our Service – Confirm Your Registration";

        String mailText = "<!DOCTYPE html>"
                + "<html><head><style>"
                + "body { font-family: Arial; }"
                + ".container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; }"
                + ".header { background-color: #4CAF50; color: white; padding: 10px; text-align: center; border-radius: 10px 10px 0 0; }"
                + ".content { padding: 20px; }"
                + ".footer { font-size: 0.9em; color: #777; text-align: center; margin-top: 20px; }"
                + "</style></head><body>"
                + "<div class='container'>"
                + "<div class='header'><h2>Welcome to Our Platform</h2></div>"
                + "<div class='content'>"
                + "<p>Dear " + user.getName() + ",</p>"
                + "<p>Thank you for registering with us. We're excited to have you!</p>"
                + "<p>Please confirm your email to activate your account.</p>"
                + "<p>For any help, contact our support team.</p>"
                + "<p>Best regards,<br>The Support Team</p>"
                + "</div>"
                + "<div class='footer'>&copy; " + java.time.Year.now() + " YourCompany. All rights reserved.</div>"
                + "</div></body></html>";

        try {
            emailService.sendSimpleEmail(user.getEmail(), subject, mailText);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send activation email", e);
        }
    }

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public User findById(int id) {
        return userRepo.findById(id).orElse(null);
    }

    public void delete(User user) {
        userRepo.delete(user);
    }
}
