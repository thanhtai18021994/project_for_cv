package com.example.be.controller;


import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class OrderController {
    public void order(Authentication authentication){
       if( authentication.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_CUSTOMER"))){

       }
    }
}
