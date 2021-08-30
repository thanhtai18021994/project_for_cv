package com.example.demo.dto;

import com.example.demo.model.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Table;

@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MonitorDto {
    private Integer idMonitor;
    private String nameMonitor;
    private Float priceMonitor;
    private Float newPriceMonitor;
    private Float discount;
    private Integer warehouse;
    private Integer sold;
    private String imageProduct;
    private Category category;
}
