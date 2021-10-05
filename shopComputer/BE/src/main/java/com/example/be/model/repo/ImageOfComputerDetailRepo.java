package com.example.be.model.repo;

import com.example.be.model.entity.ImageDetailOfComputer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageOfComputerDetailRepo extends JpaRepository<ImageDetailOfComputer,Long> {
}
