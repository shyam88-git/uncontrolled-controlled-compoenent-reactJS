import React, { useState } from "react";

const RadioBox = () => {
  const [state, setState] = useState({ value: "" });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      
    });
  };

  return (
    <React.Fragment>
        <pre>{state.Pizza}</pre>
      <div className="flex align-items-center mb-3">
        <input
          type="radio"
          onChange={handleChange}
          name="Pizza"
          value="Mushroom"
          checked={state.Pizza === "Mushroom"}
        />
        Mushroom
      </div>
      <div className="flex align-items-center mb-3">
        <input
          type="radio"
          name="Pizza"
          onChange={handleChange}
          value="Cheese"
          checked={state.Pizza === "Cheese"}
        />
        Cheese
      </div>
      <div className="flex align-items-center">
        <input
          type="radio"
          name="Pizza"
          onChange={handleChange}
          value="Onion"
          checked={state.Pizza === "Onion"}
        />
        Onion
      </div>
    </React.Fragment>
  );
};

export default RadioBox;
