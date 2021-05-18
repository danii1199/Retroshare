package org.proyecto.retroshare.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtTokenProvider tokenProvider;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.authorizeRequests()
				.antMatchers("/retroshare/pr-buy/{id}/{userId}","/retroshare/h-save/{idUser}/{idProduct}",
						"/retroshare/update/{id}", "/retroshare/pr-update/{id}/{idUser}", "/retroshare/pr-all",
						"/retroshare/login", "/retroshare/save/2", "/retroshare/v-all", "/retroshare/g-all",
						"/retroshare/gc-all", "/retroshare/rp-all", "/retroshare/pr/{id}",
						"/retroshare/sc-save/{idUser}", "/retroshare/sc-update/{idUser}", "/retroshare/delete/{idUser}",
						"/retroshare/init")
				.permitAll().antMatchers("/retroshare/all").hasRole("ADMIN")
				.antMatchers("/retroshare/delete/{idProduct}").hasRole("USER").anyRequest().authenticated();
		http.apply(new JwtTokenConfigurer(tokenProvider));
	}

}