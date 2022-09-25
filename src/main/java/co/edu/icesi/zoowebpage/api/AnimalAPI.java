package co.edu.icesi.zoowebpage.api;

import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.dto.AnimalWithParentsDTO;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("/animals")
public interface AnimalAPI {

    @GetMapping("/name/{name}")
    public List<AnimalDTO> getAnimalUsingName(@PathVariable String name);

    @GetMapping("/id/{id}")
    public AnimalDTO getAnimalUsingId(@PathVariable UUID id);
    @PostMapping("/createAnimalNoParents")
    public AnimalDTO createAnimal(@RequestBody @Valid AnimalDTO animalDTO);

    @PostMapping("/createAnimalWithParents")
    public AnimalWithParentsDTO createAnimal(@RequestBody @Valid AnimalWithParentsDTO animalDTO);

    @GetMapping
    public List<AnimalDTO> getAnimals();
}
