package com.emranhss.home.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.List;

@Entity
@Table(name = "districts")
public class District {

    private int id;
    private String name;

}
