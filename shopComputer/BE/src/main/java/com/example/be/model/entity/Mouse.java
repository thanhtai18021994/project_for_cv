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
public class Mouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keyboard_id")
    private Long mouseId;
    private String mouseName;
    private Double mouseImportPrice;
    private Double mouseSalePrice;
    private Double discount;
    @Column(name = "enable")
    private boolean enable;
    private String mainImage;
    @OneToMany(mappedBy = "mouse")
    private Set<ImageDetailMouse> imageDetailMouse;
    private String resolution;
    private String SupportedOperatingSystems;
    private String FrequencyResponse;
}
