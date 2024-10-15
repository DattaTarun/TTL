package com.myProject.TTL.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.myProject.TTL.model.Team;
public interface TeamRepository extends MongoRepository<Team, String> {
}