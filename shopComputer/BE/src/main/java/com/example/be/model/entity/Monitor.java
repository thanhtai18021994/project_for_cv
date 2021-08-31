package com.example.be.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Monitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "monitor_id")
    private Long monitorId;
    private String monitorName;
    @Column(name = "monitor_import_price")
    private Double monitorImportPrice;
    @Column(name = "monitor_sale_price")
    private Double monitorSalePrice;
    @Column(name = "monitor_discount")
    private Double monitorDiscount;
    @ManyToOne()
    @JoinColumn(name = "manufacture_id")
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
    @Column(name = "enable")
    private boolean enable;
    private String mainImage;
    @OneToMany(mappedBy = "monitor")
    private Set<ImageDetailMonitor> imageDetailOfMonitor;
}
