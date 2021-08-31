package com.example.be.model.repo;

import com.example.be.model.entity.Manufacture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufactureRepo extends JpaRepository<Manufacture,Long> {
}
