package com.example.demo.app.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {

    public String helloWorld(){

        return "Hello world";
    }

}
