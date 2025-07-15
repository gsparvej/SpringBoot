package com.emranhss.project.repository;


import com.emranhss.project.entity.PoliceStation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPoliceStationRepo extends JpaRepository<PoliceStation, Integer> {
}
