package com.emranhss.home.repository;

import com.emranhss.home.entity.PoliceStation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPoliceStationRepo extends JpaRepository<PoliceStation, Integer> {

}
