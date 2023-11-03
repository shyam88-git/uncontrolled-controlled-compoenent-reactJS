import React, { useRef } from 'react'

import { InputText } from 'primereact/inputtext';
import {Button}from "primereact/button";
        

const Form = () => {
    const inputRef=useRef(null);

    let handleSubmit=(event)=>{
        event.preventDefault();
        alert(inputRef.current.value);


    }

  return (
   <>
   
    
    <InputText placeholder='Enter the name' ref={inputRef} className='mr-2' />

    <Button label='submit' onClick={handleSubmit}/>

      
    
   </>
  )
}

export default Form;