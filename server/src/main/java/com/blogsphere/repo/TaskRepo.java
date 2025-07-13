package com.blogsphere.repo;

import com.blogsphere.model.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface TaskRepo extends MongoRepository<Blog, String> {
    List<Blog> findAllByUser_Username(String username);
}
