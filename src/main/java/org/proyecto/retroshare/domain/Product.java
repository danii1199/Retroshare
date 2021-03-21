package org.proyecto.retroshare.domain;

import java.sql.Blob;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Inheritance(strategy = InheritanceType.JOINED)
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String description;
	private Blob imagen;

	@JsonIgnoreProperties(value = { "products", "hibernateLazyInitializer" }, allowSetters = true)
	@JoinColumn(name = "user_id")
	@ManyToOne(cascade = CascadeType.PERSIST, optional = true)
	private User user;
	
	@JsonIgnoreProperties(value = { "products", "hibernateLazyInitializer" }, allowSetters = true)
	@JoinColumn(name = "productStatus_id")
	@ManyToOne(cascade = CascadeType.PERSIST, optional = true)
	private ProductStatus productStatus;



	public Product(String description, Blob imagen) {
		super();
		this.description = description;
		this.imagen = imagen;
	}

	public Product() {
		super();
	}

	public Blob getImagen() {  
		return imagen;
	}

	public void setImagen(Blob imagen) {
		this.imagen = imagen;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public ProductStatus getProductStatus() {
		return productStatus;
	}

	public void setProductStatus(ProductStatus productStatus) {
		this.productStatus = productStatus;
	}

}
