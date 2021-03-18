package org.proyecto.retroshare.repositories;

import org.proyecto.retroshare.domain.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long>{

}
