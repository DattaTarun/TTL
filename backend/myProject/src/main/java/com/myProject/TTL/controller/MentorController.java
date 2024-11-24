package com.myProject.TTL.controller;

import com.myProject.TTL.model.Mentor;
import com.myProject.TTL.services.MentorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mentors")
public class MentorController {

    @Autowired
    private MentorService mentorService;

    @GetMapping
    public List<Mentor> getAllMentors() {
        return mentorService.getAllMentors();
    }

    @GetMapping("/{id}")
    public Optional<Mentor> getMentorById(@PathVariable String id) {
        return mentorService.getMentorById(id);
    }

    @PostMapping
    public Mentor createMentor(@RequestBody Mentor mentor) {
        return mentorService.saveMentor(mentor);
    }

    @DeleteMapping("/{id}")
    public void deleteMentor(@PathVariable String id) {
        mentorService.deleteMentor(id);
    }
}
