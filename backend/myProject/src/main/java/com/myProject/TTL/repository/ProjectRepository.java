package com.myProject.TTL.repository;
import com.myProject.TTL.model.Project;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {
}