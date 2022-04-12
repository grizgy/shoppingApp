package com.example.shoppingApp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import static com.example.shoppingApp.security.ApplicationUserRole.*;


@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ApplicationSecurityConfig (PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure (HttpSecurity http) throws Exception {

        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/", "/cart")
            .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .httpBasic();

    }


    @Override
    @Bean
    protected UserDetailsService userDetailsService() {

        UserDetails KrisUser = User.builder()
                .username("KrisHristov")
                .password(passwordEncoder.encode("asdfg"))
                .roles(STUDENT.name())
                .build();


        UserDetails adminUser = User.builder()
                .username("admin")
                .password(passwordEncoder.encode("asdfg123"))
                .roles(ADMIN.name())
                .build();

        return new InMemoryUserDetailsManager(
                KrisUser,
                adminUser
        );
    }
}
