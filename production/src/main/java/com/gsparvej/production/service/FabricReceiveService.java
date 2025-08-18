package com.gsparvej.production.service;

import com.gsparvej.production.entity.FabricReceive;
import com.gsparvej.production.repo.IFabricReceiveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FabricReceiveService {

    @Autowired
    private IFabricReceiveRepo fabricReceiveRepo;

    public FabricReceive saveFabricReceive(FabricReceive fabricReceive) {
        return fabricReceiveRepo.save(fabricReceive);
    }

    public List<FabricReceive> getAllFabricReceives() {
        return fabricReceiveRepo.findAll();
    }

    public FabricReceive getFabricReceiveById(Long id) {
        return fabricReceiveRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Fabric Receive not found with id: " + id));
    }

    public List<FabricReceive> getFabricReceivesByOrderId(Long orderId) {
        return fabricReceiveRepo.findByOrderId(orderId);
    }

    public void deleteFabricReceive(Long id) {
        fabricReceiveRepo.deleteById(id);
    }
}
