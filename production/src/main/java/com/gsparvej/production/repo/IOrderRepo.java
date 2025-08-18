package com.gsparvej.production.repo;

import com.gsparvej.production.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IOrderRepo extends JpaRepository<Order,Long> {
    List<Order> findByBuyerName(String buyerName);
    List<Order> findByStatus(String status);
    List<Order> findByPoNumber(String poNumber);
}
