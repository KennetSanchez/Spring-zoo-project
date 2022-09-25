package co.edu.icesi.zoowebpage.controller;

import co.edu.icesi.zoowebpage.api.AnimalAPI;
import co.edu.icesi.zoowebpage.constant.AnimalErrorCode;
import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.dto.AnimalWithParentsDTO;
import co.edu.icesi.zoowebpage.error.exception.AnimalError;
import co.edu.icesi.zoowebpage.error.exception.AnimalException;
import co.edu.icesi.zoowebpage.mapper.AnimalMapper;
import co.edu.icesi.zoowebpage.service.AnimalService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class AnimalController implements AnimalAPI {
    public final AnimalMapper animalMapper;
    public final AnimalService animalService;



    @Override
    public List<AnimalDTO> getAnimalUsingName(String name) {
        return animalService.getAnimalUsingName(name).stream().map(animalMapper::fromAnimal).collect(Collectors.toList());
    }

    @Override
    public AnimalDTO getAnimalUsingId(UUID id){
        return animalMapper.fromAnimal(animalService.getAnimalUsingId(id));
    }

    @Override
    public AnimalDTO createAnimal(@Valid AnimalDTO animalDTO){
            return animalMapper.fromAnimal(animalService.createAnimal(animalMapper.fromDTO(animalDTO)));
    }


    @Override
    public AnimalWithParentsDTO createAnimal(@Valid AnimalWithParentsDTO animalDTO) {
        return animalMapper.fromAnimalWithParents(animalService.createAnimal(animalMapper.fromDTOWithParents(animalDTO)));

    }

    @Override
    public List<AnimalDTO> getAnimals(){
        return animalService.getAnimals().stream().map(animalMapper::fromAnimal).collect(Collectors.toList());
    }
}
