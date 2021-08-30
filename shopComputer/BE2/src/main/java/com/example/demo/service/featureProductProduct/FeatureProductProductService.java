package com.example.demo.service.featureProductProduct;

import com.example.demo.repository.FeatureComputerComputerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeatureProductProductService implements IFeatureProductProduct {
    @Autowired
    FeatureComputerComputerRepo featureComputerComputerRepo;
    @Override
    public Page<com.example.demo.model.FeatureProductProduct> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<com.example.demo.model.FeatureProductProduct> findAll() {
        return featureComputerComputerRepo.findAll();
    }

    @Override
    public com.example.demo.model.FeatureProductProduct save(com.example.demo.model.FeatureProductProduct featureProductProduct) {
        return null;
    }

    @Override
    public void delete(com.example.demo.model.FeatureProductProduct featureProductProduct) {

    }

    @Override
    public Optional<com.example.demo.model.FeatureProductProduct> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public void insertKeyComposite(Integer param1, Integer param2) {
        featureComputerComputerRepo.insertKeyComposite(param1,param2);
    }
}
