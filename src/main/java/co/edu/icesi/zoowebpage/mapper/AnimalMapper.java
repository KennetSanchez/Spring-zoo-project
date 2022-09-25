package co.edu.icesi.zoowebpage.mapper;

import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.dto.AnimalWithParentsDTO;
import co.edu.icesi.zoowebpage.model.Animal;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnimalMapper {


        Animal fromDTO(AnimalDTO animalDTO);
        AnimalDTO fromAnimal(Animal animal);
        Animal fromDTOWithParents(AnimalWithParentsDTO animalDTO);
        AnimalWithParentsDTO fromAnimalWithParents(Animal animal);
}

