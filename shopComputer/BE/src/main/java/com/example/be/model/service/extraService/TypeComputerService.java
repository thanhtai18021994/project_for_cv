package com.example.be.model.service.extraService;

import com.example.be.model.entity.TypeComputer;
import com.example.be.model.repo.TypeComputerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TypeComputerService implements ITypeComputerService{
    private final TypeComputerRepo typeComputerRepo;
    @Override
    public List<TypeComputer> findAll() {
        return null;
    }
}
