package org.proyecto.retroshare.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

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
public class AnonimoRestController2 {

	@GetMapping(value = "/")
	void index(HttpServletResponse response) throws IOException {
	    response.sendRedirect("http://localhost:3000/");
	  
	}
	
	@GetMapping(value = "/users")
	void users(HttpServletResponse response) throws IOException {
	    response.sendRedirect("http://localhost:3000/users");
	  
	}
	
	
	
	
	

}
