package com.gsparvej.production.repo;

import com.gsparvej.production.entity.Cutting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICuttingRepo extends JpaRepository<Cutting,Long> {
    List<Cutting> findByOrderId(Long orderId);
}
