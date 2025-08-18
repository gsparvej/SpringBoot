package com.gsparvej.production.service;

import com.gsparvej.production.entity.Cutting;
import com.gsparvej.production.entity.FabricReceive;
import com.gsparvej.production.repo.ICuttingRepo;
import com.gsparvej.production.repo.IFabricReceiveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CuttingService {

    @Autowired
    private ICuttingRepo cuttingRepo;
    @Autowired
    private IFabricReceiveRepo fabricReceiveRepo;

    public Cutting saveCutting(Cutting cutting) {
        Long orderId = cutting.getOrder().getId();

        int totalReceived = fabricReceiveRepo.findByOrderId(orderId)
                .stream().mapToInt(FabricReceive::getQuantityInMeters).sum();

        int totalUsed = cuttingRepo.findByOrderId(orderId)
                .stream().mapToInt(Cutting::getFabricUsedInMeters).sum();

        int newCuttingUsage = cutting.getFabricUsedInMeters();

        if ((totalUsed + newCuttingUsage) > totalReceived) {
            throw new IllegalArgumentException("Used fabric exceeds received quantity!");
        }

        return cuttingRepo.save(cutting);
    }

    public List<Cutting> getAllCuttings() {
        return cuttingRepo.findAll();
    }

    public Cutting getCuttingById(Long id) {
        return cuttingRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Cutting not found with id: " + id));
    }

    public List<Cutting> getCuttingsByOrderId(Long orderId) {
        return cuttingRepo.findByOrderId(orderId);
    }

    public void deleteCutting(Long id) {
        cuttingRepo.deleteById(id);
    }

    public Map<String, Integer> getFabricUsageSummary(Long orderId) {
        int totalReceived = fabricReceiveRepo.findByOrderId(orderId)
                .stream().mapToInt(FabricReceive::getQuantityInMeters).sum();

        int totalUsed = cuttingRepo.findByOrderId(orderId)
                .stream().mapToInt(Cutting::getFabricUsedInMeters).sum();

        int remaining = totalReceived - totalUsed;

        Map<String, Integer> summary = new HashMap<>();
        summary.put("received", totalReceived);
        summary.put("used", totalUsed);
        summary.put("remaining", remaining);

        return summary;
    }

}
