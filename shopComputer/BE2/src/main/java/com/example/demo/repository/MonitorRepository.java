package com.example.demo.repository;

import com.example.demo.model.Monitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonitorRepository extends JpaRepository<Monitor,Integer> {
}
