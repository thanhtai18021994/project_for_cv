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
public class TypeComputer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "type_computer_id")
    private Long typeComputerId;
    @Column(name = "type_computer_name")
    private String typeComputerName;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "typeComputer")
    @JsonBackReference(value = "computer-typeComputer")
    Set<Computer> computers;
}
