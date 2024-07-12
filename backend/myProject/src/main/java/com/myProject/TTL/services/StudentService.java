package com.myProject.TTL.services;
//Business Services in spring
//It is basically a singleton class which creates only one instance, other classes, controllers depend on it
//creates a dependency

import com.myProject.TTL.model.Student;
import com.myProject.TTL.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents(){
        List<Student> students = new ArrayList<>();
        studentRepository.findAll().forEach(students::add);
        return students;
    }
    public Optional<Student> getStudent(String id){
         return studentRepository.findById(id);
    }
    public void addStudent(Student student){
        studentRepository.save(student);
    }
    public void updateStudent(String id, Student student){
        studentRepository.save(student);
    }
    public void deleteStudent(String id){
       // topics.removeIf(t->t.getId().equals(id));
        studentRepository.deleteById(id);
    }

}
