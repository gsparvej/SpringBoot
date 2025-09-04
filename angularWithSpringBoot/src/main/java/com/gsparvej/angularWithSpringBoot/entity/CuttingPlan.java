package com.gsparvej.angularWithSpringBoot.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "cuttingPlaning")
public class CuttingPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String markerNo;
    private float fabricWidth;
    private int layCount;
    private float plannedPcs;
    private float fabricUsed;
    private String status;
    private Date cuttingDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uom_id")
    private UOM uom;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productionOrder_id")
    private ProductionOrder productionOrder;

    public CuttingPlan() {
    }

    public CuttingPlan(int id, String markerNo, float fabricWidth, int layCount, float plannedPcs, float fabricUsed, String status, Date cuttingDate, UOM uom, ProductionOrder productionOrder) {
        this.id = id;
        this.markerNo = markerNo;
        this.fabricWidth = fabricWidth;
        this.layCount = layCount;
        this.plannedPcs = plannedPcs;
        this.fabricUsed = fabricUsed;
        this.status = status;
        this.cuttingDate = cuttingDate;
        this.uom = uom;
        this.productionOrder = productionOrder;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMarkerNo() {
        return markerNo;
    }

    public void setMarkerNo(String markerNo) {
        this.markerNo = markerNo;
    }

    public float getFabricWidth() {
        return fabricWidth;
    }

    public void setFabricWidth(float fabricWidth) {
        this.fabricWidth = fabricWidth;
    }

    public int getLayCount() {
        return layCount;
    }

    public void setLayCount(int layCount) {
        this.layCount = layCount;
    }

    public float getPlannedPcs() {
        return plannedPcs;
    }

    public void setPlannedPcs(float plannedPcs) {
        this.plannedPcs = plannedPcs;
    }

    public float getFabricUsed() {
        return fabricUsed;
    }

    public void setFabricUsed(float fabricUsed) {
        this.fabricUsed = fabricUsed;
    }

    public ProductionOrder getProductionOrder() {
        return productionOrder;
    }

    public void setProductionOrder(ProductionOrder productionOrder) {
        this.productionOrder = productionOrder;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public UOM getUom() {
        return uom;
    }

    public void setUom(UOM uom) {
        this.uom = uom;
    }

    public Date getCuttingDate() {
        return cuttingDate;
    }

    public void setCuttingDate(Date cuttingDate) {
        this.cuttingDate = cuttingDate;
    }
}
