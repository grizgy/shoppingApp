package com.example.shoppingApp.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Arrays;

public class Product {


    private int id;
    private String title;
    private double price;
    private String description;
    private String category;
    private String image;
    private double[] rating;
//    private String size;
//    private String color;
//    private int quantity;

    public Product (@JsonProperty("id")int id,
                 @JsonProperty("title")String title,
                 @JsonProperty("price")double price,
                 @JsonProperty("description")String description,
                 @JsonProperty("category")String category,
                 @JsonProperty("image")String image,
                 @JsonProperty("rating")double[] rating
//            ,
//                 @JsonProperty("size")String size,
//                 @JsonProperty("color")String color,
//                 @JsonProperty("size")int quantity
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
//        this.size = size;
//        this.color = color;
//        this.quantity = quantity;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription (String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }


    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public double[] getRating() {
        return rating;
    }

    public void setRating(double[] rating) {
        this.rating = rating;
    }

//    public String getSize() {
//        return size;
//    }
//
//    public void setSize(String size) {
//        this.size = size;
//    }
//
//    public String getColor() {
//        return color;
//    }
//
//    public void setColor(String category) {
//        this.color = color;
//    }
//
//    public int getQuantity() {
//        return quantity;
//    }
//
//    public void setQuantity(int quantity) {
//        this.quantity = quantity;
//    }


    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", image='" + image + '\'' +
                ", rating=" + Arrays.toString(rating) +
                '}';
    }
}
