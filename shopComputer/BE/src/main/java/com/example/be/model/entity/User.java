package com.example.be.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * User Entity
 */
@Entity
@Table(name = "user")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userId")
    private Integer id;

    @Column(name = "full_name")
    private String fullName;

    @Column(nullable = false, name = "email")
    private String email;
    private boolean status;
    @Column(name = "address")
    private String address;

    @Column(name = "number_phone")
    private String numberPhone;

    @Column(name = "imageAvatarOfUser")
    private String imageAvatarOfUser = "?";

    @Column(name = "password")
    private String password;

    @Column(name = "rememberToken")
    private String rememberToken;

    @Column(name = "created_At")
    private Timestamp createdAt;

    @Column(name = "updated_At")
    private Timestamp updatedAt;

    @OneToOne
    private Cart cart;
    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private List<Role> roles;



    public User(Integer id, String fullName, String email, String password, List<Role> roles) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}