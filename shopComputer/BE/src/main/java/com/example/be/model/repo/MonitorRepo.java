package com.example.be.model.repo;

import com.example.be.model.entity.Monitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonitorRepo extends JpaRepository<Monitor,Long> {
}
