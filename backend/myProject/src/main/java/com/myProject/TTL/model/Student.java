package com.myProject.TTL.model;
import jakarta.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name;
    private String description;
    private double latitude;
    private double longitude;
    private List<Skill> skills;
    private List<Hackathon> hackathons;
    private List<Forum> forums;
    private List<Project> projects;
    private List<Team> teams;

    public Student() {

    }

    public Student(String id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }



}
