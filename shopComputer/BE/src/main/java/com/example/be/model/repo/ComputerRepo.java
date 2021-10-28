package com.example.be.model.repo;

import com.example.be.model.entity.Computer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ComputerRepo extends JpaRepository<Computer,Long> {
    @Query(value = "select * from computer where computer_name like %?1%",nativeQuery = true)
    Page<Computer> findByName(String name, Pageable pageable);
    @Query("SELECT c from Computer c where c.manufacture.manufactureId =?1")
    Page<Computer> findByManufacture(Long manufactureId,Pageable pageable);
    @Query("select c from Computer c where c.typeComputer.typeComputerId=?1")
    Page<Computer> findByTypeComputer(Long typeComputerId,Pageable pageable);
}
