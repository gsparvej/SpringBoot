package com.emranhss.projectDemo.service;


import com.emranhss.projectDemo.entity.JobSeeker;
import com.emranhss.projectDemo.repository.IJobSeekerRepo;
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

}
