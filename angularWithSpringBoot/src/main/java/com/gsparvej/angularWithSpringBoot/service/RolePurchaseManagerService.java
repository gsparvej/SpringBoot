package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.entity.RoleMerchandiserManager;
import com.gsparvej.angularWithSpringBoot.entity.RolePurchaseManager;
import com.gsparvej.angularWithSpringBoot.repository.IRolePurchaseManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RolePurchaseManagerService {

    @Autowired
    private IRolePurchaseManagerRepo rolePurchaseManagerRepo;


    public List<RolePurchaseManager> getAll() {
        return rolePurchaseManagerRepo.findAll();
    }



    public RolePurchaseManager save(RolePurchaseManager rolePurchaseManager) {
        return rolePurchaseManagerRepo.save(rolePurchaseManager);
    }

    public void delete(Long id) {
        rolePurchaseManagerRepo.deleteById(id);
    }

    public RolePurchaseManager getProfileByUserId(int userId) {
        return rolePurchaseManagerRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Role Purchase Manager not found"));
    }
}
