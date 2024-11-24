package com.myProject.TTL.repository;

import com.myProject.TTL.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
}
