package co.edu.icesi.zoowebpage.service;

import co.edu.icesi.zoowebpage.model.Animal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.UUID;

public interface AnimalService {

    public List<Animal> getAnimalUsingName(@PathVariable String name);
    public Animal getAnimalUsingId(@PathVariable UUID id);

    public Animal createAnimal(@RequestBody Animal animalDTO);

    public List<Animal> getAnimals();
}
