package co.edu.icesi.zoowebpage.service;

import co.edu.icesi.zoowebpage.constant.AnimalConstantTests;
import co.edu.icesi.zoowebpage.error.exception.AnimalException;
import co.edu.icesi.zoowebpage.model.Animal;
import co.edu.icesi.zoowebpage.repository.AnimalRepository;
import co.edu.icesi.zoowebpage.service.impl.AnimalServiceImpl;
import lombok.SneakyThrows;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class AnimalServiceTest{
    private AnimalRepository animalRepo;
    private AnimalServiceImpl animalService;
    private final AnimalConstantTests testsConstants = new AnimalConstantTests();

    private Animal motherAnimal;
    private Animal fatherAnimal;

    private String sex, name;
    private float weight, height, age;
    private LocalDateTime arrivalDate;

    private final UUID ANIMAL_ID = testsConstants.RTL_TEST_ID;
    private final UUID FATHER_ID = testsConstants.RTL_FATHER_TEST_ID;
    private final UUID MOTHER_ID = testsConstants.RTL_MOTHER_TEST_ID;

    private Animal animal, father, mother;

    @BeforeEach
    public void init() {
        animalRepo = mock(AnimalRepository.class);
        animalService = new AnimalServiceImpl(animalRepo);
    }

    private void setupScene1(){
        name = testsConstants.RTL_VALID_NAME1;
        sex = "M";
        weight = testsConstants.RTL_VALID_WEIGHT;
        height = testsConstants.RTL_VALID_HEIGHT;
        age = testsConstants.RTL_VALID_AGE;
        arrivalDate = testsConstants.ARRIVAL_VALID_DATE;
        animal = new Animal(ANIMAL_ID, null, null, name, sex, weight, age, height, arrivalDate);
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
        father = new Animal(FATHER_ID, null, null, FATHER_NAME, FATHER_SEX, weight, age, height, arrivalDate);

        String MOTHER_NAME = "Lemur Mom";
        String MOTHER_SEX = "F";
        mother = new Animal(MOTHER_ID, null, null, MOTHER_NAME, MOTHER_SEX, weight, age, height, arrivalDate);

        animal = new Animal(ANIMAL_ID, FATHER_ID, MOTHER_ID, name, sex, weight, age, height, arrivalDate);
    }

    @Test
    public void getsExistingAnimalUsingId(){
        setupScene1();
        try{
            animalService.getAnimalUsingId(animal.getId());
            verify(animalRepo, times(1)).findById(animal.getId());
        }catch (AnimalException ae){
            fail();
        }

    }

    @Test
    public void cantGetNotExistingAnimalUsingId(){
        try{
            animal = animalService.getAnimalUsingId(animal.getId());
            fail();
        }catch (Exception ae){
            assertNull(animal);
        }
    }

    @Test
    public void searchByName(){
        setupScene1();
       try{
           //This throws an exceptions since the repository it's a mock and can't save the data
           animalService.getAnimalUsingName(animal.getName());
       }catch (AnimalException ae){
           verify(animalRepo, times(1)).findAll();
       }

    }

    @Test
    public void cantGetNotExistingAnimalUsingName(){
        try{
            animal = animalService.getAnimalUsingId(animal.getId());
            fail();
        }catch (Exception ae){
            assertNull(animal);
        }
    }
    @Test
    public void createsAnimalWithoutParents(){
        setupScene1();

        try{
            animalService.createAnimal(animal);
            verify(animalRepo, times(1)).save(animal);
        }catch (Exception ae){
            fail();
        }
    }

    @Test
    public void createsAnimalWithParents(){
        setupScene2();

        try{
            animalService.createAnimal(animal);
            verify(animalRepo, times(1)).save(any());
        }catch (Exception ae){
            fail();
        }
    }



}