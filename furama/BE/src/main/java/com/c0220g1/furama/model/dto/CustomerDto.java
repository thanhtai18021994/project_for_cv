package com.c0220g1.furama.model.dto;

import com.c0220g1.furama.model.entity.CustomerType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CustomerDto {

    private Integer customerId;
    private String codeCustomer;
    private String customerName;
    @Column(columnDefinition = "date")
    private String customerBirthday;
    private String customerGender;
    private String customerIdCard;


    private String customerPhone;
    private String customerEmail;
    private String customerAddress;
    private CustomerType customerType;

    private Set<ContractDto> contractDto;
}
