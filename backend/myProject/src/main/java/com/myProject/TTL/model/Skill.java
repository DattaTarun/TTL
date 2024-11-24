package com.myProject.TTL.model;
import jakarta.persistence.*;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "skills")
public class Skill {
    @Id
    private String id;
    private String name;
    private String description;

    private List<Student> students;

    public Skill() {}

    public Skill(String name, String description) {
        this.name = name;
        this.description=description;
    }
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
