package com.example.be.model.service.computer;

import com.example.be.model.entity.Computer;
import com.example.be.model.service.GeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IComputerService extends GeneralService<Computer> {
    Page<Computer> findByName(String name, Pageable pageable);
    Page<Computer> findByManufacture(Long manufactureId,Pageable pageable);
    Page<Computer> findByTypeComputer(Long typeComputerId,Pageable pageable);
    void increaseStock(Long productId, int amount);

    void decreaseStock(Long productId, int amount);
}
