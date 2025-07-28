package com.emranhss.projectDemo.repository;

import com.emranhss.projectDemo.entity.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IJobSeekerRepo extends JpaRepository <JobSeeker, Long> {

}
