package com.emranhss.home.service;

import com.emranhss.home.dto.DivisionResponseDTO;
import com.emranhss.home.entity.Division;
import com.emranhss.home.repository.IDivisionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DivisionService {

    @Autowired
    private IDivisionRepo divisionRepo;

    public List<Division> getAllDivisions() {
        return divisionRepo.findAll();
    }
    public List<DivisionResponseDTO> getAllDivisionDTOs() {
        return getAllDivisions().stream().map(div -> {
          DivisionResponseDTO dto = new DivisionResponseDTO();
          dto.setId(div.getId());
          dto.setName(div.getName());

          List<Integer> districtIds = div.getDistricts().stream()
                  .map(d -> d.getId()).toList();
          dto.setDistricts(districtIds);
          return dto;
        }).toList();
    }

    public Division saveDivision(Division division) {
        return divisionRepo.save(division);
    }

}
