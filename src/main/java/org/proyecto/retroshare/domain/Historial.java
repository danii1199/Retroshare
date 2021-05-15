package org.proyecto.retroshare.domain;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Historial {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonIgnoreProperties(value = { "user", "hibernateLazyInitializer" }, allowSetters = true)
	@OneToOne(cascade = CascadeType.PERSIST, optional = true)
	private User user;
	
	

	@JsonIgnoreProperties(value = "products", allowSetters = true)
	@OneToMany(mappedBy = "historial", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
	private Collection<Product> products;



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



	public Collection<Product> getProducts() {
		return products;
	}



	public void setProducts(Collection<Product> products) {
		this.products = products;
	}
	
	
	
}
