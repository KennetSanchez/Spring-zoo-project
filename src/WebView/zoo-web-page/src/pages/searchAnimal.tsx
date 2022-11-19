import "./../sass/3-layout/_creationPage.scss"

export const CreateAnimal = () => {
    
    var valid = true
    function validateCharacters(id: string){
        let element = document.getElementById(id)
        

        if(valid){
            element?.setAttribute("className", "input input-approved")
        }else{
            element?.setAttribute("className", "input input-denied")

        }
        valid = !valid
    }
    
    return (
        <div className="createAnimalWrapper">
            <section id="inputWrapper">
                <section id="inputSection">
                    <br />
                    <p className="inputLabel">Name: </p>
                    <input type="text" id="nameInput" className="input" onChange = {()=>validateCharacters("nameInput")}/>
                    <br />

                    <br />
                    <p className="inputLabel">Age (months): </p>
                    <input type="number" id="ageInput" className="input" />
                    <br />

                    <p className="inputLabel">Sex: </p>

                    <section id="sexWrapper">
                        <input type="radio" name="sex" id="inputSexMale" value="Male" checked />
                        <label className="inputLabel" htmlFor="inputSexMale">Male</label>

                        <input type="radio" name="sex" id="inputSexFemale" value="Female" placeholder="Female" />
                        <label className="inputLabel" htmlFor="inputSexFemale">Female</label>
                    </section>

                    <br />
                    <p className="inputLabel">Weight(cm): </p>
                    <input type="number" id="weightInput" className="input"/>

                    <br />

                    <br />
                    <p className="inputLabel">Height(cm): </p>
                    <input type="number" id="heightInput" className="input"/>
                   
                    <br />

                </section>
                <section id="inputDecoration">
                    <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg" alt="Papu mimido" />
                </section>
            </section>
        </div>
    )
}

export default { CreateAnimal }
