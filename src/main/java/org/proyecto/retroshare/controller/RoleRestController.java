package org.proyecto.retroshare.controller;

import java.util.List;

import org.proyecto.retroshare.domain.Role;
import org.proyecto.retroshare.repositories.RoleRepository;
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
public class RoleRestController {

	// ENLACE BBDD
	@Autowired
	private RoleRepository roleRepository;

	// CONSULTA DE TODOS LOS USUARIOS
	@GetMapping(value = "/r-all")
	public List<Role> findAll() {
		return roleRepository.findAll();
	}

	// BUSCAR UN USUARIO
	@GetMapping(value = "/r-find/{id}")
	public Role find(@PathVariable Long id) {
		return roleRepository.getOne(id);
	}

	// GUARDAR NUEVO USUARIO
	@PostMapping(value = "/r-save")
	public ResponseEntity<Role> save(@RequestBody Role role) {
		Role obj = roleRepository.save(role);

		return new ResponseEntity<Role>(obj, HttpStatus.OK);
	}

	// BORRAR UN USUARIO
	@GetMapping(value = "/r-delete/{id}")
	public ResponseEntity<Role> delete(@PathVariable Long id) {
		Role role = roleRepository.getOne(id);
		if (role != null) {
			roleRepository.delete(role);
		}

		return new ResponseEntity<Role>(role, HttpStatus.OK);
	}

}
