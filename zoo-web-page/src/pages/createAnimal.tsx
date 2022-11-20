import "./../sass/3-layout/_creationPage.scss"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { TextField } from "@mui/material";
import React from "react";

export const CreateAnimal = () => {

    const minAge = 0, maxAge = 32;
    const minHeight = 28.9, maxHeight = 103.5;
    const minWeight = 72.14, maxWeight =  2900;

    const nameInputId = "nameInput"
    const ageInputId = "ageInput"
    const sexMaleInputId = "inputSexMale"
    const sexFemaleInputId = "inputSexFemale"
    const weightInputId = "weightInput"
    const heightInputId = "heightInput"

    var animalName: string, animalAge: number, animalSex: string, animalWeight: number, animalHeight: number
    var validAnimal: boolean
    let lettersRegex = new RegExp("(?=[^a-zA-Z ])")

    const urlCreateAnimal = "http://localhost:8080/animals/createAnimalNoParents"

    function getAnimalJson(): Object {
        //This characters are being removed since there are no necessary and cause conflicts with the api.
        let formattedDate = arrivalDate.$d.toISOString().replace('Z','').replace('.000', '')
        let jsonString = 
        {
            name : animalName,
            sex : animalSex,
            age : animalAge,
            weight : animalWeight,
            height : animalHeight,
            arrivalDate: formattedDate
        }
        

        return jsonString
    }

    function updateData() {

        animalName = getInputElement(nameInputId).value
        animalAge = getInputElement(ageInputId).valueAsNumber
        animalHeight = getInputElement(weightInputId).valueAsNumber
        animalWeight = getInputElement(heightInputId).valueAsNumber

        let isMale = getInputElement(sexMaleInputId).checked

        animalSex = ""
        isMale == true ? animalSex = "M" : animalSex = "F"

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

    async function createAnimal() {

        updateData()

        if (validAnimal) {
            let jsonAnimal = getAnimalJson()

            let res = await fetch(urlCreateAnimal, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonAnimal)
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))
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
                    <input type="text" id={nameInputId} className="input" onChange={() => validateNameInput(`${nameInputId}`)} />
                    <br />

                    <p className="inputLabel">Sex: </p>

                    <section id="sexWrapper">
                        <input type="radio" name="sex" id={sexMaleInputId} value="Male" defaultChecked />
                        <label className="inputLabel" htmlFor={sexMaleInputId}>Male</label>

                        <input type="radio" name="sex" id={sexFemaleInputId} value="Female" placeholder="Female" />
                        <label className="inputLabel" htmlFor={sexFemaleInputId}>Female</label>
                    </section>

                    <br />
                    <p className="inputLabel">Arrival date: </p>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDateTimePicker disableFuture={true} renderInput={props => <TextField {...props} />} ampm={false} onChange = {handleChange} value = {arrivalDate} />
                    </LocalizationProvider>
                    <br />

                    <br />
                    <p className="inputLabel">Age (months): </p>
                    <input type="number" id={ageInputId} className="input" onChange={() => validateRangeInput(`${ageInputId}`, minAge, maxAge)} />
                    <br />


                    <p className="inputLabel">Weight(cm): </p>
                    <input type="number" id={weightInputId} className="input" onChange={() => validateRangeInput(`${weightInputId}`, minWeight, maxWeight)} />

                    <br />

                    <br />
                    <p className="inputLabel">Height(cm): </p>
                    <input type="number" id={heightInputId} className="input" onChange={() => validateRangeInput(`${heightInputId}`, minHeight, maxHeight)} />

                    <br />

                    <button id="btn_createAnimal" className="buttons" onClick={createAnimal}>Create animal</button>

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
