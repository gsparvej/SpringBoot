package com.gsparvej.demoProject.repository;

import com.gsparvej.demoProject.entity.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IJobSeekerRepo extends JpaRepository<JobSeeker, Long> {
    Optional<JobSeeker> findByUserId(int userId);

}
