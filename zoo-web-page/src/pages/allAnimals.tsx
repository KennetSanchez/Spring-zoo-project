import "./../sass/3-layout/_allAnimalsPage.scss"
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material"
import React from "react"

export const AllAnimals = () => {

    const urlGet = "http://localhost:8080/animals"
    const urlSpecificAnimal = "http://localhost:3000/animals/name/"


    const [data, setData]: any[] = React.useState([])

    async function getAnimals() {
        console.log("Entra")
        let res = await fetch(urlGet)
        setData(await res.json())
    }


    return (
        <div className="allAnimalsWrapper">
            <section id="cardSection">
                {
                    data.map((animal: any) => (
                        <Card key={animal.id} sx={{ width: 280 }}>
                            <CardActionArea href={urlSpecificAnimal + animal.name} >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg"
                                    alt="green iguana" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {animal.name}
                                    </Typography>
                                    <p>Id: {animal.id}</p>
                                    <p>Name: {animal.name}</p>
                                    <p>Age: {animal.age}</p>
                                    <p>Weight: {animal.weight}</p>
                                    <p>Height: {animal.height}</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
            </section>
            <button className="buttons" onClick={getAnimals}>Get all animals</button>
        </div>
    )
}

export default { AllAnimals }
