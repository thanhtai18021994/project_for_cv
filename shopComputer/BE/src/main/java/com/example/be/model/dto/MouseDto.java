package com.example.be.model.dto;

import com.example.be.model.entity.ImageDetailMouse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MouseDto {
    private Long mouseId;
    private String mouseName;
    private Double mouseImportPrice;
    private Double mouseSalePrice;
    private Double discount;
    private boolean enable;
    private String mainImage;
    private Set<ImageDetailMouse> imageDetailMouse;
    private String resolution;
    private String SupportedOperatingSystems;
    private String FrequencyResponse;
}
