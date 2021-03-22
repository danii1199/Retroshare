package org.proyecto.retroshare.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig  extends WebSecurityConfigurerAdapter{
	
	@Autowired
	private UserDetailsServiceImp userDetailsService;
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests().antMatchers("http://localhost:3000/","/auth/**","/public/**","/css/**","/js/**").permitAll().anyRequest().authenticated()
		
		.and()
			.formLogin().loginPage("http://localhost:3000/singup#").defaultSuccessUrl("http://localhost:3000/",true).failureUrl("/http://localhost:3000/singup#error=true")
			.loginProcessingUrl("http://localhost:3000/singup#").permitAll()
			.and()
			.logout().logoutUrl("/logout").logoutSuccessUrl("/");
	}
	

}
