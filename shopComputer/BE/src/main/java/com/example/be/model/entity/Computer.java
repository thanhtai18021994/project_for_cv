package com.example.be.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Computer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "computer_id")
    private Long computerId;
    @Column(name = "computer_name")
    private String computerName;
    @Column(name = "import_price")
    private Double computerImportPrice;
    @Column(name = "computer_sale_price")
    private Double computerSalePrice;
    @Column(name = "computer_discount")
    private Double computerDiscount;
    @ManyToOne()
    @JoinColumn(name = "manufacture_id")
    private Manufacture manufacture;
    @ManyToOne()
    @JoinColumn(name = "type_computer_id")
    private TypeComputer typeComputer;
    @ManyToOne()
    @JoinColumn(name = "pcs_id")
    private Pcs pcs;
    @Column(name = "cpu")
    private String cpu;
    @Column(name = "ram")
    private String ram;
    @Column(name = "hard_drive")
    private String hardDrive;
    @Column(name = "screen")
    private String screen;
    @Column(name = "graphic_card")
    private String graphicCard;
    @Column(name = "connector")
    private String connector;
    @Column(name = "especially")
    private String especially;
    @Column(name = "operating_system")
    private String operatingSystem;
    @Column(name = "design")
    private String design;
    @Column(name = "dimension_weight")
    private String dimensionsWeight;
    @Column(name = "release_time")
    private String releaseTime;
    @Column(name = "enable")
    private boolean enable;
    private String mainImage;
    @OneToMany(mappedBy = "computer")
    @JsonBackReference
    private Set<ImageDetailOfComputer> imageDetailOfComputers;
}
