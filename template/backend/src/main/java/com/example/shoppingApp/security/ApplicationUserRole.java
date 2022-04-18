package com.example.shoppingApp.security;

import com.google.common.collect.Sets;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Set;
import java.util.stream.Collectors;

import static com.example.shoppingApp.security.ApplicationUserPermission.*;
import static com.example.shoppingApp.security.ApplicationUserPermission.WriteProduct;

public enum ApplicationUserRole {

    USER(Sets.newHashSet(ReadProduct)),
    ADMIN(Sets.newHashSet(ReadUser,WriteUser,ReadProduct,WriteProduct));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole (Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }

    public Set <SimpleGrantedAuthority> getSimpleGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());

        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }

}
