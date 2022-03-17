package com.example.shoppingApp.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

public class User {

    private Long id;
    private String email;
    private String userName;
    private String password;
    private int phone;
    private String firstName;
    private String lastname;
    private Collection<Product> products = new ArrayList<>();


    public User (@JsonProperty("id")Long id,
                 @JsonProperty("email")String email,
                 @JsonProperty("userName")String userName,
                 @JsonProperty("password")String password,
                 @JsonProperty("phone")int phone,
                 @JsonProperty("userName")String firstName,
                 @JsonProperty("password")String lastname) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.phone = phone;
        this.firstName = firstName;
        this.lastname = lastname;
    }



}
