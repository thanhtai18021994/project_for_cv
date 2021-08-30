package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Table
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_category")
    private Integer idCategory;
    private String nameCategory;
    private String image;
    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private List<Computer> computerList;
    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private List<Monitor> monitorList;

}
