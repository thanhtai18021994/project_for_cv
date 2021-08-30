package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Monitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMonitor;
    private String nameMonitor;
    private Float priceMonitor;
    private Float newPriceMonitor;
    private Float discount;
    private Integer warehouse;
    private Integer sold;
    private String imageMonitor;
    @ManyToOne
    @JoinColumn(name = "id_category")
    @JsonManagedReference
    private Category category;
}
