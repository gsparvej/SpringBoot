package com.gsparvej.demoProject.repository;

import com.gsparvej.demoProject.entity.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IJobSeekerRepo extends JpaRepository<JobSeeker, Long> {

}
