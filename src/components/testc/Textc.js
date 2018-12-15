import React, { useState, useEffect } from "react";

const Textc = ({ selectValue }) => {
  //Here selectValue is coming ok....
  console.log("selectValue: " + selectValue);

  //Init value with selectValue coming from Select onChange. Looks like doesn't work
  //If I initialize value with any static string or number, it works. I can see value in text box. But not from props.
  let [value, setValue] = useState(selectValue);
  //Here value is not updated in state
  console.log("stateValue: " + value);

  useEffect(
    () => {
      setValue(selectValue);
    },
    [selectValue],
  );
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
