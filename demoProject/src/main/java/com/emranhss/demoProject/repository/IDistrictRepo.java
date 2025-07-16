package com.emranhss.demoProject.repository;

import com.emranhss.demoProject.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDistrictRepo extends JpaRepository<District, Integer> {

    public District findByName(String name);
}
