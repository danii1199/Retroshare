package org.proyecto.retroshare.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Historial {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonIgnoreProperties(value = { "user", "hibernateLazyInitializer" }, allowSetters = true)
	@OneToOne(cascade = CascadeType.PERSIST, optional = true)
	private User user;
	
	

	@JsonIgnore
	@OneToOne(cascade = CascadeType.PERSIST, optional = true)
	private Product product;



	public Historial() {
		super();
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public Product getProduct() {
		return product;
	}



	public void setProduct(Product product) {
		this.product = product;
	}



	
	
	
	
}
