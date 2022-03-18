package com.example.shoppingApp.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

@EntityScan
public class User implements Serializable {

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Collection getProducts() {
        return products;
    }

    public void setProducts(Collection products) {
        this.products = products;
    }


}
