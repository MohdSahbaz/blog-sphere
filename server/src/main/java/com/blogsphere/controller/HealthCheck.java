package com.blogsphere.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/public/health-check")
@CrossOrigin(origins = "*")
public class HealthCheck {

    @GetMapping
    public ResponseEntity<?> heathCheck(){
        return ResponseEntity.ok("Server is running!");
    }
}
