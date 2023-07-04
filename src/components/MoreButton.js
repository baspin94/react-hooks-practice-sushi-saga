import React from "react";

function MoreButton({start, setStart}) {
  function handleMore() {
    setStart(start + 4)
  }

  return <button onClick={handleMore}>More sushi!</button>;
}

export default MoreButton;
