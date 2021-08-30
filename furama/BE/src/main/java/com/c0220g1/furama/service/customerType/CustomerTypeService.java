package com.c0220g1.furama.service.customerType;

import com.c0220g1.furama.model.entity.CustomerType;
import com.c0220g1.furama.repository.CustomerTypeReponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerTypeService implements ICustomerTypeService{
    @Autowired
    CustomerTypeReponsitory customerTypeReponsitory;

    @Override
    public List<CustomerType> findAll() {
        return customerTypeReponsitory.findAll();
    }

    @Override
    public Page<CustomerType> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public CustomerType save(CustomerType customerType) {
        return null;
    }

    @Override
    public void delete(CustomerType customerType) {

    }

    @Override
    public Optional<CustomerType> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<CustomerType> searchName(String name) {
        return null;
    }
}
