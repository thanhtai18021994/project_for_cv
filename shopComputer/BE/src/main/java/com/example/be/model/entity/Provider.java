package com.example.be.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long providerId;
    private String providerName;
    @OneToMany(mappedBy = "provider")
    @JsonBackReference
    Set<Computer> computerSet;
    @OneToMany(mappedBy = "provider")
    @JsonBackReference
    Set<Monitor> monitors;
    @OneToMany(mappedBy = "provider")
    @JsonBackReference
    Set<Keyboard> keyboards;
    @OneToMany(mappedBy = "provider")
    @JsonBackReference
    Set<Mouse> mouseSet;
}
