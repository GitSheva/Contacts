import React, { useState, useEffect } from "react";

const Textc = ({ selectValue }) => {
  let [value, setValue] = useState(selectValue);

  useEffect(() => {
    setValue(selectValue);
  }, [selectValue]);

  const handleOnClick = event => {
    alert(value);
    event.preventDefault();
  };

  const handleOnChange = event => {
    setValue(event.target.value);
    //added comment for testing
  };

  return (
    <>
      <input type="text" value={value} onChange={handleOnChange} />
      <button onClick={handleOnClick}>Alert</button>
    </>
  );
};

export default Textc;
