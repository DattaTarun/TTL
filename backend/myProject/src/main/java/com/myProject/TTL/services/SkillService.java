package com.myProject.TTL.services;

import com.myProject.TTL.model.Skill;
import com.myProject.TTL.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Skill saveSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public Optional<Skill> getSkillById(String id) {
        return skillRepository.findById(id);
    }

    public void deleteSkill(String id) {
        skillRepository.deleteById(id);
    }
}
