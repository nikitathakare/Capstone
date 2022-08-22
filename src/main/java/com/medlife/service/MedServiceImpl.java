package com.medlife.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.medlife.entities.medicine;
import com.medlife.repo.MedRepo;

@Service
@Transactional
public class MedServiceImpl implements MedService{
	
	@Autowired
	private MedRepo medRepo;

	@Override
	public List<medicine> getAll() {
		return medRepo.findAll();
	}

	@Override
	public medicine getByName(String med) {
		medicine med1 = medRepo.findByName(med);
		return med1;
	}
	@Override
	public List<medicine> getAllByPriceDesc() {
		return medRepo.findAll(Sort.by(Sort.Order.asc("price")));
	}

	@Override
	public void addProduct(medicine med) {
		// TODO Auto-generated method stub
		medRepo.save(med);
	}

	@Override
	public void deleteProduct(int id) {
		// TODO Auto-generated method stub
		medRepo.deleteById(id);
		
	}

	@Override
	public medicine updateDetails(medicine med) {
		
		return medRepo.save(med);
	}

	///update product 
	
	

}
