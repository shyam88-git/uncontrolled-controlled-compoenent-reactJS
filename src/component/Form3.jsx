import React from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";

const Form = () => {
  const [state, setState] = useState({ name: "", email: "", password: "" });

  let handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  let handleSubmit=(event)=>{
    event.preventDefault();
    alert(`Type here ${state.name} ${state.email}  ${state.password}`);
    


  }

  return (
    <>
      <InputText
        placeholder="Enter the name"
        name="name"
        onChange={handleChange}
        value={state.name}
        className="mr-2 mb-2"
      />
      <span>{state.name}</span> <br />
      <br />
      <InputText
        placeholder="Enter Email"
        name="email"
        onChange={handleChange}
        value={state.email}
        className="mr-2 mb-2"
      />
      <span>{state.email}</span>
      <br />
      <br />
      <InputText
        placeholder="Enter the password"
        name="password"
        onChange={handleChange}
        value={state.password}
        className="mr-2 mb-2"
      />
      <span>{state.password}</span>
      <br />
      <br />
      <Button label="submit" onClick={handleSubmit} />
    </>
  );
};

export default Form;
