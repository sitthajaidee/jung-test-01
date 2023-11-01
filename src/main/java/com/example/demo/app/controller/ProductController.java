package com.example.demo.app.controller;

import com.example.demo.app.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    final ProductService productService;

    @PostMapping("/home")
    public ResponseEntity<String> helloWorld(){
        return ResponseEntity.ok(productService.helloWorld());
    }

}
