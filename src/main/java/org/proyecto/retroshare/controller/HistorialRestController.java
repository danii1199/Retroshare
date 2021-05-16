package org.proyecto.retroshare.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.proyecto.retroshare.domain.Game;
import org.proyecto.retroshare.domain.Historial;
import org.proyecto.retroshare.domain.Product;
import org.proyecto.retroshare.domain.Role;
import org.proyecto.retroshare.domain.User;
import org.proyecto.retroshare.repositories.HistorialRepository;
import org.proyecto.retroshare.repositories.ProductRepository;
import org.proyecto.retroshare.repositories.RoleRepository;
import org.proyecto.retroshare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.security.authentication.AuthenticationManager;
import org.proyecto.retroshare.config.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/retroshare/")
public class HistorialRestController {
	
	private static Logger log = LoggerFactory.getLogger(HistorialRestController.class);
	// ENLACE BBDD
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private HistorialRepository historialRepository;
	

	// CONSULTA DE TODOS LOS USUARIOS
	@GetMapping(value = "h-all")
	public List<User> findAll() {
		return userRepository.findAll();
	}

	// BUSCAR UN USUARIO
	@GetMapping(value = "/h-find/{id}")
	public User find(@PathVariable Long id) {
		return userRepository.getOne(id);
	}

	// GUARDAR NUEVO USUARIO
	@PostMapping(value = "/h-save/{idUser}")
	public ResponseEntity<Historial> save(@RequestBody Product product, @PathVariable Long idUser) {

	Historial historial= new Historial();
	

		User user = userRepository.findById(idUser)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el usuario" + idUser));
		historial.setUser(user);
		user.setHistorial(historial);
		
		Product producto=productRepository.getOne(product.getId());
		//historial.getProducts().add(producto);
		producto.setHistorial(historial);
		

		Historial obj = historialRepository.save(historial);
		return new ResponseEntity<Historial>(obj, HttpStatus.OK);
	}

	
	// GUARDAR NUEVO USUARIO
		@PostMapping(value = "/h-update/{idHistorial}")
		public ResponseEntity<Historial> update(@RequestBody Product product, @PathVariable Long idHistorial) {
			Historial historialUpdate = historialRepository.findById(idHistorial)
					.orElseThrow(() -> new ResourceNotFoundException("No existe el historial" + idHistorial));
			
			Product producto=productRepository.getOne(product.getId());
			historialUpdate.getProducts().add(producto);
			producto.setHistorial(historialUpdate);
			

			Historial obj = historialRepository.save(historialUpdate);
			return new ResponseEntity<Historial>(obj, HttpStatus.OK);
		}

}
