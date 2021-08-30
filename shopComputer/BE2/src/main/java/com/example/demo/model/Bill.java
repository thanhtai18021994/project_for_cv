package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idOrder;
    private String nameCustomer;
    @Column(columnDefinition = "date")
    private String deliveryTime;
    private String shippingAddress;
    private Double totalMoney;
    private String deliveryForm;
}
