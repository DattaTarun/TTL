package com.myProject.TTL.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.myProject.TTL.model.Skill;
public interface SkillRepository extends MongoRepository<Skill, String> {
}

