package com.emranhss.demoProject.service;

import com.emranhss.demoProject.dto.DistrictResponseDTO;
import com.emranhss.demoProject.entity.District;
import com.emranhss.demoProject.repository.IDistrictRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistrictService {

    @Autowired
    private IDistrictRepo districtRepo;

    public void save(District district) {
        districtRepo.save(district);
    }

    public List<District> getAllDistrict() {
        return districtRepo.findAll();
    }

    public List<DistrictResponseDTO> getAllDistrictDTOs() {
        List<District> districts = getAllDistrict();
        return districts.stream().map(d -> {
            DistrictResponseDTO dto = new DistrictResponseDTO();
            dto.setId(d.getId());
            dto.setName(d.getName());

            List<Integer> psIds = d.getPoliceStations().stream()
                    .map(ps -> ps.).toList();

            dto.setPoliceStations(psIds);
            return dto;
        }).toList();
    }

    public District getDistrictById(int id) {
        return districtRepo.findById(id).get();

    }

    public void deleteDistrictById(int id) {
        districtRepo.deleteById(id);
    }

    public District getDistrictByName(String name) {
        return districtRepo.findByName(name);
    }

}
