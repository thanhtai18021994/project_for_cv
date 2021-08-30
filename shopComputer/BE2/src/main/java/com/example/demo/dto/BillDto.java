package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BillDto {
    private Integer idOrder;
    private String nameCustomer;
    @Column(columnDefinition = "date")
    private String deliveryTime;
    private String shippingAddress;
    private Double totalMoney;
    private String deliveryForm;
}
