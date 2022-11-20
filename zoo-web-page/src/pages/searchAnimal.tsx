import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
import "./../sass/3-layout/_searchAnimalPage.scss"

export const SearchAnimal = () => {
    const params = useParams()

    async function loadData() {
        let getAnimalUrl = "http://localhost:8080/animals/name/"
        let getSpecifycAnimalUrl = (getAnimalUrl + params.animalName)
        let res = await fetch(getSpecifycAnimalUrl)
        let response = await res.json()
        setAnimal(await response)
    }


    const [animal, setAnimal] : any [] = React.useState()

    return (
        <div className="searchAnimalWrapper">
            {animal?.map((animal:any)=>(
                <Card sx={{ width: 280 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg"
                        alt="Cute RTL" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {animal.name}
                        </Typography>
                        <p>Id: {animal.id}</p>
                        {animal.fatherId != undefined ? <p>Mother id: {animal.fatherId}</p> : <p>Father id: unknown</p>}
                        {animal.motherId != undefined ? <p>Mother id: {animal.motherId}</p> : <p>Mother id: unknown</p>}
                        <p>Name: {animal.name}</p>
                        <p>Age: {animal.age} months</p>
                        <p>Weight: {animal.weight} g </p>
                        <p>Height: {animal.height} cm</p>
                    </CardContent>
                </CardActionArea>
            </Card>
            ))}
            <button onClick={loadData}></button>
        </div>
    )
}

export default { SearchAnimal }
