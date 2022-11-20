import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import "./../sass/3-layout/_searchAnimalPage.scss"

export const SearchAnimal = () => {
    const params = useParams()
    let firstTime = true
    async function loadData() {
        let getAnimalUrl = "http://localhost:8080/animals/name/"
        let getSpecificAnimalUrl = (getAnimalUrl + params.name)
        let res = await fetch(getSpecificAnimalUrl)
        let response = await res.json()
        setAnimal(await response)
    } 

    const [animal, setAnimal] : any [] = React.useState()

    useEffect(()=>{
        if(firstTime){
            loadData()
            firstTime = false
        }
        }
    )

    return (
        <div className="searchAnimalWrapper">
            {animal?.map((animal:any)=>(
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
