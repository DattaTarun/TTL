package com.myProject.TTL.repository;
import com.myProject.TTL.model.Hackathon;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HackathonRepository extends MongoRepository<Hackathon, String> {
}
