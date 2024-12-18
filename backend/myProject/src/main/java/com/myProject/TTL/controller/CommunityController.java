package com.myProject.TTL.controller;

import com.myProject.TTL.model.Community;
import com.myProject.TTL.services.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/communities")
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    @GetMapping
    public List<Community> getAllCommunities() {
        return communityService.getAllCommunities();
    }

    @GetMapping("/{id}")
    public Optional<Community> getCommunityById(@PathVariable String id) {
        return communityService.getCommunityById(id);
    }

    @PostMapping
    public Community createCommunity(@RequestBody Community community) {
        return communityService.saveCommunity(community);
    }

    @DeleteMapping("/{id}")
    public void deleteCommunity(@PathVariable String id) {
        communityService.deleteCommunity(id);
    }
   
}
