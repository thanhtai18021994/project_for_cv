package com.example.be.model.repo;

import com.example.be.model.entity.Mouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MouseRepo extends JpaRepository<Mouse,Long> {
}
