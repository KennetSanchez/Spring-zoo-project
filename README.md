
# Zoo spring service

This project allows the zoo to register and search different ring tailed lemurs from their database.

The project includes validations to assure the integrity of the data. 


## Data information

* The format of the date is "yyyy- MM- dd hh-mm-ss", the program crash if the format isn't fulfilled

* The height should be in centimeters 

* The weight should be in grams

* The age should be in years


## How to use it?

* The service root is on localhost:8081/animals

* To get all the animals use a get request in the root: localhost:8081/animals

* To get an animal and it's parents information if it has, use a get request and replace the "{name} for the actual name of the animal you want to search in:
localhost:8081/animals/name/{name}

* To get an animal information, use a get request and replace the "{id} for the actual id of the animal you want to search in:
localhost:8081/animals/id/{id}

* To register a new animal without any parent, make a post request and go to localhost:8081/animals/createAnimalNoParents 

###### And fill the information with json format. The Json should contain {name, weight, height,  age, arrivalDate}

* To register a new animal with any parent, make a post request and go to localhost:8081/animals/createAnimalWithParents 

###### And fill the information with json format. The Json should contain {name, fatherId, motherId, weight, height,  age, arrivalDate}, but the fatherId and motherId aren't mandatory 
 
