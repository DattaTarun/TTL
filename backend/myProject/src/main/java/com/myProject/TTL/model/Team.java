package com.myProject.TTL.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "teams")
public class Team {
    @Id
    private String id;
    private String name;

    private List<Student> members;

    // Getters and Setters
}