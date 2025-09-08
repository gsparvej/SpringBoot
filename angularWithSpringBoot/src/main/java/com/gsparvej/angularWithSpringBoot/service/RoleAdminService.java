package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.entity.RoleAdmin;
import com.gsparvej.angularWithSpringBoot.entity.RoleSuperAdmin;
import com.gsparvej.angularWithSpringBoot.repository.IRoleAdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleAdminService {

    @Autowired
    private IRoleAdminRepo roleAdminRepo;

    public List<RoleAdmin> getAll() {
        return roleAdminRepo.findAll();
    }



    public RoleAdmin save(RoleAdmin roleAdmin) {
        return roleAdminRepo.save(roleAdmin);
    }

    public void delete(Long id) {
        roleAdminRepo.deleteById(id);
    }

    public RoleAdmin getProfileByUserId(int userId) {
        return roleAdminRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Role Admin not found"));
    }
}
