package com.myProject.TTL.repository;
import com.myProject.TTL.model.Forum;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ForumRepository extends MongoRepository<Forum, String> {
}