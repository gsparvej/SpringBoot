package com.gsparvej.production.restcontroller;

import com.gsparvej.production.entity.Cutting;
import com.gsparvej.production.service.CuttingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cutting")
@CrossOrigin("*")
public class CuttingRestController {

    @Autowired
    private CuttingService cuttingService;

    @PostMapping("")
    public ResponseEntity<Cutting> createCutting(@RequestBody Cutting cutting) {
        return new ResponseEntity<>(cuttingService.saveCutting(cutting), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<Cutting>> getAllCuttings() {
        return ResponseEntity.ok(cuttingService.getAllCuttings());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cutting> getCuttingById(@PathVariable Long id) {
        return ResponseEntity.ok(cuttingService.getCuttingById(id));
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<Cutting>> getCuttingsByOrderId(@PathVariable Long orderId) {
        return ResponseEntity.ok(cuttingService.getCuttingsByOrderId(orderId));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCutting(@PathVariable Long id) {
        cuttingService.deleteCutting(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/order/{orderId}/fabric-usage-summary")
    public ResponseEntity<Map<String, Integer>> getFabricUsageSummary(@PathVariable Long orderId) {
        return ResponseEntity.ok(cuttingService.getFabricUsageSummary(orderId));
    }
}
