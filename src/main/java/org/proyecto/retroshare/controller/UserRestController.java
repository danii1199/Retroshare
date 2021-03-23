package org.proyecto.retroshare.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.proyecto.retroshare.domain.Role;
import org.proyecto.retroshare.domain.User;
import org.proyecto.retroshare.repositories.RoleRepository;
import org.proyecto.retroshare.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sun.istack.NotNull;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/retroshare/")
public class UserRestController {

	// ENLACE BBDD
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	// CONSULTA DE TODOS LOS USUARIOS
	@GetMapping(value = "/all")
	public List<User> findAll() {
		return userRepository.findAll();
	}

	// BUSCAR UN USUARIO
	@GetMapping(value = "/find/{id}")
	public User find(@PathVariable Long id) {
		return userRepository.getOne(id);
	}

	// GUARDAR NUEVO USUARIO
	@PostMapping(value = "/save/{idRole}")
	public ResponseEntity<User> save(@RequestBody User user, @PathVariable Long idRole) {

		/* PASSWORD ENCRIPTADA */
		String pwd = user.getPassword();
		String pwdEncript = new BCryptPasswordEncoder().encode(pwd);
		user.setPassword(pwdEncript);
		
		

		Role role = roleRepository.findById(idRole)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el rol" + idRole));
		user.setRole(role);
		role.getUsers().add(user);
		User obj = userRepository.save(user);

		return new ResponseEntity<User>(obj, HttpStatus.OK);
	}
	

	// Actualizar un ususario
	@PostMapping(value = "update/{id}")
	public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user,@RequestPart(name="file",required = false) MultipartFile file) throws IOException {

		User userUpdate = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el usuario" + id));

		userUpdate.setFirstName(user.getFirstName());
		userUpdate.setLastName(user.getLastName());
		userUpdate.setUserName(user.getUserName());
		userUpdate.setPassword(user.getPassword());
		userUpdate.setSex(user.getSex());
		userUpdate.setAddress(user.getAddress());
		userUpdate.setZipCode(user.getZipCode());
		userUpdate.setCity(user.getCity());
		userUpdate.setCountry(user.getCountry());
		userUpdate.setPhoneNumber(user.getPhoneNumber());
		userUpdate.setEmail(user.getEmail());
		userUpdate.setAvatar(user.getAvatar());

		/* FOTO USUARIO */
		if (!file.isEmpty()) {
			String ruta = "\\src\\main\\resources\\static\\img\\users";
			Long contador = userRepository.count() + 1;
			try {
				byte[] bytes = file.getBytes();
				Path rutaAbsoluta = Paths.get(ruta + "//" + contador + "-" + user.getClass().getSimpleName() + "-"
						+ file.getOriginalFilename());
				Files.write(rutaAbsoluta, bytes);

				user.setAvatar(contador + "-" + user.getClass().getSimpleName() + "-" + file.getOriginalFilename());
			} catch (Exception e) {
				// TODO: handle exception
			}
		}
		User obj = userRepository.save(userUpdate);
		return new ResponseEntity<User>(obj, HttpStatus.OK);

	}

	// BORRAR UN USUARIO
	@GetMapping(value = "/delete/{id}")
	public ResponseEntity<User> delete(@PathVariable Long id) {
		User user = userRepository.getOne(id);
		if (user != null) {
			userRepository.delete(user);
		}

		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

}
