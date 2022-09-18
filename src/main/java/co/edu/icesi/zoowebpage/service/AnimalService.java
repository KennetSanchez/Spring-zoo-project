package co.edu.icesi.zoowebpage.service;

import co.edu.icesi.zoowebpage.model.Animal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface AnimalService {

    public Animal getAnimal(@PathVariable String name);

    public Animal createAnimal(@RequestBody Animal animalDTO);

    public List<Animal> getAnimals();
}
