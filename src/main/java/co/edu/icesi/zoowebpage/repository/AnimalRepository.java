package co.edu.icesi.zoowebpage.repository;

import co.edu.icesi.zoowebpage.model.Animal;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface AnimalRepository extends CrudRepository<Animal, String>{}
