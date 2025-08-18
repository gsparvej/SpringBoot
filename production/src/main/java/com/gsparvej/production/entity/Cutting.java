package com.gsparvej.production.entity;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "cutting")
public class Cutting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    private LocalDate cuttingDate;

    private Integer totalPieces;
    private Integer fabricUsedInMeters;

    private String status;

    public Cutting() {
    }

    public Cutting(Long id, Order order, LocalDate cuttingDate, Integer totalPieces, Integer fabricUsedInMeters, String status) {
        this.id = id;
        this.order = order;
        this.cuttingDate = cuttingDate;
        this.totalPieces = totalPieces;
        this.fabricUsedInMeters = fabricUsedInMeters;
        this.status = status;
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

    public LocalDate getCuttingDate() {
        return cuttingDate;
    }

    public void setCuttingDate(LocalDate cuttingDate) {
        this.cuttingDate = cuttingDate;
    }

    public Integer getTotalPieces() {
        return totalPieces;
    }

    public void setTotalPieces(Integer totalPieces) {
        this.totalPieces = totalPieces;
    }

    public Integer getFabricUsedInMeters() {
        return fabricUsedInMeters;
    }

    public void setFabricUsedInMeters(Integer fabricUsedInMeters) {
        this.fabricUsedInMeters = fabricUsedInMeters;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
