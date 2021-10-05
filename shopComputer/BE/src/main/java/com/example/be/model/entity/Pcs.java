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
public class Pcs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pcs_id")
    private Long pcsId;
    @Column(name = "pcs_name")
    private String pcsName;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "pcs")
    @JsonBackReference(value = "computer-pcs")
    Set<Computer> computers;
}
