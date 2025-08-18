package com.gsparvej.production.restcontroller;

import com.gsparvej.production.entity.FabricReceive;
import com.gsparvej.production.service.FabricReceiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fabric-receive")
@CrossOrigin("*")
public class FabricReceiveRestController {

    @Autowired
    private FabricReceiveService fabricReceiveService;

    @PostMapping("")
    public ResponseEntity<FabricReceive> createFabricReceive(@RequestBody FabricReceive fabricReceive) {
        return new ResponseEntity<>(fabricReceiveService.saveFabricReceive(fabricReceive), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<FabricReceive>> getAllFabricReceives() {
        return ResponseEntity.ok(fabricReceiveService.getAllFabricReceives());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FabricReceive> getFabricReceiveById(@PathVariable Long id) {
        return ResponseEntity.ok(fabricReceiveService.getFabricReceiveById(id));
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<FabricReceive>> getFabricReceivesByOrderId(@PathVariable Long orderId) {
        return ResponseEntity.ok(fabricReceiveService.getFabricReceivesByOrderId(orderId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFabricReceive(@PathVariable Long id) {
        fabricReceiveService.deleteFabricReceive(id);
        return ResponseEntity.noContent().build();
    }
}
