package com.gsparvej.angularWithSpringBoot.dto;

public class ReportDTO {

    private int shortSTotal;
    private int shortMTotal;
    private int shortLTotal;
    private int shortXLTotal;

    private int fullSTotal;
    private int fullMTotal;
    private int fullLTotal;
    private int fullXLTotal;

    public ReportDTO() {
    }

    public ReportDTO(int shortSTotal, int shortMTotal, int shortLTotal, int shortXLTotal, int fullSTotal, int fullMTotal, int fullLTotal, int fullXLTotal) {
        this.shortSTotal = shortSTotal;
        this.shortMTotal = shortMTotal;
        this.shortLTotal = shortLTotal;
        this.shortXLTotal = shortXLTotal;
        this.fullSTotal = fullSTotal;
        this.fullMTotal = fullMTotal;
        this.fullLTotal = fullLTotal;
        this.fullXLTotal = fullXLTotal;
    }

    public int getShortSTotal() {
        return shortSTotal;
    }

    public void setShortSTotal(int shortSTotal) {
        this.shortSTotal = shortSTotal;
    }

    public int getShortMTotal() {
        return shortMTotal;
    }

    public void setShortMTotal(int shortMTotal) {
        this.shortMTotal = shortMTotal;
    }

    public int getShortLTotal() {
        return shortLTotal;
    }

    public void setShortLTotal(int shortLTotal) {
        this.shortLTotal = shortLTotal;
    }

    public int getShortXLTotal() {
        return shortXLTotal;
    }

    public void setShortXLTotal(int shortXLTotal) {
        this.shortXLTotal = shortXLTotal;
    }

    public int getFullSTotal() {
        return fullSTotal;
    }

    public void setFullSTotal(int fullSTotal) {
        this.fullSTotal = fullSTotal;
    }

    public int getFullMTotal() {
        return fullMTotal;
    }

    public void setFullMTotal(int fullMTotal) {
        this.fullMTotal = fullMTotal;
    }

    public int getFullLTotal() {
        return fullLTotal;
    }

    public void setFullLTotal(int fullLTotal) {
        this.fullLTotal = fullLTotal;
    }

    public int getFullXLTotal() {
        return fullXLTotal;
    }

    public void setFullXLTotal(int fullXLTotal) {
        this.fullXLTotal = fullXLTotal;
    }
}
