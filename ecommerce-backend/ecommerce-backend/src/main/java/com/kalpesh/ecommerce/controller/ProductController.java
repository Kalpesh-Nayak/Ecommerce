package com.kalpesh.ecommerce.controller;
import com.kalpesh.ecommerce.entity.Product;
import com.kalpesh.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepo;

    @PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return productRepo.save(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }
}
