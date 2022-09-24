package co.edu.icesi.zoowebpage.repository;

import co.edu.icesi.zoowebpage.model.Animal;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface AnimalRepository extends CrudRepository<Animal, UUID>{
    Optional<Animal> findByName(String name);
}
