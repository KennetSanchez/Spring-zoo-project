import "./../sass/3-layout/_allAnimalsPage.scss"
import { Card, CardContent, CardMedia, CardActionArea, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export const AllAnimals = () => {

    const urlGet = "http://localhost:8080/animals"
    const urlSpecificAnimal = "http://localhost:3000/animals/name/"


    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAnimals = () => {
        fetch(urlGet)
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
        <div className="allAnimalsWrapper">
            <section id="cardSection">
                {
                    animals.map((animal: any) => (
                        <Card key={animal.id} sx={{ width: 280 }}>
                            <CardActionArea href={urlSpecificAnimal + animal.name} >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/1/adorable-ring-tailed-lemur-clinging-to-a-vine-dejavu-designs.jpg"
                                    alt="ring tailed lemur" />
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
        </div>
    )
}

export default { AllAnimals }
