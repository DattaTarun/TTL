package com.myProject.TTL.controller;

import com.myProject.TTL.model.Skill;
import com.myProject.TTL.services.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getAllSkills();
    }

    @GetMapping("/{id}")
    public Optional<Skill> getSkillById(@PathVariable String id) {
        return skillService.getSkillById(id);
    }

    @PostMapping
    public Skill createSkill(@RequestBody Skill skill) {
        return skillService.saveSkill(skill);
    }

    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable String id) {
        skillService.deleteSkill(id);
    }
}
