/*package org.proyecto.retroshare.controller;

import java.util.List;

import org.proyecto.retroshare.domain.GameConsole;
import org.proyecto.retroshare.domain.Historial;
import org.proyecto.retroshare.domain.Product;
import org.proyecto.retroshare.domain.User;
import org.proyecto.retroshare.exception.ProductNotFoundException;
import org.proyecto.retroshare.repositories.HistorialRepository;
import org.proyecto.retroshare.repositories.ProductRepository;
import org.proyecto.retroshare.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	@GetMapping(value = "/h-all")
	public List<Historial> findAll() {
		return historialRepository.findAll();
	}

	// BUSCAR UN HISTORIAL
	@GetMapping(value = "/h-find/{id}")
	public Historial find(@PathVariable Long id) {
		return historialRepository.getOne(id);
	}

	// GUARDAR NUEVO USUARIO
	@PostMapping(value = "/h-save/{idUser}/{idProduct}")
	public ResponseEntity<Historial> save(@PathVariable Long idUser, @PathVariable Long idProduct) {

		Historial historial = new Historial();

		User user = userRepository.findById(idUser)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el usuario" + idUser));
		historial.setUser(user);
		user.setHistorial(historial);

		Product producto = productRepository.findById(idProduct)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el producto" + idProduct));
		historial.setProduct(producto);
		producto.setHistorial(historial);

		Historial obj = historialRepository.save(historial);
		return new ResponseEntity<Historial>(obj, HttpStatus.OK);
	}

	

}*/
