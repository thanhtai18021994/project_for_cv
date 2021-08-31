package com.example.be.model.repo;

import com.example.be.model.entity.Computer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComputerRepo extends JpaRepository<Computer,Long> {
}
