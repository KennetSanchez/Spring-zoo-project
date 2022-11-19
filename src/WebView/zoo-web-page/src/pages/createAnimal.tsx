import "./../sass/3-layout/_creationPage.scss"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { TextField } from "@mui/material";
import React from "react";

export const CreateAnimal = () => {

    const minAge = 12, maxAge = 14;
    const minHeight = 130, maxHeight = 1300;
    const minWeight = 130, maxWeight = 1300;

    const nameInputId = "nameInput"
    const ageInputId = "ageInput"
    const sexMaleInputId = "inputSexMale"
    const sexFemaleInputId = "inputSexFemale"
    const weightInputId = "weightInput"
    const heightInputId = "heightInput"

    var animalName: string, animalAge: number, animalSex: string, animalWeight: number, animalHeight: number
    var validAnimal: boolean
    let lettersRegex = new RegExp("(?=[^a-zA-Z ])")

    function getAnimalJson(): String {
        let jsonString = `
            {
                "name": "${animalName}",
                "age": "${animalAge}",
                "sex": "${animalSex}",
                "weight": ${animalWeight},
                "height": ${animalHeight},
                "arrivalDate" : ${arrivalDate}
            }
        `

        const json = JSON.parse(jsonString)
        return json
    }

    function updateData() {

        animalName = getInputElement(nameInputId).value
        animalAge = getInputElement(ageInputId).valueAsNumber
        animalHeight = getInputElement(weightInputId).valueAsNumber
        animalWeight = getInputElement(heightInputId).valueAsNumber

        let isMale = getInputElement(sexMaleInputId).checked

        animalSex = ""
        isMale == true ? animalSex = "Male" : animalSex = "Female"

        validateConstraints()
    }

    function validateConstraints() {
        validAnimal = true

        if (lettersRegex.test(animalName) || animalName == "") {
            validAnimal = false
        } else if (Number.isNaN(animalAge) || animalAge < minAge || animalAge > maxAge) {
            validAnimal = false
        } else if (Number.isNaN(animalHeight) || animalHeight < minHeight || animalHeight > maxHeight) {
            validAnimal = false
        } else if (Number.isNaN(animalWeight) || animalWeight < minWeight || animalWeight > maxWeight) {
            validAnimal = false
        }


    }

    function updateInputClass(id: string, valid: boolean) {
        if (valid) {
            getInputElement(id)?.setAttribute("class", "input input__input-approved")
        } else {
            getInputElement(id)?.setAttribute("class", "input input__input-denied")
        }

    }

    function createAnimal() {
        updateData()

        if (validAnimal) {
            let jsonAnimal = getAnimalJson()
            console.log(jsonAnimal)
        } else {
            alert("Invalid data")
        }

    }

    function getInputElement(id: string): HTMLInputElement {
        let element = document.getElementById(id) as HTMLInputElement
        return element
    }

    function validateNameInput(id: string) {
        let text = getInputElement(id).value
        let valid = !lettersRegex.test(text)

        updateInputClass(id, valid)
    }

    function validateRangeInput(id: string, minValue: number, maxValue: number) {
        let value = getInputElement(id).valueAsNumber
        let valid = (value >= minValue && value <= maxValue) ? true : false

        updateInputClass(id, valid)
    }

    const dayjs = require('dayjs')
    const [arrivalDate, setArrivalDate] = React.useState(dayjs('2003-03-18T00:00:00'));

    const handleChange = (newDate: any) => {
      setArrivalDate(newDate);
    };

    return (
        <div className="createAnimalWrapper">
            <section id="inputWrapper">
                <section id="inputSection">
                    <br />
                    <p className="inputLabel">Name: </p>
                    <input type="text" id="nameInput" className="input" onChange={() => validateNameInput("nameInput")} />
                    <br />

                    <p className="inputLabel">Sex: </p>

                    <section id="sexWrapper">
                        <input type="radio" name="sex" id="inputSexMale" value="Male" defaultChecked />
                        <label className="inputLabel" htmlFor="inputSexMale">Male</label>

                        <input type="radio" name="sex" id="inputSexFemale" value="Female" placeholder="Female" />
                        <label className="inputLabel" htmlFor="inputSexFemale">Female</label>
                    </section>

                    <br />
                    <p className="inputLabel">Arrival date: </p>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker disableFuture = {true} renderInput ={props => <TextField {...props} />} onChange={handleChange} value={arrivalDate} />
                    </LocalizationProvider>
                    <br />

                    <br />
                    <p className="inputLabel">Age (months): </p>
                    <input type="number" id="ageInput" className="input" onChange={() => validateRangeInput("ageInput", minAge, maxAge)} />
                    <br />


                    <p className="inputLabel">Weight(cm): </p>
                    <input type="number" id="weightInput" className="input" onChange={() => validateRangeInput("weightInput", minWeight, maxWeight)} />

                    <br />

                    <br />
                    <p className="inputLabel">Height(cm): </p>
                    <input type="number" id="heightInput" className="input" onChange={() => validateRangeInput("heightInput", minHeight, maxHeight)} />

                    <br />

                    <button id="btn_createAnimal" className = "buttons" onClick={createAnimal}>Create animal</button>

                </section>
                <section id="inputDecoration">
                    <div id="imageWrapper">
                        <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg" alt="Papu mimido" />
                    </div>
                </section>
            </section>
        </div>
    )
}
