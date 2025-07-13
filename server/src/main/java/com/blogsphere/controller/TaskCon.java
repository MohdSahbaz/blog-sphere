package com.blogsphere.controller;

import com.blogsphere.model.Blog;
import com.blogsphere.model.User;
import com.blogsphere.repo.UserRepo;
import com.blogsphere.service.TaskSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "*")
public class TaskCon {
    @Autowired
    private TaskSer taskSer;

    @Autowired
    private UserRepo userRepo;

    // Create blog
    @PostMapping("/create-blog")
    public ResponseEntity<?> createTask(@RequestBody Blog blog, Authentication authentication){
        try{
            String username = authentication.getName();
            User user = userRepo.findByUsername(username).orElseThrow();

            blog.setUser(user);
            Blog savedBlog = taskSer.createTask(blog);
            return ResponseEntity.ok(savedBlog);

        }catch (Exception e){
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("DUE TO INTERNAL SERVER ERROR, TASK CREATION FAILED");
        }
    }
}
