package com.myProject.TTL.services;

import com.myProject.TTL.model.Mentor;
import com.myProject.TTL.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorService {

    @Autowired
    private MentorRepository mentorRepository;

    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }

    public Mentor saveMentor(Mentor mentor) {
        return mentorRepository.save(mentor);
    }
    


    public Optional<Mentor> getMentorById(String id) {
        return mentorRepository.findById(id);
    }


    public void deleteMentor(String id) {
        mentorRepository.deleteById(id);
    }
}
