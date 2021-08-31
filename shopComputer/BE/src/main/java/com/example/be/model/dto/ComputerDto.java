package com.example.be.model.dto;

import com.example.be.model.entity.ImageDetailOfComputer;
import com.example.be.model.entity.Manufacture;
import com.example.be.model.entity.Pcs;
import com.example.be.model.entity.TypeComputer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ComputerDto {

    private Long computerId;
    private String computerName;
    private Double computerImportPrice;
    private Double computerSalePrice;
    private Double computerDiscount;
    private Manufacture manufacture;
    private TypeComputer typeComputer;
    private Pcs pcs;
    private String cpu;
    private String ram;
    private String hardDrive;
    private String screen;
    private String graphicCard;
    private String connector;
    private String especially;
    private String operatingSystem;
    private String design;
    private String dimensionsWeight;
    private String releaseTime;
    private boolean enable;
    private String mainImage;
    private Set<ImageDetailOfComputer> imageDetailOfComputers;
}
