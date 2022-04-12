package com.example.shoppingApp.security;

public enum ApplicationUserPermission {

    ReadProduct("Product:read"),
    WriteProduct("Product:write"),
    ReadUser("User:read"),
    WriteUser("User:write");


    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }

}
