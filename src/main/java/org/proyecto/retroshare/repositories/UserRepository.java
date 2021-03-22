package org.proyecto.retroshare.repositories;

import org.proyecto.retroshare.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

	public User findByEmail(String email);
}
