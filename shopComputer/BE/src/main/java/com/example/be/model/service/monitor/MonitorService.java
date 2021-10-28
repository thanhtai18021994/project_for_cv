package com.example.be.model.service.monitor;

import com.example.be.model.entity.Computer;
import com.example.be.model.entity.Monitor;
import com.example.be.model.repo.MonitorRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MonitorService implements IMonitorService{
    private final MonitorRepo monitorRepo;
    @Override
    public Page<Monitor> getAll(Pageable pageable) {
        return monitorRepo.findAll(pageable);
    }

    @Override
    public List<Monitor> findAll() {
        return monitorRepo.findAll();
    }

    @Override
    public Optional<Monitor> findById(Long id) {
        return monitorRepo.findById(id);
    }

    @Override
    public Monitor save(Monitor monitor) {
        return monitorRepo.save(monitor);
    }

    @Override
    public void delete(Monitor monitor) {
        monitorRepo.delete(monitor);
    }

    @Override
    public Page<Monitor> findByName(String name, Pageable pageable) {
        return monitorRepo.findByName(name, pageable);
    }

    @Override
    public Page<Monitor> findByManufacture(Long id, Pageable pageable) {
        return monitorRepo.findByManufacture(id, pageable);
    }
}
