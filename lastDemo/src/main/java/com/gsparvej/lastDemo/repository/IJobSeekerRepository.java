package com.gsparvej.lastDemo.repository;

import com.gsparvej.lastDemo.entity.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IJobSeekerRepository extends JpaRepository<JobSeeker, Long> {
  Optional<JobSeeker> findByUserId(int userId);
}
