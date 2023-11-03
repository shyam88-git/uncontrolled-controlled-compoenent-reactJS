import React, { useRef } from 'react'
import {InputText} from "primereact/inputtext";
import { Button } from 'primereact/button';
const Form2 = () => {

    let nameRef=useRef(null);
    let emailRef=useRef(null);

    let handleClick=(event)=>{

        event.preventDefault();
        const name =nameRef.current.value;
        const  email=emailRef.current.value;

        console.log(name);
        console.log(email);
    }
  return (
    <>

    <InputText placeholder='Enter name' ref={nameRef} />
    <br/> <br/>
    <InputText placeholder='Enter address' ref={emailRef}/>
    <br/> <br/>

    <Button label={"submit"} onClick={handleClick}/>
    
    
    </>
  )
}

export default Form2