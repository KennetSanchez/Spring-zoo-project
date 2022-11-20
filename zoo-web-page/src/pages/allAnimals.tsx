import "./../sass/3-layout/_searchAnimalPage.scss"
import animalWithoutParents from "../types/animals"
import animalWithoutanimals from "../types/animals"

export const AllAnimals = () => {

    const urlGet = "http://localhost:8080/animals"

    const data = []

    async function getAnimals(){
        let res = await fetch(urlGet)
        let response = await res.json()

        response.forEach((element: any) => {
            console.log(element)
        });
    }

    
    return (
        <div className="allAnimalsWrapper">
            <button className="buttons" onClick={getAnimals}>Get all animals</button>
        </div>
    )
}

export default { AllAnimals }
