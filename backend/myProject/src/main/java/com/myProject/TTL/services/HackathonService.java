package com.myProject.TTL.services;

import com.myProject.TTL.model.Hackathon;
import com.myProject.TTL.repository.HackathonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HackathonService {

    @Autowired
    private HackathonRepository hackathonRepository;

    public List<Hackathon> getAllHackathons() {
        return hackathonRepository.findAll();
    }

    public Optional<Hackathon> getHackathonById(String id) {
        return hackathonRepository.findById(id);
    }

    public Hackathon saveHackathon(Hackathon hackathon) {
        return hackathonRepository.save(hackathon);
    }

    public void deleteHackathon(String id) {
        hackathonRepository.deleteById(id);
    }
}
