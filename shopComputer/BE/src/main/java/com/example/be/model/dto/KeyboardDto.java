package com.example.be.model.dto;


import com.example.be.model.entity.ImageDetailKeyboard;
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
public class KeyboardDto {
    private Long keyboardId;
    private String keyboardName;
    private Double keyboardImportPrice;
    private Double keyboardSalePrice;
    private Double discount;
    private boolean enable;
    private String mainImage;
    private Set<ImageDetailKeyboard> imageDetailKeyboards;
}
