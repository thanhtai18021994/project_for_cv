package com.example.be.model.repo;

import com.example.be.model.entity.Monitor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MonitorRepo extends JpaRepository<Monitor,Long> {
    @Query("select m from Monitor m where m.monitorName like %?1%")
    Page<Monitor> findByName(String name, Pageable pageable);
    @Query("select m from Monitor m where m.manufacture.manufactureId= ?1")
    Page<Monitor> findByManufacture(Long id,Pageable pageable);

}
