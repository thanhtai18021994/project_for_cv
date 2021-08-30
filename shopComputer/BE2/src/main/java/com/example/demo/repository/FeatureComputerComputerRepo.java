package com.example.demo.repository;

import com.example.demo.model.CourseRatingKey;
import com.example.demo.model.FeatureProductProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface FeatureComputerComputerRepo extends JpaRepository<FeatureProductProduct, CourseRatingKey> {
    @Transactional
    @Modifying(clearAutomatically = true)
    @Query(value = "CALL insertFeatureProductProduct(:idFeature,:idProduct)",nativeQuery = true)
    void insertKeyComposite(@Param("idFeature") Integer idFeature,@Param("idProduct") Integer idProduct);
}
