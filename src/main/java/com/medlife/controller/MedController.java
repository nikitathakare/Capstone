package com.medlife.controller;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medlife.entities.medicine;
import com.medlife.repo.MedRepo;
import com.medlife.service.MedService;

@RestController
@RequestMapping("/")
public class MedController {
	
	@Autowired
	private MedService medService;
	private MedRepo medRepo;
	
	@PostMapping("/add")
		public ResponseEntity<?> addMedicine(@RequestBody medicine med){
			medService.addProduct(med);
			
			return new ResponseEntity<>(HttpStatus.CREATED);
		}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?>deleteMedicine(@PathVariable int id){
		medService.deleteProduct(id);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/")
	public ResponseEntity<?> getAllMed(){
		List<medicine> med2=medService.getAll();
		return new ResponseEntity<List<medicine>>(med2, HttpStatus.OK);
	}
	
	@GetMapping("/med/{name}")
	public ResponseEntity<medicine> SearchMedicine(@PathVariable("name") String name){
		medicine e=medService.getByName(name);
		return ResponseEntity.ok(e);
	}
	
	@GetMapping("/med/filter")
	public ResponseEntity<?> getByLow(){
		List<medicine> med =medService.getAllByPriceDesc();
		return new ResponseEntity<List<medicine>>(med, HttpStatus.OK);
	}
	
	@PutMapping("med/update")
	public ResponseEntity<?> updateMedicine(@RequestBody medicine med){
		
			medService.updateDetails(med);
		
		
		 return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	
	
	
	
	

}
