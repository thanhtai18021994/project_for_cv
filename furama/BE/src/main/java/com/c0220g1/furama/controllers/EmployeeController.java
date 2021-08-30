package com.c0220g1.furama.controllers;

import com.c0220g1.furama.model.dto.EmployeeDto;
import com.c0220g1.furama.model.entity.Employee;

import com.c0220g1.furama.model.entity.Role;
import com.c0220g1.furama.model.entity.User;
import com.c0220g1.furama.repository.RoleRepository;
import com.c0220g1.furama.repository.UserRepository;
import com.c0220g1.furama.service.employee.IEmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/employee")
@RequiredArgsConstructor
public class EmployeeController {

     private final IEmployeeService employeeService;
     private final RoleRepository roleRepository;
     private final UserRepository userRepository;

    @GetMapping("/get")
    public ResponseEntity<List<Employee>> getAll(){
        return ResponseEntity.ok().body(employeeService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> findById(@PathVariable Long id){
        Optional<Employee> employee=employeeService.findById(id);
        if (employee.isPresent()){
            return ResponseEntity.ok().body(employee.get());
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> create(@Valid @RequestBody EmployeeDto employeeDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.NOT_ACCEPTABLE);
        }
        Employee employee=new Employee();
        BeanUtils.copyProperties(employeeDto,employee);
        Employee newEmployee=employeeService.save(employee);
        User user=new User();
        user.setEmail(newEmployee.getEmployeeEmail());
        user.setEmployee(newEmployee);
        user.setPassword(new BCryptPasswordEncoder().encode("123456"));
        List<Role> roles = new ArrayList<>();
        roles.add(roleRepository.findByName("ROLE_MEMBER"));
        user.setRoles(roles);
        userRepository.save(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>> update(@PathVariable Long id,
                                                   @RequestBody EmployeeDto employeeDto,
                                                   BindingResult bindingResult){
        Optional<Employee> employee=employeeService.findById(id);
        if (!employee.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        Employee employee1=new Employee();
        BeanUtils.copyProperties(employeeDto,employee1);
        employee1.setEmployeeId(id);
        employeeService.save(employee1);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/id")
    public ResponseEntity<Employee> delete(
            @PathVariable Long id){
        Optional<Employee> employee=employeeService.findById(id);
        if (!employee.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        employeeService.delete(employee.get());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/search/name/{name}/phone/{phone}/position/{position}/education/{education}/division/{division}")
    public ResponseEntity<List<Employee>> searchName(
            @PathVariable String name,@PathVariable  String phone,
            @PathVariable String position,@PathVariable String education
            ,@PathVariable String division){
        if ("null".equals(phone)){
            phone=null;
        }
        if ("null".equals(name)){
            name=null;
        }
        if ("null".equals(position)){
            position=null;
        }
        if ("null".equals(education)){
            education=null;
        }
        if ("null".equals(division)){
            division=null;
        }
        List<Employee> employees=employeeService.searchAll(name, phone, position, education, division);
        return new ResponseEntity<>(employees,HttpStatus.OK);
    }
}
