package org.proyecto.retroshare.repositories;

import org.proyecto.retroshare.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,Long> {

	@Query("FROM User WHERE email=:email")
	User findByEmail(@Param("email") String email);
	
	@Query("FROM User WHERE name=:name")
	User findByName(@Param("name") String name);
	
	@Query("FROM User WHERE userName=:userName")
	User findByUserName(@Param("userName") String userName);
}
