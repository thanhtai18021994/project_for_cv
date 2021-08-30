package com.example.demo.controllers;

import com.example.demo.dto.ComputerDto;
import com.example.demo.model.*;
import com.example.demo.service.category.ICategoryService;
import com.example.demo.service.featureComputer.IFeatureComputerService;
import com.example.demo.service.featureProductProduct.IFeatureProductProduct;
import com.example.demo.service.product.IProductService;
import com.example.demo.service.typeComputer.ITypeComputerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class ProductController {
    @Autowired
    IProductService productService;
    @Autowired
    ICategoryService categoryService;
    @Autowired
    IFeatureComputerService featureComputerService;
    @Autowired
    IFeatureProductProduct featureProductProduct;
    @Autowired
    ITypeComputerService typeComputerService;


    @GetMapping("/listComputer")
    public ResponseEntity<Iterable<Computer>> getAll(){
        List<Computer> computerList =productService.findAll();
        return new ResponseEntity<>(computerList,HttpStatus.OK);
    }

    @GetMapping("/list/feature-computer")
    public ResponseEntity<Iterable<FeatureLaptop>> getFeatureComputer(){
        List<FeatureLaptop> featureComputerList =featureComputerService.findAll();
        return new ResponseEntity<>(featureComputerList,HttpStatus.OK);
    }

    @GetMapping("/list/composite/key")
    public ResponseEntity<Iterable<FeatureProductProduct>> getKeyComposite(){
        List<FeatureProductProduct> featureComputerList =featureProductProduct.findAll();
        return new ResponseEntity<>(featureComputerList,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<FieldError>> create(@Valid @RequestBody ComputerDto computer, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NOT_ACCEPTABLE);
        }
        Computer computer1=new Computer();
        TypeComputer typeComputer=typeComputerService.findById(computer.getTypeComputerId()).get();
        computer1.setTypeComputer(typeComputer);
        computer1.setCategory(categoryService.findById(computer.getCategoryId()).get());
        BeanUtils.copyProperties(computer,computer1);
        computer1.setNewPrice();
        Computer computer2=productService.save(computer1);
        Integer[] featureLaptop=computer.getFeatureComputers();

        Integer computerId=computer2.getProductId();
        for (int i = 0; i < featureLaptop.length; i++) {
            featureProductProduct.insertKeyComposite(featureLaptop[i],computerId);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/category")
    public ResponseEntity<Iterable<Category>> getAllCategory(){
        List<Category> categories=categoryService.findAll();
        return new ResponseEntity<>(categories,HttpStatus.OK);
    }

    @GetMapping("/product/search-category/{idCategory}")
    public ResponseEntity<Iterable<Computer>> searchByCategory(@PathVariable List<Integer> idCategory) {
        List<Computer> computers = productService.searchByCategory(idCategory);
        return new ResponseEntity<>(computers, HttpStatus.OK);
    }
    @GetMapping("/product/list-empty")
    public ResponseEntity<Iterable<Computer>>getListEmpty(){
        List<Computer> computers=new ArrayList<>();
        return new ResponseEntity<>(computers,HttpStatus.OK);
    }

    @GetMapping("/product/price/{price}")
    public ResponseEntity<Iterable<Computer>> findByPrice(@PathVariable List<Integer> price){
        List<Computer> computers =productService.findByPrice(price);
        return new ResponseEntity<>(computers,HttpStatus.OK);
    }

    @GetMapping("/product/search/{id}")
    public ResponseEntity<Iterable<Computer>> searchComputer(@PathVariable Integer id){
        List<Computer> computers=productService.searchComputer(id);
        return new ResponseEntity<>(computers,HttpStatus.OK);
    }

}
