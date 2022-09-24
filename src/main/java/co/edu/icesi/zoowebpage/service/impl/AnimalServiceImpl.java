package co.edu.icesi.zoowebpage.service.impl;

import co.edu.icesi.zoowebpage.model.Animal;
import co.edu.icesi.zoowebpage.repository.AnimalRepository;
import co.edu.icesi.zoowebpage.service.AnimalService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@AllArgsConstructor
@Service
public class AnimalServiceImpl implements AnimalService {


    public final AnimalRepository animalRepository;

    @Override
    public Animal getAnimalUsingName(String name){
        return animalRepository.findByName(name).orElse(null);
    }

    @Override
    public Animal getAnimalUsingId(UUID id){
        return animalRepository.findById(id).orElse(null);
    }
    @Override
    public Animal createAnimal(Animal animalDTO){
        return animalRepository.save(animalDTO);
    }

    @Override
    public List<Animal> getAnimals(){
        return StreamSupport.stream(animalRepository.findAll().spliterator(), false).collect(Collectors.toList());
    }
}
