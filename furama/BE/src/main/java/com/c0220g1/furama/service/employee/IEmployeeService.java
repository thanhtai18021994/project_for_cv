package com.c0220g1.furama.service.employee;

import com.c0220g1.furama.model.entity.Employee;
import com.c0220g1.furama.service.GeneralService;

import java.util.List;

public interface IEmployeeService extends GeneralService<Employee> {
    List<Employee> searchAll(String name,String phone,String positionId,String educationId,String divisionId);
}
