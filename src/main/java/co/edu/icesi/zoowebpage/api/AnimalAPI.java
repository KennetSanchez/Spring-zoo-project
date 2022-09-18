package co.edu.icesi.zoowebpage.api;

import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/animals")
public interface AnimalAPI {

    @GetMapping("/{name}")
    public AnimalDTO getAnimal(@PathVariable String name);

    @PostMapping()
    public AnimalDTO createAnimal(@RequestBody AnimalDTO animalDTO);

    @GetMapping
    public List<AnimalDTO> getAnimals();
}
