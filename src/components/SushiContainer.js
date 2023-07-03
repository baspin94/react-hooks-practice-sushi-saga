import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import { useState, useEffect } from "react";

function SushiContainer({sushis, money, setMoney, plates, setPlates}) {
  const [start, setStart] = useState(0)
  const [displaySushi, setDisplaySushi] = useState([])
  
  useEffect(() => {
    setDisplaySushi(sushis.slice(start, start+4))
  }, [start, sushis])

  const sushiCards = displaySushi.map(sushi => {
    return <Sushi key={sushi.id} details={sushi} money={money} setMoney={setMoney} plates={plates} setPlates={setPlates}/>
  })

  return (
    <div className="belt">
      {sushiCards}
      <MoreButton start={start} setStart={setStart}/>
    </div>
  );
}

export default SushiContainer;
