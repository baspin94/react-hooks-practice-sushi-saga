import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useState, useEffect } from "react";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(50)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setSushi(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushis={sushi} money={money} setMoney={setMoney} plates={plates} setPlates={setPlates}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
