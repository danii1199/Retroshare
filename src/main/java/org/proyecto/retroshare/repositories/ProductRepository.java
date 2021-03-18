package org.proyecto.retroshare.repositories;

import org.proyecto.retroshare.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
