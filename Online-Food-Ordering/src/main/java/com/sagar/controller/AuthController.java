package com.sagar.controller;

import com.sagar.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // Tells Spring that this class will handle HTTP requests and return JSON or other data directly in the response body.
@RequestMapping("/auth")
// Sets the base URL path for all endpoints in this controller. Any method inside this class will be accessible under /auth/....

public class AuthController {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
}
