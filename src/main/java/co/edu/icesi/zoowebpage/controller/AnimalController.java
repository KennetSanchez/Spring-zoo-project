package co.edu.icesi.zoowebpage.controller;

import co.edu.icesi.zoowebpage.api.AnimalAPI;
import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.mapper.AnimalMapper;
import co.edu.icesi.zoowebpage.service.AnimalService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class AnimalController implements AnimalAPI {
    public final AnimalMapper animalMapper;
    public final AnimalService animalService;

    @Override
    public AnimalDTO getAnimal(String name){
        return animalMapper.fromAnimal(animalService.getAnimal(name));
    }

    @Override
    public AnimalDTO createAnimal(AnimalDTO animalDTO){
        return animalMapper.fromAnimal(animalService.createAnimal(animalMapper.fromDTO(animalDTO)));
    }

    @Override
    public List<AnimalDTO> getAnimals(){
        return animalService.getAnimals().stream().map(animalMapper::fromAnimal).collect(Collectors.toList());
    }
}
