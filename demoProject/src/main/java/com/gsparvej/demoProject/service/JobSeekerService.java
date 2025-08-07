package com.gsparvej.demoProject.service;

import com.gsparvej.demoProject.entity.JobSeeker;
import com.gsparvej.demoProject.repository.IJobSeekerRepo;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobSeekerService {

    @Autowired
    private IJobSeekerRepo jobSeekerRepo;

    public List<JobSeeker> getAll() {
        return jobSeekerRepo.findAll();
    }
    public Optional<JobSeeker> getById(Long id) {
        return jobSeekerRepo.findById(id);
    }
    public JobSeeker save(JobSeeker jobSeeker) {
        return jobSeekerRepo.save(jobSeeker);
    }
    public void delete(Long id) {
        jobSeekerRepo.deleteById(id);
    }
    public JobSeeker getProfileByUserId(int userId) {
        return jobSeekerRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Job Seeker Not Found"));
    }

}
