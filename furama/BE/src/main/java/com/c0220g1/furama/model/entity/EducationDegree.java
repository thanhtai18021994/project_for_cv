package com.c0220g1.furama.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EducationDegree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="education_id")
    private Integer educationId;
    private String educationName;
    @OneToMany(mappedBy = "educationDegree")
    @JsonBackReference
    List<Employee> employees;
}
