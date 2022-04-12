package com.example.shoppingApp.rest;

import com.example.shoppingApp.entity.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("user")
public class userEndpoint {


    public static final List <User> USERS = Arrays.asList(
            new User( 1,
            "john@gmail.com",
            "john",
            "m38rmF$",
            "john",
            "doe",
            1570236703),
            new User( 2,
            "morrison@gmail.com",
            "mor_2314",
            "83r5^_",
            "david",
            "morrison",
            1570236703)
    );

    @GetMapping(path = "{userId}")
    public User getUser (@PathVariable ("userId") Integer userId) {
        return USERS.stream()
                .filter(user -> userId.equals(user.getId()))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("User " + userId + " doesn't exst") );
    }

}
