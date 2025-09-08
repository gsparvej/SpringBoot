package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.entity.RoleMerchandiserManager;
import com.gsparvej.angularWithSpringBoot.entity.RoleSuperAdmin;
import com.gsparvej.angularWithSpringBoot.repository.IRoleMerchandiserManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleMerchandiserManagerService {

    @Autowired
    private IRoleMerchandiserManagerRepo roleMerchandiserManagerRepo;

    public List<RoleMerchandiserManager> getAll() {
        return roleMerchandiserManagerRepo.findAll();
    }



    public RoleMerchandiserManager save(RoleMerchandiserManager roleMerchandiserManager) {
        return roleMerchandiserManagerRepo.save(roleMerchandiserManager);
    }

    public void delete(Long id) {
        roleMerchandiserManagerRepo.deleteById(id);
    }

    public RoleMerchandiserManager getProfileByUserId(int userId) {
        return roleMerchandiserManagerRepo.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Role Merchandiser Manager not found"));
    }
}
