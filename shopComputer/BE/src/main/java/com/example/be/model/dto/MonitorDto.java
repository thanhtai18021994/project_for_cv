package com.example.be.model.dto;

import com.example.be.model.entity.ImageDetailMonitor;
import com.example.be.model.entity.Manufacture;
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
public class MonitorDto {

    private Long monitorId;
    private String monitorName;
    private Double monitorImportPrice;
    private Double monitorSalePrice;
    private Double monitorDiscount;
    private Manufacture manufacture;
    private String screenSize;
    private String resolution;
    private String screenRatio;
    private String view;
    private String pixelDensity;
    private String backgroundPanels;
    private String pixelSize;
    private String responsiveness;
    private String refreshGFrequency;
    private boolean enable;
    private String mainImage;
    private Set<ImageDetailMonitor> imageDetailOfMonitor;
}
