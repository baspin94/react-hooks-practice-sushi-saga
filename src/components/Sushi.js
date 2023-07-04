import React from "react";
import { useState } from "react";

function Sushi({details, money, setMoney, plates, setPlates}) {
  const [isEaten, setIsEaten] = useState(false)

  function handleEat() {

    if (money -  details.price >= 0) {
      setIsEaten(true)
      setMoney(money - details.price)
      setPlates([...plates, details.name])
    }
    
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {isEaten ? null : (
          <img
            src={details.img_url}
            alt={details.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {details.name} - ${details.price}
      </h4>
    </div>
  );
}

export default Sushi;
