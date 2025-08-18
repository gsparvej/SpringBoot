package com.gsparvej.production.entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
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
    private Integer orderQuantity;
    private Date orderDate;
    private Date deliveryDate;



    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<FabricReceive> fabricReceives;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<Cutting> cuttings;


    public Order() {
    }

    public Order(Long id, String poNumber, String styleName, String buyerName, Integer orderQuantity, Date orderDate, Date deliveryDate, List<FabricReceive> fabricReceives, List<Cutting> cuttings) {
        this.id = id;
        this.poNumber = poNumber;
        this.styleName = styleName;
        this.buyerName = buyerName;
        this.orderQuantity = orderQuantity;
        this.orderDate = orderDate;
        this.deliveryDate = deliveryDate;
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

    public Integer getOrderQuantity() {
        return orderQuantity;
    }

    public void setOrderQuantity(Integer orderQuantity) {
        this.orderQuantity = orderQuantity;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Date getDeliveryDate() {
        return deliveryDate;
    }

    public void setDeliveryDate(Date deliveryDate) {
        this.deliveryDate = deliveryDate;
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
