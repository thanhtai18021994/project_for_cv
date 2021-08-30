package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FeatureProductProduct {

    @EmbeddedId
    CourseRatingKey idComposite;
    @ManyToOne
    @MapsId("productId")
    @JoinColumn(name = "computer_id")
    @JsonBackReference
    private Computer computer;

    @ManyToOne
    @MapsId("featureComputerId")
    @JoinColumn(name = "featureProduct_id", nullable = false)
    private FeatureLaptop featureLaptop;
}
