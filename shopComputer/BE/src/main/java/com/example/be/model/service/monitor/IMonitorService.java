package com.example.be.model.service.monitor;

import com.example.be.model.entity.Monitor;
import com.example.be.model.service.GeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IMonitorService extends GeneralService<Monitor> {
    Page<Monitor> findByName(String name, Pageable pageable);
    Page<Monitor> findByManufacture(Long id,Pageable pageable);
}
