import "./../sass/3-layout/_creationPage.scss"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { TextField } from "@mui/material";
import React from "react";

export const CreateAnimal = () => {

    const minAge = 0, maxAge = 32;
    const minHeight = 28.9, maxHeight = 103.5;
    const minWeight = 72.14, maxWeight = 2900;

    const nameInputId = "nameInput"
    const ageInputId = "ageInput"
    const sexMaleInputId = "inputSexMale"
    const sexFemaleInputId = "inputSexFemale"
    const weightInputId = "weightInput"
    const heightInputId = "heightInput"
    const fatherInputId = "fatherInput"
    const motherInputId = "motherInput"

    const lettersRegex = new RegExp("(?=[^a-zA-Z ])")
    const uuidRegex = new RegExp("[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}")

    const urlCreateAnimalWithParents = "http://localhost:8080/animals/createAnimalWithParents"
    const urlCreateAnimalWithoutParents = "http://localhost:8080/animals/createAnimalNoParents"

    var animalName: string, animalAge: number, animalSex: string, animalWeight: number, animalHeight: number, fatherId: string, motherId: string
    var validAnimal: boolean
    var hasFamilyAtTheZoo: boolean

    let urlValidateParent = "http://localhost:8080/animals/id/"
    let validFather = true, validMother = true

    let alertMsg = ""

    function getAnimalJson(): Object {
        //This characters are being removed since there are no necessary and cause conflicts with the api.
        let formattedDate = arrivalDate.$d.toISOString().replace('Z', '').replace('.000', '')
        let jsonString

        console.log(hasFamilyAtTheZoo)
        if (hasFamilyAtTheZoo) {
            jsonString =
            {
                name: animalName,
                fatherId: fatherId,
                motherId: motherId,
                sex: animalSex,
                age: animalAge,
                weight: animalWeight,
                height: animalHeight,
                arrivalDate: formattedDate
            }
        } else {
            jsonString =
            {
                name: animalName,
                sex: animalSex,
                age: animalAge,
                weight: animalWeight,
                height: animalHeight,
                arrivalDate: formattedDate
            }
        }


        return jsonString
    }

    function updateData() {

        animalName = getInputElement(nameInputId).value
        fatherId = getInputElement(fatherInputId).value
        motherId = getInputElement(motherInputId).value
        animalAge = getInputElement(ageInputId).valueAsNumber
        animalHeight = getInputElement(heightInputId).valueAsNumber
        animalWeight = getInputElement(weightInputId).valueAsNumber

        if(fatherId != "" || motherId != ""){
            hasFamilyAtTheZoo = true
        }

        let isMale = getInputElement(sexMaleInputId).checked

        animalSex = ""
        isMale == true ? animalSex = "M" : animalSex = "F"

        validateConstraints()
    }

    function validateConstraints() {
        validAnimal = true

        if (lettersRegex.test(animalName) || animalName == "") {
            alertMsg = "The name doesn't fulfill the expected pattern"
            validAnimal = false
        } else if (Number.isNaN(animalAge) || animalAge < minAge || animalAge > maxAge) {
            alertMsg = "The age is under or above the boundaries"
            validAnimal = false
        } else if (Number.isNaN(animalHeight) || animalHeight < minHeight || animalHeight > maxHeight) {
            alertMsg = "The height is under or above the boundaries"
            validAnimal = false
        } else if (Number.isNaN(animalWeight) || animalWeight < minWeight || animalWeight > maxWeight) {
            alertMsg = "The weight is under or above the boundaries"
            validAnimal = false
        } else if (!uuidRegex.test(fatherId) && fatherId != "") {
            alertMsg = "The father id doesn't fulfill the expected uuid pattern"
            validAnimal = false
        } else if (!uuidRegex.test(motherId) && motherId != "") {
            alertMsg = "The mother id doesn't fulfill the expected uuid pattern"
            validAnimal = false
        } else if (fatherId == motherId && fatherId != "") {
            alertMsg = "The father shouldn't be the mother too"
            validAnimal = false
        } else if (!validFather) {
            alertMsg = "The father must be registered at the zoo with sex 'M'"
            validAnimal = false
        } else if (!validMother) {
            alertMsg = "The mother must be registered at the zoo with sex 'F'"
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
        let url

        if (hasFamilyAtTheZoo) {
            url = urlCreateAnimalWithParents
            validateParent(true, fatherId)
            validateParent(false, motherId)
        } else {
            url = urlCreateAnimalWithoutParents
        }

        updateData()


        if (validAnimal) {
            let jsonAnimal = getAnimalJson()

            let res = await fetch(url, {
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
            alert(alertMsg)
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

    async function validateParent(father: boolean, parentId: string) {
        if (parentId != "") {
            let res = await fetch(urlValidateParent + parentId)
            let response = await res.json().then(response => {
                switch (father) {
                    case true: {
                        if (response.sex == ("M" || "m")) {
                            validAnimal = true
                        } else {
                            validFather = false
                            validAnimal = false
                        }
                        break;
                    }
                    case false: {
                        if (response.sex == ("F" || "f")) {
                            validMother = true
                        } else {
                            validMother = false
                            validAnimal = false
                        }
                        break;
                    }
                }
            }
            )
        }else{
            father ? validFather = true : validMother = true
        }
    }

    function validateUUID(id: string) {
        let text = getInputElement(id).value
        let valid: boolean

        if (text == "") {
            valid = true
        } else if (uuidRegex.test(text)) {
            valid = true
            hasFamilyAtTheZoo = true
        } else {
            valid = false
        }
        console.log(valid)
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
                    <p className="inputLabel">Name:  </p>
                    <input type="text" id={nameInputId} className="input" onChange={() => validateNameInput(`${nameInputId}`)} />
                    <br />

                    <p id="fatherIdP" className="inputLabel">Father id (optional): </p>
                    <input type="text" id={fatherInputId} className="input" onChange={() => validateUUID(`${fatherInputId}`)} />
                    <br />

                    <p className="inputLabel">Mother id (optional): </p>
                    <input type="text" id={motherInputId} className="input" onChange={() => validateUUID(`${motherInputId}`)} />
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
                        <DesktopDateTimePicker disableFuture={true} renderInput={props => <TextField {...props} />} ampm={false} onChange={handleChange} value={arrivalDate} />
                    </LocalizationProvider>
                    <br />

                    <br />
                    <p className="inputLabel">Age (months): </p>
                    <input type="number" id={ageInputId} className="input" onChange={() => validateRangeInput(`${ageInputId}`, minAge, maxAge)} />
                    <br />


                    <p className="inputLabel">Weight(g): </p>
                    <input type="number" id={weightInputId} className="input" onChange={() => validateRangeInput(`${weightInputId}`, minWeight, maxWeight)} />

                    <br />

                    <br />
                    <p className="inputLabel">Height(cm): </p>
                    <input type="number" id={heightInputId} className="input" onChange={() => validateRangeInput(`${heightInputId}`, minHeight, maxHeight)} />

                    <br />


                </section>
                <section id="inputDecoration">
                    <div id="imageWrapper">
                        <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg" alt="Papu mimido" />
                    </div>
                    <p id='boundariesP'>The current boundaries are: </p>
                    <ul id='boundariesUl'>
                        <li>Age: {minAge} - {maxAge} months</li>
                        <li>Weight: {minWeight} - {maxWeight} g</li>
                        <li>Height: {minHeight} - {maxHeight} cm</li>
                    </ul>
                </section>
                <button id="btn_createAnimal" className="buttons" onClick={createAnimal}>Create animal</button>
            </section>
        </div>
    )
}
