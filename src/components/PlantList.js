import React, {useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  return (
    <ul className="cards">{
      plants.map(plant => {
      return <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
      })}</ul>
  );
}

export default PlantList;
