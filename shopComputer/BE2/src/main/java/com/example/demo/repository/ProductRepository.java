package com.example.demo.repository;

import com.example.demo.model.Computer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Computer,Integer> {
    @Query(value = "call searchByCategory(?1)",nativeQuery = true)
    List<Computer> searchByCategory(Integer id);
    @Query("select p from Computer p where p.listedPrice >?1 and p.listedPrice<=?2")
    List<Computer> findByPriceBetween(float price1, float price2);
    @Query("select p from Computer p where p.listedPrice <=?1")
    List<Computer> findByPriceLessThan(float price);
    @Query("select p from Computer p where p.listedPrice >=?1")
    List<Computer> findByPriceGreatThan(float price);
    @Query(value = "CALL searchLaptop(?1)",nativeQuery = true)
    List<Computer> searchLaptop(Integer id);
}
