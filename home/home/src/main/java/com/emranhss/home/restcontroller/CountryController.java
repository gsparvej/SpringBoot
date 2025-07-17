package com.emranhss.home.restcontroller;

import com.emranhss.home.dto.CountryResponseDTO;
import com.emranhss.home.entity.Country;
import com.emranhss.home.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/countries/")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("")
    public ResponseEntity<List<CountryResponseDTO>> getCountries() {
        List<CountryResponseDTO> ctoList = countryService.getAllCountryDTOs();
        return ResponseEntity.ok(ctoList);
    }

    public ResponseEntity<Country> createCountrey(@RequestBody Country country) {
        Country saved = countryService.saveCountry(country);
        return ResponseEntity.ok(saved);
    }
}
