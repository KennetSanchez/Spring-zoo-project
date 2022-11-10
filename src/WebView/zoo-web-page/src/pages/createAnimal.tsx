import "./../sass/3-layout/_creationPage.scss"

export const CreateAnimal = () => {
    return (
        <div className="createAnimalWrapper">
            <section id="inputWrapper">
                <section id="inputSection">
                    <input type="text" id="nameInput" />
                    <input type="" id="ageInput" />

                    <br />
                    <input type="radio" name="sex" id="inputSexMale" value="Male" checked />
                    <label htmlFor="inputSexMale">Male</label>
                    <br />

                    <input type="radio" name="sex" id="inputSexFemale" value="Female" placeholder="Female" />
                    <label htmlFor="inputSexFemale">Female</label>
                    <br />


                    <input type="number" id="weightInput" />
                    <input type="number" id="heightInput" />

                </section>
                <section id="inputDecoration">
                    <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg" alt="Papu mimido" />
                </section>
            </section>
        </div>
    )
}

export default { CreateAnimal }
