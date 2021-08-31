package com.example.be.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ImageDetailKeyboard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_detail_id")
    private Long imageDetailId;
    @Column(name = "url")
    private String url;
    @ManyToOne()
    @JsonBackReference
    private Keyboard keyboard;
}
