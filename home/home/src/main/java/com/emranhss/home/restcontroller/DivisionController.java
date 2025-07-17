package com.emranhss.home.restcontroller;

import com.emranhss.home.dto.DivisionResponseDTO;
import com.emranhss.home.entity.Division;
import com.emranhss.home.service.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/division/")
public class DivisionController {

    @Autowired
    private DivisionService divisionService;

    @GetMapping("")
    public ResponseEntity<List<DivisionResponseDTO>> getDivisions() {
        List<DivisionResponseDTO> divtoList = divisionService.getAllDivisionDTOs();
        return ResponseEntity.ok(divtoList);
    }

    public ResponseEntity<Division> createDivision(@RequestBody Division division) {
        Division saved = divisionService.saveDivision(division);
        return ResponseEntity.ok(saved);
    }

}
