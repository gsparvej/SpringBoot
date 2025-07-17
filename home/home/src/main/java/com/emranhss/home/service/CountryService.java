package com.emranhss.home.service;

import com.emranhss.home.dto.CountryResponseDTO;
import com.emranhss.home.entity.Country;
import com.emranhss.home.repository.ICountryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private ICountryRepo countryRepo;

    public List<Country> getAllCountries() {
        return countryRepo.findAll();
    }
    public List<CountryResponseDTO> getAllCountryDTOs() {
        return getAllCountries().stream().map(c -> {
            CountryResponseDTO dto = new CountryResponseDTO();
            dto.setId(c.getId());
            dto.setName(c.getName());

            List<Integer> divisionIds = c.getDivisions().stream()
                    .map(d -> d.getId())
                    .toList();
            dto.setDivisions(divisionIds);
            return dto;

        }).toList();
    }
    public Country saveCountry(Country country) {
        return countryRepo.save(country);
    }
}
