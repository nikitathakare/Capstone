package com.medlife.service;

import java.util.List;

import com.medlife.entities.medicine;

public interface MedService {
	List<medicine> getAll();
	public medicine getByName(String med);
	//public List<medicine> getAllByPriceDesc(double pri);
	List<medicine> getAllByPriceDesc();
	public void addProduct(medicine med);
	public void deleteProduct(int id);
	public medicine updateDetails(medicine med);
}
