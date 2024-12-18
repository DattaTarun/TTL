package com.myProject.TTL.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    
    private String username;
    private String email;
    private String password;
    private String bio; // Add bio
    private String domains; // Add domains of interest
    private String skills; // Add skills
    private String resumeLink; // Add resume link
    private double latitude;
    private double longitude;

    public User() {}

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getDomains() {
        return domains;
    }

    public void setDomains(String domains) {
        this.domains = domains;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
    public String getResumeLink() {
        return resumeLink;
    }

    public void setResumeLink(String resumeLink) {
        this.resumeLink = resumeLink;
    }

    private boolean isMentor = false;

public boolean isMentor() {
    return isMentor;
}

public void setMentor(boolean isMentor) {
    this.isMentor = isMentor;
}

private String profilePhoto;

public String getProfilePhoto() {
    return profilePhoto;
}

public void setProfilePhoto(String profilePhoto) {
    this.profilePhoto = profilePhoto;
}

}
