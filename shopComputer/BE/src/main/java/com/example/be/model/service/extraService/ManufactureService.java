package com.example.be.model.service.extraService;

import com.example.be.model.entity.Manufacture;
import com.example.be.model.repo.ManufactureRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ManufactureService implements IManufactureService{
    private final ManufactureRepo manufactureRepo;

    @Override
    public List<Manufacture> findAll() {
        return manufactureRepo.findAll();
    }
}
