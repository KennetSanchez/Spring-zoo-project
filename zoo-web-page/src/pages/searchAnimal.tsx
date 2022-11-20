import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./../sass/3-layout/_searchAnimalPage.scss"

export const SearchAnimal = () => {
    const params = useParams()
    const urlSearch = "http://localhost:8080/animals/name/"

    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAnimals = () => {
        fetch(urlSearch + params.name)
            .then((res) => res.json())
            .then(data => {
                setAnimals(data);
                setLoading(false);
            })
    }

    useEffect(() => {
        setLoading(true);
        getAnimals();
    }, []);

    return (
        <div className="searchAnimalWrapper">
            {animals?.map((animal: any) => (
                <Card key={animal.id} sx={{ width: 280 }}>
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
                            {animal.fatherId+"" != "undefined" ? <p>Father id: (animal.fatherId + "")</p> : <p>Father id: "Not registered"</p>}
                            {animal.motherId+"" != "undefined" ? <p>Mother id: (animal.motherId + "")</p> : <p>Mother id: "Not registered"</p>}
                            <p>Name: {animal.name}</p>
                            <p>Age: {animal.age} months</p>
                            <p>Weight: {animal.weight} g </p>
                            <p>Height: {animal.height} cm</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
}
