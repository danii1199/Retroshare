package org.proyecto.retroshare.controller;

import java.util.List;

import org.proyecto.retroshare.domain.Game;
import org.proyecto.retroshare.domain.Product;
import org.proyecto.retroshare.domain.ProductStatus;
import org.proyecto.retroshare.domain.ShoppingCart;
import org.proyecto.retroshare.domain.User;
import org.proyecto.retroshare.repositories.ProductRepository;
import org.proyecto.retroshare.repositories.ProductStatusRepository;
import org.proyecto.retroshare.repositories.ShoppingCartRepository;
import org.proyecto.retroshare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/retroshare/")
public class ShoppingCartRestController {

	// ENLACE BBDD
	@Autowired
	private ShoppingCartRepository shoppingCartRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;

	// Consulta el historial del carrito
	@GetMapping(value = "/sc-all")
	public List<ShoppingCart> findAll() {
		return shoppingCartRepository.findAll();
	}

	// Guardar un estado
	@PostMapping(value = "/sc-save/{idUser}")
	public ResponseEntity<ShoppingCart> save(@RequestBody ShoppingCart shoppingCart, @PathVariable Long idUser) {
		User user = userRepository.getOne(idUser);
		shoppingCart.setUser(user);


		ShoppingCart obj = shoppingCartRepository.save(shoppingCart);

		return new ResponseEntity<ShoppingCart>(obj, HttpStatus.OK);
	}

	// Actualizar un juego
		@PostMapping(value = "sc-update/{idUser}")
		public ResponseEntity<ShoppingCart> update(@PathVariable Long id, @RequestBody ShoppingCart shoppingCart) {

			ShoppingCart shoppingcartupdate = shoppingCartRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("No existe el carrtio" + id));

			shoppingcartupdate.setProducts(shoppingCart.getProducts());

			ShoppingCart obj = shoppingCartRepository.save(shoppingcartupdate);
			return new ResponseEntity<ShoppingCart>(obj, HttpStatus.OK);

		}
}
