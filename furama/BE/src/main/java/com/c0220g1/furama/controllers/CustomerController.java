package com.c0220g1.furama.controllers;

import com.c0220g1.furama.model.dto.CustomerDto;
import com.c0220g1.furama.model.entity.Customer;
import com.c0220g1.furama.service.customer.CustomerService;
import com.c0220g1.furama.service.customer.ICustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final ICustomerService customerService;

    @RequestMapping(value = "/get",
            method = RequestMethod.GET)
    public ResponseEntity<List<Customer>> getAll(){
        customerService.findAll();
        return ResponseEntity.ok().body(customerService.findAll());
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Long id){
        Optional<Customer> customer=customerService.findById(id);
        if (customer.isPresent()){
            return new ResponseEntity<>(customer.get(),HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/search/name/{name}/phone/{phone}/age1/{age1}/age2/{age2}/customerTypeId/{customerTypeId}")
    public ResponseEntity<List<Customer>> findAllField(@PathVariable String name,@PathVariable String phone,
                                                       @PathVariable String age1,@PathVariable String age2,
                                                       @PathVariable String customerTypeId) {
        if("null".equals(name)){
            name=null;
        }
        if("null".equals(phone)){
            phone=null;
        }
        if("null".equals(age1)){
            age1=null;
        }
        if("null".equals(age2)){
            age2=null;
        }
        if("null".equals(customerTypeId)){
            customerTypeId=null;
        }
        return new ResponseEntity<>(customerService.findAllField(name, phone, age1, age2, customerTypeId),HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<List<FieldError>> create(@Valid @RequestBody CustomerDto customerDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.NOT_ACCEPTABLE);
        }
        Customer customer=new Customer();
        BeanUtils.copyProperties(customerDto,customer);
        customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>> getAll(
            @Valid @RequestBody CustomerDto customerDto,
            BindingResult bindingResult,@PathVariable Long id){
        Optional<Customer> customer=customerService.findById(id);
        if (!customer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        Customer customer1=new Customer();
        BeanUtils.copyProperties(customerDto,customer1);
        customer1.setCustomerId(id);
        customerService.save(customer1);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/id")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        Optional<Customer> customerOptional=customerService.findById(id);
        if (!customerOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        customerService.delete(customerOptional.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
