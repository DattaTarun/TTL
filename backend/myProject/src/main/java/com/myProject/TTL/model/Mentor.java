package com.myProject.TTL.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "mentors")
public class Mentor {
    @Id
    private String id;
    private String expertise;
    private String bio;

    private List<Student> students;

    // Getters and Setters
}
