package com.medlife.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medlife.entities.User;
import com.medlife.entities.medicine;

public interface MedRepo extends JpaRepository<medicine, Integer> {
	medicine findById(int Id);
	medicine findByName(String name);
}
