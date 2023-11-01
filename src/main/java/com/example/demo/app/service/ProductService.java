package com.example.demo.app.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ObjectMapper objectMapper;

    public String helloWorld()
    {
        return "Hello world";
    }

    public Object fetchProductData() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://dummyjson.com/products";
        try
        {
            String jsonData = restTemplate.getForObject(url, String.class);
            return objectMapper.readValue(jsonData, Object.class);

        }
        catch (Exception e) {
            e.printStackTrace();
            return "Error occurred while processing the data.";
        }
    }

}
