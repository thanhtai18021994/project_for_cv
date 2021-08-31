package com.example.be.model.service;

import com.example.be.model.entity.Computer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface GeneralService<T> {
    Page<T> getAll(Pageable pageable);
    List<T> findAll();
    Optional<T> findById(Long id);
    T save(T t);
    void delete(T t);
}
