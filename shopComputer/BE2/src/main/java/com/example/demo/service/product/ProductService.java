package com.example.demo.service.product;

import com.example.demo.model.Computer;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    ProductRepository productRepository;

    @Override
    public Page<Computer> findAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public List<Computer> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Computer save(Computer computer) {
     return productRepository.save(computer);
    }

    @Override
    public void delete(Computer computer) {
     productRepository.delete(computer);
    }

    @Override
    public Optional<Computer> findById(Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public List<Computer> searchByCategory(List<Integer> ids) {
        List<Computer> computers =new ArrayList<>();
        for (int i = 0; i < ids.size(); i++) {
           List<Computer> computerList = productRepository.searchByCategory(ids.get(i));
            for (int j = 0; j < computerList.size(); j++) {
                computers.add(computerList.get(j));
            }
        }
        return computers;
    }

    @Override
    public List<Computer> findByPrice(List<Integer> price) {
        List<Computer> computers =new ArrayList<>();
        List<Computer> computerList =new ArrayList<>();
        for (int i = 0; i < price.size(); i++) {
            if (price.get(i)==1){
                computerList =productRepository.findByPriceLessThan(10000000);
            }
            if (price.get(i)==2){
                computerList =productRepository.findByPriceBetween(10000000,15000000);
            }
            if (price.get(i)==3){
                computerList =productRepository.findByPriceBetween(15000000,20000000);
            }
            if (price.get(i)==4){
                computerList =productRepository.findByPriceBetween(20000000,25000000);
            }
            if (price.get(i)==5){
                computerList =productRepository.findByPriceGreatThan(25000000);
            }
            for (int j = 0; j < computerList.size(); j++) {
                computers.add(computerList.get(j));
            }
        }
        return computers;
    }

    @Override
    public List<Computer> searchComputer(Integer id) {
        return productRepository.searchLaptop(id);
    }
}
