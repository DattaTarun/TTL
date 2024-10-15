package com.myProject.TTL.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.myProject.TTL.model.Mentor;
public interface MentorRepository extends MongoRepository<Mentor, String> {
}
