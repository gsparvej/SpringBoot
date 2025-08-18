package com.gsparvej.production.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "fabric_receive")
public class FabricReceive {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    private LocalDate receiveDate;
    private int quantityInMeters;
    private String challanNo;
    private String supplierName;

    public FabricReceive() {
    }

    public FabricReceive(Long id, Order order, LocalDate receiveDate, Integer quantityInMeters, String challanNo, String supplierName) {
        this.id = id;
        this.order = order;
        this.receiveDate = receiveDate;
        this.quantityInMeters = quantityInMeters;
        this.challanNo = challanNo;
        this.supplierName = supplierName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public LocalDate getReceiveDate() {
        return receiveDate;
    }

    public void setReceiveDate(LocalDate receiveDate) {
        this.receiveDate = receiveDate;
    }

    public Integer getQuantityInMeters() {
        return quantityInMeters;
    }

    public void setQuantityInMeters(Integer quantityInMeters) {
        this.quantityInMeters = quantityInMeters;
    }

    public String getChallanNo() {
        return challanNo;
    }

    public void setChallanNo(String challanNo) {
        this.challanNo = challanNo;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }
}
