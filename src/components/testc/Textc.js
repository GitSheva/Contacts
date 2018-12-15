import React, { useState } from "react";

const Textc = props => {
  let [value, setValue] = useState(props.value);

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
