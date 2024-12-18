package com.myProject.TTL.services;

import com.myProject.TTL.model.User;
import com.myProject.TTL.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user); // Save user during signup
    }

    public Optional<User> findUserByUsername(String username) {
        return userRepository.findByUsername(username); // Find user by username
    }
    
    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public List<User> getUsersByKeyword(String keyword) {
        return userRepository.findByKeywordsContaining(keyword);
    }

    public User updateUser(User user) {
        Optional<User> existingUserOpt = userRepository.findById(user.getId());
        if (existingUserOpt.isPresent()) {
            User existingUser = existingUserOpt.get();
            
            // Update fields
            if (user.getUsername() != null) {
                existingUser.setUsername(user.getUsername());
            }
            if (user.getEmail() != null) {
                existingUser.setEmail(user.getEmail());
            }
            if (user.getPassword() != null) {
                existingUser.setPassword(user.getPassword());
            }
            if (user.getBio() != null) {
                existingUser.setBio(user.getBio());
            }
            if (user.getDomains() != null) {
                existingUser.setDomains(user.getDomains());
            }
            if (user.getSkills() != null) {
                existingUser.setSkills(user.getSkills());
            }
            if (user.getResumeLink() != null) {
                existingUser.setResumeLink(user.getResumeLink());
            }
            System.out.println("Incoming profile photo: " + user.getProfilePhoto());
            if (user.getProfilePhoto() != null) {
                existingUser.setProfilePhoto(user.getProfilePhoto());
            }
            existingUser.setMentor(user.isMentor()); // Boolean fields default to false if not set

            // Save updated user
            return userRepository.save(existingUser);
        } else {
            throw new RuntimeException("User not found with ID: " + user.getId());
        }
    }
}
