package com.gsparvej.demoProject.service;

import com.gsparvej.demoProject.dto.AuthenticationResponse;
import com.gsparvej.demoProject.entity.JobSeeker;
import com.gsparvej.demoProject.entity.Role;
import com.gsparvej.demoProject.entity.Token;
import com.gsparvej.demoProject.entity.User;
import com.gsparvej.demoProject.jwt.JwtService;
import com.gsparvej.demoProject.repository.ITokenRepository;
import com.gsparvej.demoProject.repository.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
@Service
public class UserService implements UserDetailsService {

    @Autowired
    private IUserRepo userRepo;

    @Autowired
    private ITokenRepository tokenRepository;

    @Autowired
    private JobSeekerService jobSeekerService;

    @Value("src/main/resources/static/images")
    private String uploadDir;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;

    @Autowired
    @Lazy
    private AuthenticationManager authenticationManager;

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
        Path uploadPath = Paths.get(uploadDir + "/users");

        // Create directory if it does not exist (including all parents)
        if (!Files.exists(uploadPath)) {
            try {
                Files.createDirectories(uploadPath);
            } catch (IOException e) {
                throw new RuntimeException("Could not create upload directory", e);
            }
        }

        // Generate unique file name
        String fileName = user.getName() + "_" + UUID.randomUUID();

        try {
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath);
        } catch (IOException e) {
            throw new RuntimeException("Could not save file", e);
        }

        return fileName;
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

        // Encode Password before saving User
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.JOBSEEKER);
        user.setActive(false);

        User savedUser = userRepo.save(user);

        jobSeekerData.setUser(savedUser);
        jobSeekerService.save(jobSeekerData);


        String jwt = jwtService.generateToken(savedUser);

    }
    private void savedUserToken(String jwt, User user) {
        Token token = new Token();
        token.setToken(jwt);
        token.setLogout(false);
        token.setUser(user);

        tokenRepository.save(token);
    }

    private void removeAllTokenByUser(User user) {
        List<Token> validTokens = tokenRepository.findAllTokenByUser(user.getId());

        if (validTokens.isEmpty()) {
            return;
        }
        validTokens.forEach(t-> {
            t.setLogout(true);
        });
        tokenRepository.saveAll(validTokens);
    }

    // It is Login Method
    public AuthenticationResponse authencate(User request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        User user = userRepo.findByEmail(request.getEmail()).orElseThrow();
        if(!user.isActive()) {
            throw new RuntimeException("Account is not activated. Please check your email for activation link.");
        }
        // generate token for current user
        String jwt = jwtService.generateToken(user);

        // Remove All existing tokens  for this user
        removeAllTokenByUser(user);

        savedUserToken(jwt, user);
        return new AuthenticationResponse(jwt, "User Login Successful");

    }

    public String activeUser(int id) {
        User user = userRepo.findById(id)
                .orElseThrow(()-> new RuntimeException("User not found with this ID "+id))  ;

        if (user !=null) {
            user.setActive(true);

            userRepo.save(user);
            return "User Activated Successfully!";
        } else {
            return "Invalid Activation Token!";
        }
    }





    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {


        User user = userRepo.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found"));

        List<GrantedAuthority> authorities = Collections.singletonList(
                new SimpleGrantedAuthority("ROLE_" + user.getRole().name())
        );

        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                authorities
        );


    }


}
