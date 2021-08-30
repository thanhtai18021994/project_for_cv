package com.example.demo.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface GeneralService <T> {
    Page<T> findAll(Pageable pageable);
    List<T> findAll();
    T save(T t);
    void delete(T t);
    Optional<T> findById(Integer id);
}
