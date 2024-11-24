package com.myProject.TTL.services;

import com.myProject.TTL.model.Community;
import com.myProject.TTL.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityService {

    @Autowired
    private CommunityRepository communityRepository;

    public List<Community> getAllCommunities() {
        return communityRepository.findAll();
    }

    public Optional<Community> getCommunityById(String id) {
        return communityRepository.findById(id);
    }

    public Community saveCommunity(Community community) {
        return communityRepository.save(community);
    }

    public void deleteCommunity(String id) {
        communityRepository.deleteById(id);
    }
}
