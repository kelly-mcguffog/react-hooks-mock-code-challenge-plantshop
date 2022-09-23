import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  const filterPlants = plants.filter(plant => {
      return plant.name.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={filterPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
