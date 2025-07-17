package com.emranhss.home.restcontroller;

import com.emranhss.home.entity.PoliceStation;
import com.emranhss.home.service.PoliceStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policestation/")
public class PoliceStationController {

    @Autowired
    private PoliceStationService policeStationService;

    @PostMapping("")
    public void save(@RequestBody PoliceStation ps) {
        policeStationService.saveOrUpdate(ps);
    }

    @GetMapping("")
    public List<PoliceStation> getAllPoliceStation() {
        return policeStationService.findAll();
    }
    @GetMapping("{id}")
    public PoliceStation getById(@PathVariable Integer id) {
        return policeStationService.findById(id).get();
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Integer id) {
        policeStationService.deleteById(id);
    }
    @PutMapping("{id}")
    public void update(@RequestBody PoliceStation ps ) {
        policeStationService.saveOrUpdate(ps);
    }

}
