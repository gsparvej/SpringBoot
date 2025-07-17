package com.emranhss.home.repository;

import com.emranhss.home.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDistrictRepository extends JpaRepository<District, Integer> {
    public District findByName(String name);
}
