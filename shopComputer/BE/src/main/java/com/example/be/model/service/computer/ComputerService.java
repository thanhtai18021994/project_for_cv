package com.example.be.model.service.computer;

import com.example.be.enums.ResultEnum;
import com.example.be.exception.MyException;
import com.example.be.model.entity.Computer;
import com.example.be.model.repo.ComputerRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
    @Transactional
    public Computer save(Computer computer) {
        return computerRepo.save(computer);
    }

    @Override
    @Transactional
    public void delete(Computer computer) {
        computerRepo.delete(computer);
    }

    @Override
    public Page<Computer> findByName(String name, Pageable pageable) {
        return computerRepo.findByName(name, pageable);
    }

    @Override
    public Page<Computer> findByManufacture(Long manufactureId, Pageable pageable) {
        return computerRepo.findByManufacture(manufactureId, pageable);
    }

    @Override
    public Page<Computer> findByTypeComputer(Long typeComputerId, Pageable pageable) {
        return computerRepo.findByTypeComputer(typeComputerId, pageable);
    }

    @Override
    @Transactional
    public void increaseStock(Long productId, int amount) {
        Computer computer = findById(productId).orElse(null);
        if (computer == null) throw new MyException(ResultEnum.PRODUCT_NOT_EXIST);

        int update = computer.getStock() + amount;
        computer.setStock(update);
        computerRepo.save(computer);
    }

    @Override
    @Transactional
    public void decreaseStock(Long productId, int amount) {
        Computer computer = computerRepo.findById(productId).orElse(null);
        if (computer == null) throw new MyException(ResultEnum.PRODUCT_NOT_EXIST);

        int update = computer.getStock() - amount;
        if(update <= 0) throw new MyException(ResultEnum.PRODUCT_NOT_ENOUGH );
        computer.setStock(update);
        computerRepo.save(computer);
    }
}
