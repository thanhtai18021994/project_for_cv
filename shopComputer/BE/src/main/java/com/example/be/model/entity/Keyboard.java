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
public class Keyboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keyboard_id")
    private Long keyboardId;
    private String keyboardName;
    private Double keyboardImportPrice;
    private Double keyboardSalePrice;
    private Double discount;
    @Column(name = "enable")
    private boolean enable;
    private String mainImage;
    @OneToMany(mappedBy = "keyboard")
    private Set<ImageDetailKeyboard> imageDetailKeyboards;
}
