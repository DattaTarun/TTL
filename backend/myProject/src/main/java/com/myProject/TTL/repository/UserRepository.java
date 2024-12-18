package com.myProject.TTL.repository;

import com.myProject.TTL.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    List<User> findByKeywordsContaining(String keyword);
}
