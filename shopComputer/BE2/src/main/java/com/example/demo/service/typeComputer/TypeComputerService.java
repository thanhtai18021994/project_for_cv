package com.example.demo.service.typeComputer;

import com.example.demo.model.TypeComputer;
import com.example.demo.repository.TypeComputerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeComputerService implements ITypeComputerService {
    @Autowired
    TypeComputerRepo typeComputerRepo;
    @Override
    public Page<TypeComputer> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<TypeComputer> findAll() {
        return typeComputerRepo.findAll();
    }

    @Override
    public TypeComputer save(TypeComputer typeComputer) {
        return null;
    }

    @Override
    public void delete(TypeComputer typeComputer) {

    }

    @Override
    public Optional<TypeComputer> findById(Integer id) {
        return typeComputerRepo.findById(id);
    }
}
