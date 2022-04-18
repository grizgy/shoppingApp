package com.example.shoppingApp.rest;

import com.example.shoppingApp.entity.Product;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class EditProductController {

    public static final List<Product> PRODUCTS = Arrays.asList(
            new Product(1,
                    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    109.95,
                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "men's clothing",
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    new double[]{3.9, 120}),

            new Product(
                    2,
                    "Mens Casual Premium Slim Fit T-Shirts ",
                    22.3,
                    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                    "men's clothing",
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                    new double[] {4.1, 259}),

            new Product(3,
                    "Mens Cotton Jacket",
                    55.99,
                    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                    "men's clothing",
                    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                    new double[] { 4.7, 500}),

            new Product(4,
                    "Mens Casual Slim Fit",
                    15.99,
                    "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                    "men's clothing",
                    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                    new double[] {2.1, 430}),

            new Product(5,
                    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                    695,
                    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                    "jewelery",
                    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                    new double[] {4.6, 400}),

            new Product(6,
                    "Solid Gold Petite Micropave ",
                    168,
                    "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                    "jewelery",
                    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                    new double[]{3.9, 70}),
            new Product(7,
                    "White Gold Plated Princess",
                    9.99,
                    "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                    "jewelery",
                    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                    new double[]{3,400}),
            new Product(
                    8,
                    "Pierced Owl Rose Gold Plated Stainless Steel Double",
                    10.99,
                    "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                    "jewelery",
                    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                    new double[]{1.9, 100}),
            new Product(9,
                    "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                    64,
                    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
                    "electronics",
                    "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                    new double[]{3.3,203}),
            new Product(10,
                    "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                    109,
                    "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
                    "electronics",
                    "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                    new double[]{2.9, 470})
    );

    @GetMapping
    @PreAuthorize("hasAuthority('Product:read')")
    public List <Product> getAllProducts() {
        return PRODUCTS;
    }

    @PostMapping
    @PreAuthorize("hasAuthority('Product:write')")
    public void addNewProduct(@RequestBody Product product) {
        System.out.println(product);
    }

    @DeleteMapping(path = "{productId}")
    @PreAuthorize("hasAuthority('Product:write')")
    public void removeProduct(@PathVariable ("productId") Integer productId) {
        System.out.println(productId);
    }

    @PutMapping(path = "{productId}")
    @PreAuthorize("hasAuthority('Product:write')")
    public void editProduct(@PathVariable ("productId") Integer productId, @RequestBody Product product) {
        System.out.println(String.format("%s %s", productId, product));
    }

}
