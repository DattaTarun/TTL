package com.myProject.TTL.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "mentors")
public class Mentor {
    @Id
    private String id;
    private String name;
    private String expertise;
    private String bio;

    private List<Student> students;

    public Mentor() {}

    public Mentor(String name, String expertise, String bio) {
        this.name = name;
        this.expertise = expertise;
        this.bio = bio;
    }
    // Getters and Setters
     public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExpertise() { return expertise; }
    public void setExpertise(String expertise) { this.expertise = expertise; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public List<Student> getStudents() { return students; }
    public void setStudents(List<Student> students) { this.students = students; }
}
