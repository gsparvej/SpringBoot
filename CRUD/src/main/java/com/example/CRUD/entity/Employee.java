package com.example.CRUD.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String roll;
    private float mark;
    private String subject;

    public Employee() {
    }

    public Employee(Long id, String name, String roll, float mark, String subject) {
        this.id = id;
        this.name = name;
        this.roll = roll;
        this.mark = mark;
        this.subject = subject;
    }

//    public Employee(String name, float salary, String designation) {}


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

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    public float getMark() {
        return mark;
    }

    public void setMark(float mark) {
        this.mark = mark;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}
