package com.gsparvej.lastDemo.service;

import com.gsparvej.lastDemo.entity.JobSeeker;
import com.gsparvej.lastDemo.repository.IJobSeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobSeekerService {

    @Autowired
    private IJobSeekerRepository jobSeekerRepository;

    public List<JobSeeker> getAll() {
        return jobSeekerRepository.findAll();
    }

    public Optional<JobSeeker> getById(Long id) {
        return jobSeekerRepository.findById(id);
    }

    public JobSeeker save(JobSeeker jobSeeker) {
        return jobSeekerRepository.save(jobSeeker);
    }

    public void delete(Long id) {
        jobSeekerRepository.deleteById(id);
    }

    public JobSeeker getProfileByUserId(int userId) {
        return jobSeekerRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Job Seeker not found"));
    }
}
