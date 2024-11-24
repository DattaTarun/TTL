package com.myProject.TTL.controller;

import com.myProject.TTL.model.Student;
import com.myProject.TTL.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//JPA is Java Persistence API for Object Relational Mapping
//Spring MVC Annotations
@RestController
public class MyController {
    @GetMapping("/home")
    public String home(){
        return "This is home page";
    }
    //this annotation declares a dependency
    @Autowired
    private StudentService studentService;
    //an instance of topic service is now available to use;

    @RequestMapping("/students")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }
    @RequestMapping("/students/{id}")
    public Optional<Student> getStudent(@PathVariable String id){
        return studentService.getStudentById(id);
    }
    @RequestMapping(method = RequestMethod.POST, value = "/students")
    public void addStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }
    @RequestMapping(method = RequestMethod.PUT, value = "/students/{id}")
    public void updateStudent(@RequestBody Student student, @PathVariable String id){
        studentService.updateStudent(id, student);
    }
    @RequestMapping(method = RequestMethod.DELETE, value="/students/{id}")
    public void deleteStudent(@PathVariable String id){
        studentService.deleteStudent(id);
    }
}
