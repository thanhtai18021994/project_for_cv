package com.c0220g1.furama.service.education;

import com.c0220g1.furama.model.entity.EducationDegree;
import com.c0220g1.furama.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EducationService implements IEducationService{
    @Autowired
    EducationRepository educationRepository;


    @Override
    public List<EducationDegree> findAll() {
        return educationRepository.findAll();
    }

    @Override
    public Page<EducationDegree> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public EducationDegree save(EducationDegree educationDegree) {
        return null;
    }

    @Override
    public void delete(EducationDegree educationDegree) {

    }

    @Override
    public Optional<EducationDegree> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<EducationDegree> searchName(String name) {
        return null;
    }
}
