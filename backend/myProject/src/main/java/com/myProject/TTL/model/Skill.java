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
}
