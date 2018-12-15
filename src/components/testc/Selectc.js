import React, { useState } from "react";
import Textc from "./Textc";

const Selectc = () => {
  let [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <select onChange={handleOnChange}>
        <option>Ira</option>
        <option>Artem</option>
        <option>Antoshka</option>
      </select>
      <Textc value={value} />
    </div>
  );
};

export default Selectc;
