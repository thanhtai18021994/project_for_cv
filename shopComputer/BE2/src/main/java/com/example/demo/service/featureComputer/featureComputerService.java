package com.example.demo.service.featureComputer;

import com.example.demo.model.FeatureLaptop;
import com.example.demo.repository.FeatureComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class featureComputerService implements IFeatureComputerService {
    @Autowired
    FeatureComputerRepository featureComputerRepository;
    @Override
    public Page<FeatureLaptop> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<FeatureLaptop> findAll() {
        return featureComputerRepository.findAll();
    }

    @Override
    public FeatureLaptop save(FeatureLaptop featureLaptop) {
        return null;
    }

    @Override
    public void delete(FeatureLaptop featureLaptop) {

    }

    @Override
    public Optional<FeatureLaptop> findById(Integer id) {
        return Optional.empty();
    }
}
