package com.myProject.TTL.repository;

import com.myProject.TTL.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, String> {


}
