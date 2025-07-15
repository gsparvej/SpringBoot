package com.emranhss.project.restcontroller;

import com.emranhss.project.entity.PoliceStation;
import com.emranhss.project.service.PoliceStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/policestation/")
public class PoliceStationRestController {

    @Autowired
    private PoliceStationService policeStationService;

    @PostMapping("")
    public void save(@RequestBody PoliceStation police){
        policeStationService.saveOrUpdate(police);
    }

    @GetMapping("")
    public List<PoliceStation> getAllPoliceStation() {
        return policeStationService.findAll();
    }

    @GetMapping("{id}")
    public PoliceStation getById(@PathVariable Integer id) {
        return  policeStationService.findById(id).get();

    }
    @GetMapping("{id}")
    public void deleteById(@PathVariable Integer id) {
         policeStationService.deleteById(id);
    }
    public void update(@RequestBody PoliceStation police) {
        policeStationService.saveOrUpdate(police);
    }




}
