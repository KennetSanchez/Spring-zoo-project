package co.edu.icesi.zoowebpage.api;

import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.dto.AnimalWithParentsDTO;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("/animals")
@CrossOrigin(origins ="http://localhost:3000")
public interface AnimalAPI {

    @GetMapping("/name/{name}")
    List<AnimalDTO> getAnimalUsingName(@PathVariable String name);

    @GetMapping("/id/{id}")
    AnimalDTO getAnimalUsingId(@PathVariable UUID id);

    @PostMapping("/createAnimalNoParents")
    AnimalDTO createAnimal(@RequestBody @Valid AnimalDTO animalDTO);

    @PostMapping("/createAnimalWithParents")
    AnimalWithParentsDTO createAnimal(@RequestBody @Valid AnimalWithParentsDTO animalDTO);

    @GetMapping
    List<AnimalDTO> getAnimals();
}
