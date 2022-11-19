import "./../sass/3-layout/_creationPage.scss"

export const CreateAnimal = () => {
    
    const minAge = 12, maxAge = 14;
    const minHeight = 130, maxHeight = 1300;
    const minWeight = 130, maxWeight = 1300;

    function validateName(id: string){
        let element = document.getElementById(id) as HTMLInputElement

        let text = element?.value
        let valid = !new RegExp("(?=[^a-zA-Z ])").test(text)
        

        if(valid){
            element?.setAttribute("class", "input input__input-approved")
        }else{
            element?.setAttribute("class", "input input__input-denied")
        }
    }

    function validateRange(id: string, minValue: number, maxValue: number){
        let element = document.getElementById(id) as HTMLInputElement
        let value = element?.valueAsNumber
        let valid = (value >= minValue && value <= maxValue)? true : false


        if(valid){
            element?.setAttribute("class", "input input__input-approved")
        }else{
            element?.setAttribute("class", "input input__input-denied")
        }
    }
    
    return (
        <div className="createAnimalWrapper">
            <section id="inputWrapper">
                <section id="inputSection">
                    <br />
                    <p className="inputLabel">Name: </p>
                    <input type="text" id="nameInput" className="input" onChange = {()=>validateName("nameInput")}/>
                    <br />

                    <br />
                    <p className="inputLabel">Age (months): </p>
                    <input type="number" id="ageInput" className="input" onChange = {()=>validateRange("ageInput", minAge, maxAge)}/>
                    <br />

                    <p className="inputLabel">Sex: </p>

                    <section id="sexWrapper">
                        <input type="radio" name="sex" id="inputSexMale" value="Male" defaultChecked />
                        <label className="inputLabel" htmlFor="inputSexMale">Male</label>

                        <input type="radio" name="sex" id="inputSexFemale" value="Female" placeholder="Female" />
                        <label className="inputLabel" htmlFor="inputSexFemale">Female</label>
                    </section>

                    <br />
                    <p className="inputLabel">Weight(cm): </p>
                    <input type="number" id="weightInput" className="input"  onChange = {()=>validateRange("weightInput", minWeight, maxWeight)}/>

                    <br />

                    <br />
                    <p className="inputLabel">Height(cm): </p>
                    <input type="number" id="heightInput" className="input" onChange = {()=>validateRange("heightInput", minHeight, maxHeight)}/>
                   
                    <br />

                    <button id="btn_createAnimal">Create animal</button>

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

export default { CreateAnimal }
