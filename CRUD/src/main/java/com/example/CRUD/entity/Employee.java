package com.example.CRUD.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private float salary;
    private String designation;
    private String phone;

    public Employee() {
    }

    public Employee(Long id, String name, float salary, String designation, String phone) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.designation = designation;
        this.phone = phone;
    }

    public Employee(String name, float salary, String designation) {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getSalary() {
        return salary;
    }

    public void setSalary(float salary) {
        this.salary = salary;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
