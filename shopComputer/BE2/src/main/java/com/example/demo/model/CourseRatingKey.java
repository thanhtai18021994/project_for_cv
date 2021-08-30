package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CourseRatingKey implements Serializable {
    @Column(name = "computer_id")
    Integer productId;
    @Column(name = "featureProduct_id")
    Integer featureComputerId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CourseRatingKey that = (CourseRatingKey) o;
        return Objects.equals(productId, that.productId) && Objects.equals(featureComputerId, that.featureComputerId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(productId, featureComputerId);
    }
}
