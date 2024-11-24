// CommunityRepository.java
package com.myProject.TTL.repository;
import com.myProject.TTL.model.Community;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CommunityRepository extends MongoRepository<Community, String> {
}
