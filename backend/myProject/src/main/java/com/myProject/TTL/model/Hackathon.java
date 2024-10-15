package com.myProject.TTL.model;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import jakarta.persistence.*;
import java.util.List;

    @Document(collection = "hackathons")
    public class Hackathon {
        @Id
        private String id;
        private String title;
        private String description;
        private Date date;

        private List<Student> participants;
        private List<Team> teams;

        // Getters and Setters
    }

