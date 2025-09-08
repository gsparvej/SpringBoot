package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.entity.RoleAdmin;
import com.gsparvej.angularWithSpringBoot.entity.RoleHRAdmin;
import com.gsparvej.angularWithSpringBoot.repository.IRoleHRAdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleHRAdminService {

    @Autowired
    private IRoleHRAdminRepo roleHRAdminRepo;


    public List<RoleHRAdmin> getAll() {
        return roleHRAdminRepo.findAll();
    }



    public RoleHRAdmin save(RoleHRAdmin roleHRAdmin) {
        return roleHRAdminRepo.save(roleHRAdmin);
    }

    public void delete(Long id) {
        roleHRAdminRepo.deleteById(id);
    }

    public RoleHRAdmin getProfileByUserId(int userId) {
        return roleHRAdminRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Role HR Admin not found"));
    }
}
