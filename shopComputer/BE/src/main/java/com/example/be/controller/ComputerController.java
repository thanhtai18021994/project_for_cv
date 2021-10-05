package com.example.be.controller;

import com.example.be.model.dto.ComputerDto;
import com.example.be.model.entity.Computer;
import com.example.be.model.entity.ImageDetailOfComputer;
import com.example.be.model.service.computer.IComputerService;
import com.example.be.model.service.imageDetailOfComputerDetail.IImageDetailOfComputerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/computer")
@RequiredArgsConstructor
public class ComputerController {
    private final IComputerService computerService;
    private final IImageDetailOfComputerService iImageDetailOfComputerService;

    @GetMapping()
    public ResponseEntity<List<Computer>> findAll(){
        return new ResponseEntity<>(computerService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/product")
    public ResponseEntity<Page<Computer>> findAllPagination(
            @RequestParam (value = "page",defaultValue = "1") Integer page,
            @RequestParam (value = "size",defaultValue = "5") Integer size,
            @PageableDefault(sort = "computerName",direction = Sort.Direction.ASC) Pageable pageable
    ){
        pageable.
        Page<Computer> computers=computerService.getAll(pageable);
        computers.getTotalElements();
        return new ResponseEntity<>(computerService.getAll(pageable),HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Computer> findById(@PathVariable Long id){
        Optional<Computer> computer=computerService.findById(id);
        if (!computer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(computer.get(),HttpStatus.OK);
    }

    @PostMapping(value = "/create",consumes ={"application/json"})
    public ResponseEntity<List<FieldError>> createComputer(@Valid @RequestBody ComputerDto computerDto,
                                                           BindingResult bindingResult){

        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NO_CONTENT);
        }
        Computer computer=new Computer();
        BeanUtils.copyProperties(computerDto,computer);
        Computer computer1=computerService.save(computer);
        List<String> images=computerDto.getImageDetailOfComputers();
        for (int i = 0; i < images.size(); i++) {
            ImageDetailOfComputer imageDetailOfComputer=new ImageDetailOfComputer();
            imageDetailOfComputer.setComputer(computer1);
            imageDetailOfComputer.setUrl(images.get(i));
            iImageDetailOfComputerService.save(imageDetailOfComputer);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<List<FieldError>> updateComputer(@Valid @RequestBody ComputerDto computerDto,
                                                           BindingResult bindingResult,@PathVariable Long id){
        Optional<Computer> computer=computerService.findById(id);
        if (!computer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.NO_CONTENT);
        }
        Computer computer1=new Computer();
        BeanUtils.copyProperties(computerDto,computer1);
        computer1.setComputerId(id);
        Computer computer2=computerService.save(computer1);
        List<String> images=computerDto.getImageDetailOfComputers();
        Set<ImageDetailOfComputer> imageDetails=new HashSet<>();
        for (int i = 0; i < images.size(); i++) {
            ImageDetailOfComputer imageDetailOfComputer=new ImageDetailOfComputer();
            imageDetailOfComputer.setComputer(computer1);
            imageDetailOfComputer.setUrl(images.get(i));
            imageDetails.add(imageDetailOfComputer);
            computer2.setImageDetailOfComputers(imageDetails);
        }
        computerService.save(computer2);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteComputer(@PathVariable Long id){
        Optional<Computer> computer=computerService.findById(id);
        if (!computer.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        computerService.delete(computer.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
