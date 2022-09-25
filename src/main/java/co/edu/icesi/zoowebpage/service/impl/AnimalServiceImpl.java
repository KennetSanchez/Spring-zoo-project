package co.edu.icesi.zoowebpage.service.impl;

import co.edu.icesi.zoowebpage.constant.AnimalErrorCode;
import co.edu.icesi.zoowebpage.error.exception.AnimalError;
import co.edu.icesi.zoowebpage.error.exception.AnimalException;
import co.edu.icesi.zoowebpage.model.Animal;
import co.edu.icesi.zoowebpage.repository.AnimalRepository;
import co.edu.icesi.zoowebpage.service.AnimalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static co.edu.icesi.zoowebpage.constant.AnimalErrorCode.CODE_01;
import static co.edu.icesi.zoowebpage.constant.AnimalErrorCode.CODE_11;

@AllArgsConstructor
@Service
public class AnimalServiceImpl implements AnimalService {


    public final AnimalRepository animalRepository;

    @Override
    public List<Animal> getAnimalUsingName(String name){
        List<Animal> animals = new ArrayList<>();
        Animal animal = getAnimalByName(name);
        if(animal == null){
            throw new AnimalException(HttpStatus.NOT_FOUND, new AnimalError(CODE_11, CODE_11.getMessage()));
        }

        animals.add(animal);
        if(animal.getFatherId() != null){
            animals.add(getAnimalUsingId(animal.getFatherId()));
        }else if(animal.getMotherId() != null){
            animals.add(getAnimalUsingId(animal.getMotherId()));
        }
        return animals;
    }

    private Animal getAnimalByName(String animalName) {
        return getAnimals().stream().peek(System.out::println).
                filter(animal -> animal.getName().equalsIgnoreCase(animalName)).findFirst().orElse(null);
    }
    @Override
    public Animal getAnimalUsingId(UUID id){
        return animalRepository.findById(id).orElse(null);
    }
    @Override
    public Animal createAnimal(Animal animalDTO){
        List<Animal> animals = getAnimals();
        for (Animal x : animals){
            if (x.getName().equals(animalDTO.getName())){
                throw new AnimalException(HttpStatus.CONFLICT, new AnimalError(AnimalErrorCode.CODE_12,AnimalErrorCode.CODE_12.getMessage()));
            }
        }

        return animalRepository.save(animalDTO);
    }

    @Override
    public List<Animal> getAnimals(){
        return StreamSupport.stream(animalRepository.findAll().spliterator(), false).collect(Collectors.toList());
    }
}
