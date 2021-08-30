package com.example.demo.repository;

import com.example.demo.model.FeatureLaptop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeatureComputerRepository extends JpaRepository<FeatureLaptop, Integer> {
}
