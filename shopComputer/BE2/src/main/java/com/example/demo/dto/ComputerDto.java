package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ComputerDto {
    private  Integer productId;
    @NotBlank
    private String nameProduct;
    @Min(0)
    private Double importPrice;
    @Min(0)
    private Double discount;
    @Min(0)
    private Double listedPrice;
    private Double newPriceProduct;
    @Min(0)
    private Integer warehouse;
    private Integer sold;
    @NotNull
    private String imageProduct;
    @NotBlank(message = "ko duoc de trong")
    private String cpu;
    @NotBlank
    private String ram;
    @NotBlank
    private String hardDrive;
    @NotBlank
    private String graphicCard;
    @NotBlank
    private String screen;
    @NotBlank
    private String operatingSystem;
    @NotNull
    private Integer typeComputerId;
    @NotNull
    private Integer[] featureComputers;
    private Integer categoryId;
}
