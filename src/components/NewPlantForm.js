import React, {useState} from "react";

function NewPlantForm({setPlants}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: 0,
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newPlant => setPlants((plants) => [...plants, newPlant]))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formData.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formData.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button onChange={(e) => setFormData(e.target.value)} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
