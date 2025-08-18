package com.gsparvej.production.service;

import com.gsparvej.production.entity.Order;
import com.gsparvej.production.repo.IOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private IOrderRepo orderRepo;


    public Order saveOrder(Order order) {
        return orderRepo.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
    }

    public List<Order> getOrdersByBuyer(String buyerName) {
        return orderRepo.findByBuyerName(buyerName);
    }

    public List<Order> getOrdersByStatus(String status) {
        return orderRepo.findByStatus(status);
    }

    public void deleteOrder(Long id) {
        orderRepo.deleteById(id);
    }
}
