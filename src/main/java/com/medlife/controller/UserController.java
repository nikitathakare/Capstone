package com.medlife.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.medlife.entities.User;
import com.medlife.entities.medicine;
import com.medlife.repo.UserRepo;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("/get")
	public ResponseEntity<?> getll(@RequestBody User user ){
		System.out.println(user);
		User u =userRepo.findByuserName(user.getUserName());
		if(u.getPassword().contentEquals(user.getPassword())) {
			return ResponseEntity.ok(u);
		}
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

}
