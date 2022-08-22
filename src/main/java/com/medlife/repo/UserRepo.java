package com.medlife.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medlife.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {

	User findByuserId(int userId);

	User findByuserName(String userName);

}
