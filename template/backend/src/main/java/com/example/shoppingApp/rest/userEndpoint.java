package com.example.shoppingApp.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Stream;

@RestController
public class userEndpoint {

    @GetMapping
    public String hello () {
        return "Hello World!";
    }

}
