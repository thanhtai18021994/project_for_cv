package com.c0220g1.furama.service.division;

import com.c0220g1.furama.model.entity.Division;
import com.c0220g1.furama.repository.DivisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DivisionService implements IDivisionService{
    @Autowired
    DivisionRepository divisionRepository;
    @Override
    public List<Division> findAll() {
        return divisionRepository.findAll();
    }

    @Override
    public Page<Division> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Division save(Division division) {
        return null;
    }

    @Override
    public void delete(Division division) {

    }

    @Override
    public Optional<Division> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<Division> searchName(String name) {
        return null;
    }
}
