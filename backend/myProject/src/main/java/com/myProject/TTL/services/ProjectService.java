package com.myProject.TTL.services;

import com.myProject.TTL.model.Project;
import com.myProject.TTL.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }




    public Optional<Project> getProjectById(String id) {
        return projectRepository.findById(id);
    }



    public void deleteProject(String id) {
        projectRepository.deleteById(id);
    }
}
