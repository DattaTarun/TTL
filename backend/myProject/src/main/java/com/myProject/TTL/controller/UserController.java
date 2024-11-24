package com.myProject.TTL.controller;


import com.myProject.TTL.model.User;
import com.myProject.TTL.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.myProject.TTL.model.User;
import com.myProject.TTL.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody User user) {
        // Check if the username is already taken
        if (userService.findUserByUsername(user.getUsername()).isPresent()) {
            return "Username already exists";
        }
        userService.saveUser(user);
        return "User signed up successfully";
    }

   @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User user) {
    Optional<User> foundUser = userService.findUserByUsername(user.getUsername());
    if (foundUser.isPresent() && foundUser.get().getPassword().equals(user.getPassword())) {
        // Return the full user object (or a sanitized version)
        return ResponseEntity.ok(foundUser.get());
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
}


    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable String id, @RequestBody User user) {
        user.setId(id); // Ensure the ID is set correctly
        return userService.updateUser(user);
    }
}
