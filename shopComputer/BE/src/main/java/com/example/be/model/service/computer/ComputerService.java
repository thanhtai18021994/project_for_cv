package com.example.be.model.service.computer;

import com.example.be.model.entity.Computer;
import com.example.be.model.repo.ComputerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ComputerService implements IComputerService {
    private final ComputerRepo computerRepo;
    @Override
    public Page<Computer> getAll(Pageable pageable) {
        return computerRepo.findAll(pageable);
    }

    @Override
    public List<Computer> findAll() {
        return computerRepo.findAll();
    }

    @Override
    public Optional<Computer> findById(Long id) {
        return computerRepo.findById(id);
    }

    @Override
    public Computer save(Computer computer) {
        return computerRepo.save(computer);
    }

    @Override
    public void delete(Computer computer) {
        computerRepo.delete(computer);
    }
}
