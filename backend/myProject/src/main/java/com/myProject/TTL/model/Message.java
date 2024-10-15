package com.myProject.TTL.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "messages")
public class Message {
    @Id
    private String id;
    private String content;
    private Date timestamp;

    // Getters and Setters
}