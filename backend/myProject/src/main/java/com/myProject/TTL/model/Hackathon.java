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
        public String getId() { return id; }
        public void setId(String id) { this.id = id; }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public Date getDate() { return date; }
        public void setDate(Date date) { this.date = date; }

        public List<Student> getParticipants() { return participants; }
        public void setParticipants(List<Student> participants) { this.participants = participants; }

        public List<Team> getTeams() { return teams; }
        public void setTeams(List<Team> teams) { this.teams = teams; }
    }

