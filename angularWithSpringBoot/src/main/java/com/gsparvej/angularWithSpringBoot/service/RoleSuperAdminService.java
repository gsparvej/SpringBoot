package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.entity.RoleSuperAdmin;
import com.gsparvej.angularWithSpringBoot.repository.IRoleSuperAdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleSuperAdminService {

    @Autowired
    private IRoleSuperAdminRepo roleSuperAdminRepo;

    public List<RoleSuperAdmin> getAll() {
        return roleSuperAdminRepo.findAll();
    }



    public RoleSuperAdmin save(RoleSuperAdmin roleSuperAdmin) {
        return roleSuperAdminRepo.save(roleSuperAdmin);
    }

    public void delete(Long id) {
        roleSuperAdminRepo.deleteById(id);
    }

    public RoleSuperAdmin getProfileByUserId(int userId) {
        return roleSuperAdminRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Role Super Admin not found"));
    }

}
