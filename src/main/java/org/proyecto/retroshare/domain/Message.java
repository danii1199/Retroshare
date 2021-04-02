package org.proyecto.retroshare.domain;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String text;
	@JsonFormat(pattern ="dd-MM-YYYY",shape = Shape.STRING)
	private Date message_date;
	
	
	
	@JsonIgnoreProperties(value = "messages", allowSetters = true)
	@JoinColumn(name = "conversation_id")
	@ManyToOne(cascade = CascadeType.PERSIST, optional = true)
	private Conversation conversation;
	
	
	public Message(String text, Date message_date) {
		super();
		this.text = text;
		this.message_date = message_date;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}


	public Date getMessage_date() {
		return message_date;
	}


	public void setMessage_date(Date message_date) {
		this.message_date = message_date;
	}


	public Conversation getConversation() {
		return conversation;
	}


	public void setConversation(Conversation conversation) {
		this.conversation = conversation;
	}
	
	
	

}
