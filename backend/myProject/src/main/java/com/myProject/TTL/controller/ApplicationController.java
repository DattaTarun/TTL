package com.myProject.TTL.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApplicationController {

    @RequestMapping("/")
    public String Show() {
        return "Hello World";
    }
}
