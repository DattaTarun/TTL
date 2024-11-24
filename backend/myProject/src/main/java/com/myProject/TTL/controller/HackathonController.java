package com.myProject.TTL.controller;

import com.myProject.TTL.model.Hackathon;
import com.myProject.TTL.services.HackathonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hackathons")
public class HackathonController {

    @Autowired
    private HackathonService hackathonService;

    @GetMapping
    public List<Hackathon> getAllHackathons() {
        return hackathonService.getAllHackathons();
    }

    @GetMapping("/{id}")
    public Optional<Hackathon> getHackathonById(@PathVariable String id) {
        return hackathonService.getHackathonById(id);
    }

    @PostMapping
    public Hackathon createHackathon(@RequestBody Hackathon hackathon) {
        return hackathonService.saveHackathon(hackathon);
    }

    @DeleteMapping("/{id}")
    public void deleteHackathon(@PathVariable String id) {
        hackathonService.deleteHackathon(id);
    }
}
