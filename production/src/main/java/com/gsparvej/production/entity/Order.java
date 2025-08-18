package com.gsparvej.production.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String poNumber;     // Purchase Order Number
    private String styleName;    // Style / Design Name
    private String buyerName;    // Buyer / Customer
    private String season;       // Optional - Season (Summer/Winter)
    private Integer orderQuantity;
    private LocalDate orderDate;
    private LocalDate shipmentDate;

    private String status;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<FabricReceive> fabricReceives;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<Cutting> cuttings;


    public Order() {
    }

    public Order(Long id, String poNumber, String styleName, String buyerName, String season, Integer orderQuantity, LocalDate orderDate, LocalDate shipmentDate, String status, List<FabricReceive> fabricReceives, List<Cutting> cuttings) {
        this.id = id;
        this.poNumber = poNumber;
        this.styleName = styleName;
        this.buyerName = buyerName;
        this.season = season;
        this.orderQuantity = orderQuantity;
        this.orderDate = orderDate;
        this.shipmentDate = shipmentDate;
        this.status = status;
        this.fabricReceives = fabricReceives;
        this.cuttings = cuttings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPoNumber() {
        return poNumber;
    }

    public void setPoNumber(String poNumber) {
        this.poNumber = poNumber;
    }

    public String getStyleName() {
        return styleName;
    }

    public void setStyleName(String styleName) {
        this.styleName = styleName;
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public String getSeason() {
        return season;
    }

    public void setSeason(String season) {
        this.season = season;
    }

    public Integer getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public LocalDate getShipmentDate() {
        return shipmentDate;
    }

    public void setShipmentDate(LocalDate shipmentDate) {
        this.shipmentDate = shipmentDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<FabricReceive> getFabricReceives() {
        return fabricReceives;
    }

    public void setFabricReceives(List<FabricReceive> fabricReceives) {
        this.fabricReceives = fabricReceives;
    }

    public List<Cutting> getCuttings() {
        return cuttings;
    }

    public void setCuttings(List<Cutting> cuttings) {
        this.cuttings = cuttings;
    }
}
