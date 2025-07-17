package com.emranhss.home.dto;

import com.emranhss.home.entity.District;

public class PoliceStationResponseDTO {
    private int id;
    private String name;
    private District district;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
    }
}
