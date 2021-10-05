package com.example.be.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class Manufacture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "manufacture_id")
    private Long manufactureId;
    private String manufactureName;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "manufacture")
    @JsonBackReference(value = "computer-manufacture")
    Set<Computer> computers;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "manufacture")
    @JsonBackReference
    Set<Monitor> monitors;
}
