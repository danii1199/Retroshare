package org.proyecto.retroshare.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Chat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String message;
	
	@JsonIgnoreProperties(value = { "products", "hibernateLazyInitializer" }, allowSetters = true)
	@JoinColumn(name = "userOwner_id")
	@ManyToOne( optional = true)
	private User userOwner;
	
	@JsonIgnoreProperties(value = { "products", "hibernateLazyInitializer" }, allowSetters = true)
	@JoinColumn(name = "userBuyer_id")
	@ManyToOne(optional = true)
	private User userBuyer;

	public Chat() {
		super();
	}

	public Chat(String message) {
		super();
		this.message = message;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public User getUserOwner() {
		return userOwner;
	}

	public void setUserOwner(User userOwner) {
		this.userOwner = userOwner;
	}

	public User getUserBuyer() {
		return userBuyer;
	}

	public void setUserBuyer(User userBuyer) {
		this.userBuyer = userBuyer;
	}
	
	

}
