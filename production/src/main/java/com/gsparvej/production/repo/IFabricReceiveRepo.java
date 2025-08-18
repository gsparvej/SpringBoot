package com.gsparvej.production.repo;

import com.gsparvej.production.entity.FabricReceive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFabricReceiveRepo extends JpaRepository<FabricReceive, Long> {
    List<FabricReceive> findByOrderId(Long orderId);
}
