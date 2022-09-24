package co.edu.icesi.zoowebpage.mapper;

import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.model.Animal;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-24T00:43:15-0500",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 18.0.2.1 (Oracle Corporation)"
)
@Component
public class AnimalMapperImpl implements AnimalMapper {

    @Override
    public Animal fromDTO(AnimalDTO animalDTO) {
        if ( animalDTO == null ) {
            return null;
        }

        Animal.AnimalBuilder animal = Animal.builder();

        animal.id( animalDTO.getId() );
        animal.fatherId( animalDTO.getFatherId() );
        animal.motherId( animalDTO.getMotherId() );
        animal.name( animalDTO.getName() );
        animal.sex( animalDTO.getSex() );
        animal.weight( animalDTO.getWeight() );
        animal.age( animalDTO.getAge() );
        animal.height( animalDTO.getHeight() );
        animal.arrivalDate( animalDTO.getArrivalDate() );

        return animal.build();
    }

    @Override
    public AnimalDTO fromAnimal(Animal animal) {
        if ( animal == null ) {
            return null;
        }

        AnimalDTO animalDTO = new AnimalDTO();

        animalDTO.setId( animal.getId() );
        animalDTO.setFatherId( animal.getFatherId() );
        animalDTO.setMotherId( animal.getMotherId() );
        animalDTO.setName( animal.getName() );
        animalDTO.setSex( animal.getSex() );
        animalDTO.setWeight( animal.getWeight() );
        animalDTO.setAge( animal.getAge() );
        animalDTO.setHeight( animal.getHeight() );
        animalDTO.setArrivalDate( animal.getArrivalDate() );

        return animalDTO;
    }
}
