package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FeatureLaptop {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "featureProduct_id")
   private Integer featureComputerId;
   private String name;
   @OneToMany(mappedBy = "featureLaptop")
   @JsonBackReference
   private Set<FeatureProductProduct> productList;
}
