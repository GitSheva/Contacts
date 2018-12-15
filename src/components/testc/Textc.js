import React, { useState } from "react";

const Textc = props => {
  console.log("Props.value: " + props.value);
  let d = props.value;
  console.log("D value: " + d);
  let [value, setValue] = useState(d);

  console.log("State value: " + value);

  const handleOnClick = event => {
    alert(value);
    event.preventDefault();
  };

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <input type="text" value={value} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Alert</button>
    </>
  );
};

export default Textc;
