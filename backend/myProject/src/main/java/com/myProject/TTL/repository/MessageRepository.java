package com.myProject.TTL.repository;
import com.myProject.TTL.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, String> {
}