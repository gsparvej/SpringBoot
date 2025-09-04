package com.gsparvej.angularWithSpringBoot.dto;

public class CutBundleDTO {

    private int id;

    private String bundleNo;
    private String size;
    private String color;
    private int plannedQty;

    private CuttingPlanResponseDTO cuttingPlan;

    public CutBundleDTO() {
    }

    public CutBundleDTO(int id, String bundleNo, String size, String color, int plannedQty, CuttingPlanResponseDTO cuttingPlan) {
        this.id = id;
        this.bundleNo = bundleNo;
        this.size = size;
        this.color = color;
        this.plannedQty = plannedQty;
        this.cuttingPlan = cuttingPlan;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBundleNo() {
        return bundleNo;
    }

    public void setBundleNo(String bundleNo) {
        this.bundleNo = bundleNo;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getPlannedQty() {
        return plannedQty;
    }

    public void setPlannedQty(int plannedQty) {
        this.plannedQty = plannedQty;
    }

    public CuttingPlanResponseDTO getCuttingPlan() {
        return cuttingPlan;
    }

    public void setCuttingPlan(CuttingPlanResponseDTO cuttingPlan) {
        this.cuttingPlan = cuttingPlan;
    }
}
