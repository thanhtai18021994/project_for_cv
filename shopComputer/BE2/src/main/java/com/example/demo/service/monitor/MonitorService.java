package com.example.demo.service.monitor;

import com.example.demo.model.Monitor;
import com.example.demo.repository.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MonitorService implements IMonitorService{
    @Autowired
    MonitorRepository monitorRepository;
    @Override
    public Page<Monitor> findAll(Pageable pageable) {
        return monitorRepository.findAll(pageable);
    }

    @Override
    public List<Monitor> findAll() {
        return monitorRepository.findAll();
    }

    @Override
    public Monitor save(Monitor monitor) {
       return monitorRepository.save(monitor);
    }

    @Override
    public void delete(Monitor monitor) {
        monitorRepository.delete(monitor);
    }

    @Override
    public Optional<Monitor> findById(Integer id) {
        return monitorRepository.findById(id);
    }
}
