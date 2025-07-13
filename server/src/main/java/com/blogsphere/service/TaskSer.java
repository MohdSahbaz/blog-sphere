package com.blogsphere.service;

import com.blogsphere.model.Blog;
import com.blogsphere.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskSer {
    @Autowired
    private TaskRepo taskRepo;

    // Create blog
    public Blog createTask(Blog blog){
        return taskRepo.save(blog);
    }

    // Get tasks of user
    public List<Blog> getUserTasks(String username){
        return taskRepo.findAllByUser_Username(username);
    }
}
