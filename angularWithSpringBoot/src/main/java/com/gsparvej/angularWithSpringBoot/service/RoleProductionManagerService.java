package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.entity.RoleMerchandiserManager;
import com.gsparvej.angularWithSpringBoot.entity.RoleProductionManager;
import com.gsparvej.angularWithSpringBoot.repository.IRoleProductionManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleProductionManagerService {

    @Autowired
    private IRoleProductionManagerRepo roleProductionManagerRepo;

    public List<RoleProductionManager> getAll() {
        return roleProductionManagerRepo.findAll();
    }



    public RoleProductionManager save(RoleProductionManager roleProductionManager) {
        return roleProductionManagerRepo.save(roleProductionManager);
    }

    public void delete(Long id) {
        roleProductionManagerRepo.deleteById(id);
    }

    public RoleProductionManager getProfileByUserId(int userId) {
        return roleProductionManagerRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Role Production Manager not found"));
    }
}
