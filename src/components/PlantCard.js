import React, {useState} from "react";

function PlantCard({name, image, price}) {

  const [isStocked, setStock] = useState(true)

  function stockHandler(){
    setStock(!isStocked)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStocked ? (
        <button onClick={stockHandler} className="primary">In Stock</button>
      ) : (
        <button onClick={stockHandler}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
