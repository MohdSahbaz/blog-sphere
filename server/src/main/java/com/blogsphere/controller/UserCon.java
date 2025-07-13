package com.blogsphere.controller;

import com.blogsphere.model.User;
import com.blogsphere.service.UserSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserCon {
    @Autowired
    private UserSer userSer;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register user
    @PostMapping("/regi")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            Optional<User> existingUser = userSer.findUserByUsername(user.getUsername());

            if(existingUser.isPresent()){
                return ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body("Username already taken");
            }

            User newUser = userSer.userRegister(user);
            return ResponseEntity
                    .ok(newUser);
        }
        catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("DUE TO INTERNAL SERVER ERROR, REGISTRATION FAILED: " + e.getMessage());
        }
    }

    // Login user
    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            User user1 = userSer.findUserByUsername(user.getUsername()).orElseThrow(() -> new RuntimeException("User not found"));
            boolean isPasswordMatch = passwordEncoder.matches(user.getPassword(), user1.getPassword());
            if (!isPasswordMatch) {
                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body("Credential error");
            }
            return ResponseEntity
                    .ok(user1);
        }catch (RuntimeException e){
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
        catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("DUE TO INTERNAL SERVER ERROR, LOGIN FAILED");
        }
    }
}
