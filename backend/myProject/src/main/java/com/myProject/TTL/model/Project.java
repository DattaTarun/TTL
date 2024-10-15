package com.myProject.TTL.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "projects")
public class Project {
    @Id
    private String id;
    private String title;
    private String description;
    private String status;

    private List<Student> members;
    private List<Skill> skills;

    // Getters and Setters
}
