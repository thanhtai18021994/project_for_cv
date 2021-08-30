package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Computer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "computer_id")
    private  Integer productId;
    private String nameProduct;
    private Double importPrice;
    private Double discount;
    private Double listedPrice;
    private Double newPriceProduct;
    private Integer warehouse;
    private Integer sold;
    private String imageProduct;
    private String cpu;
    private String ram;
    private String hardDrive;
    private String graphicCard;
    private String screen;
    private String operatingSystem;
    @ManyToOne
    @JoinColumn(name = "id_category")
    @JsonManagedReference
    private Category category;

    @ManyToOne
    @JoinColumn(name = "id_type_computer")
    @JsonManagedReference
    private TypeComputer typeComputer;

    @OneToMany(mappedBy="computer")
    @JsonManagedReference
    private Set<FeatureProductProduct> FeatureProductProducts;
    public void sell(Integer number){
        sold=sold+number;
    }
    public void setNewPrice(){
        this.newPriceProduct=listedPrice*(100-discount)/100;
    }
}
