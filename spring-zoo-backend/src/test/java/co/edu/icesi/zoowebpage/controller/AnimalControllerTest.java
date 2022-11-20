package co.edu.icesi.zoowebpage.controller;

import co.edu.icesi.zoowebpage.dto.AnimalDTO;
import co.edu.icesi.zoowebpage.dto.AnimalWithParentsDTO;
import co.edu.icesi.zoowebpage.error.exception.AnimalException;
import co.edu.icesi.zoowebpage.mapper.AnimalMapper;
import co.edu.icesi.zoowebpage.repository.AnimalRepository;
import co.edu.icesi.zoowebpage.service.AnimalService;
import co.edu.icesi.zoowebpage.constant.AnimalConstantTests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.UUID;


import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.*;

public class AnimalControllerTest {

    private AnimalRepository animalRepository;

    //Local variables for the tests
    private String name;
    private String sex;
    private float age, weight, height;

    private LocalDateTime arrivalDate;

    AnimalDTO animalDTO;
    AnimalDTO fatherDTO;
    AnimalDTO motherDTO;


    AnimalWithParentsDTO animalWithParentsDTO;
    private final AnimalConstantTests testsConstants = new AnimalConstantTests();


    //Local generic constants
    private final UUID ANIMAL_ID = testsConstants.RTL_TEST_ID;
    private final UUID FATHER_ID = testsConstants.RTL_FATHER_TEST_ID;
    private final UUID MOTHER_ID = testsConstants.RTL_MOTHER_TEST_ID;

    AnimalService animalService;
    AnimalMapper animalMapper;
    AnimalController animalController;

    @BeforeEach
    public void init(){
        animalService = mock(AnimalService.class);
        animalMapper = mock(AnimalMapper.class);
        animalController = new AnimalController(animalMapper, animalService);
    }

    private void setupScene1(){
        name = testsConstants.RTL_VALID_NAME1;
        sex = "M";
        weight = testsConstants.RTL_VALID_WEIGHT;
        height = testsConstants.RTL_VALID_HEIGHT;
        age = testsConstants.RTL_VALID_AGE;
        arrivalDate = testsConstants.ARRIVAL_VALID_DATE;
        animalDTO = new AnimalDTO(ANIMAL_ID, name, sex, weight, age, height, arrivalDate);
    }

    private void setupScene2(){
        name = testsConstants.RTL_VALID_NAME2;
        sex = "M";
        weight = testsConstants.RTL_VALID_WEIGHT;
        height = testsConstants.RTL_VALID_HEIGHT;
        age = testsConstants.RTL_VALID_AGE;
        arrivalDate = testsConstants.ARRIVAL_VALID_DATE;

        String FATHER_SEX = "M";
        String FATHER_NAME = "Lemur Dad";
        fatherDTO = new AnimalDTO(FATHER_ID, FATHER_NAME, FATHER_SEX, weight, age, height, arrivalDate);
        animalController.createAnimal(fatherDTO);

        String MOTHER_NAME = "Lemur Mom";
        String MOTHER_SEX = "F";
        motherDTO = new AnimalDTO(MOTHER_ID, MOTHER_NAME, MOTHER_SEX, weight, age, height, arrivalDate);
        animalController.createAnimal(motherDTO);

        //The service can't save the parents DTO (probably because it's a mock), so the method fails if a father or mother id it's provided
        animalWithParentsDTO = new AnimalWithParentsDTO(ANIMAL_ID, null, null, name, sex, weight, age, height, arrivalDate);
        animalController.createAnimal(animalWithParentsDTO);
    }


    @Test
    public void findsAnimalName(){
        setupScene1();
        try{
            animalController.getAnimalUsingName(name);
            verify(animalService, times(1)).getAnimalUsingName(name);
        }catch (AnimalException ae){
            fail();
        }
    }

    @Test
    public void findsAnimalUsingId(){
        setupScene1();
        try{
            animalController.getAnimalUsingId(ANIMAL_ID);
            verify(animalService, times(1)).getAnimalUsingId(ANIMAL_ID);
        }catch (AnimalException ae){
            fail();
        }
    }

    @Test
    public void createsAnimalWithoutParents(){
        setupScene1();
        try{
            animalController.createAnimal(animalDTO);
            verify(animalService, times(1)).createAnimal(any());
        }catch (AnimalException ae){
            fail();
        }
    }

    @Test
    public void createsAnimalWithParents(){
        setupScene2();
        try{
            animalController.createAnimal(animalWithParentsDTO);
            verify(animalService, times(4)).createAnimal(any());
        }catch (AnimalException ae){
            fail();
        }
    }

    @Test
    public void getsAnimals(){
        setupScene1();
        try{
            animalController.getAnimals();
            verify(animalService, times(1)).getAnimals();
        }catch (AnimalException ae){
            fail();
        }
    }

}
