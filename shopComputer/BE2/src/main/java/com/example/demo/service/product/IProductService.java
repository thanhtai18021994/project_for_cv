package com.example.demo.service.product;

import com.example.demo.model.Computer;
import com.example.demo.service.GeneralService;

import java.util.List;

public interface IProductService extends GeneralService<Computer> {
    List<Computer> searchByCategory(List<Integer> id);
    List<Computer> findByPrice(List<Integer> price);
    List<Computer> searchComputer(Integer id);
}
