package com.c0220g1.furama.service.customer;

import com.c0220g1.furama.model.entity.Customer;
import com.c0220g1.furama.service.GeneralService;

import java.util.List;

public interface ICustomerService extends GeneralService<Customer> {
    List<Customer> findAllField(String name,String phone,String fromAge,String toAge,String positionTypeId);
}
