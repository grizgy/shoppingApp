package com.example.shoppingApp.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static com.example.shoppingApp.security.ApplicationUserPermission.*;
import static com.example.shoppingApp.security.ApplicationUserPermission.WriteProduct;

public enum ApplicationUserRole {

    STUDENT(Sets.newHashSet()),
    ADMIN(Sets.newHashSet(ReadUser,WriteUser,ReadProduct,WriteProduct));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole (Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }

}
