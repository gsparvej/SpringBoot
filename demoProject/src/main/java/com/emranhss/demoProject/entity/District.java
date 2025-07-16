package com.emranhss.demoProject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name= "districts")
public class District {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100, nullable = false)
    private String name;

    @OneToMany(mappedBy = "district" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Integer> policeStations;

    public District() {
    }

    public District(int id, List<Integer> policeStations, String name) {
        this.id = id;
        this.policeStations = policeStations;
        this.name = name;
    }

    public District(List<PoliceStation> policeStation) {
        this.policeStations = policeStations;
    }

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

    public List<Integer> getPoliceStations() {
        return policeStations;
    }

    public void setPoliceStations(List<Integer> policeStations) {
        this.policeStations = policeStations;
    }
}
