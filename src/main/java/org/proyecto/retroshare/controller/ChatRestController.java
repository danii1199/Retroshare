package org.proyecto.retroshare.controller;

import java.util.Calendar;
import java.util.List;

import org.proyecto.retroshare.domain.Chat;
import org.proyecto.retroshare.domain.User;
import org.proyecto.retroshare.repositories.ChatRepository;
import org.proyecto.retroshare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/retroshare/")
public class ChatRestController {

	// ENLACE BBDD
	@Autowired
	private ChatRepository chatRepository;
	@Autowired
	private UserRepository userRepository;

	// CONSULTA DE TODOS LOS USUARIOS
	@GetMapping(value = "/chat-all")
	public List<Chat> findAll() {
		return chatRepository.findAll();
	}

	// BUSCAR UN USUARIO
	@GetMapping(value = "/chat-find/{id}")
	public Chat find(@PathVariable Long id) {
		return chatRepository.getOne(id);
	}

	// GUARDAR NUEVO MENSAJE
	@PostMapping(value = "/chat-save/{idUserSend}/{idUserReciber}")
	public ResponseEntity<Chat> save(@RequestBody Chat chat, @PathVariable Long idUserSend,
			@PathVariable Long idUserReciber) {

		Calendar fecha = Calendar.getInstance();
		chat.setDate(fecha);
		chat.setLeido(false);
		User user = userRepository.getOne(idUserSend);

		chat.setUserSend(user);

		user.getMessageSender().add(chat);

		User user2 = userRepository.getOne(idUserReciber);

		chat.setUserReciber(user2);
		user2.getMessageReciber().add(chat);

		Chat obj = chatRepository.save(chat);

		return new ResponseEntity<Chat>(obj, HttpStatus.OK);
	}

	// LEER UN MENSAJE
	@PostMapping(value = "/chat-read/{idUserSend}")
	public ResponseEntity<Chat> update(@PathVariable Long idUserSend) {

		List<Chat> establecerLeido = chatRepository.findAll();

		for (Chat chatLeido : establecerLeido) {

			if ((chatLeido.getUserSend().getId() == idUserSend)) {

				chatLeido.setLeido(true);

				//Chat estaLeido = chatRepository.save(chatLeido);
				

			}

		}

		return new ResponseEntity<Chat>(HttpStatus.OK);
	}

}
