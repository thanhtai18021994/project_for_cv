package com.example.be.model.repo;

import com.example.be.model.entity.ProductInOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductInOrderRepo extends JpaRepository<ProductInOrder,Long> {
}
