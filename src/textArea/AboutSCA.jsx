import React ,{useState} from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'


const AboutSCA = () => {
    const[state,setState]=useState({value:'The review was submitted by SCA'});

    let handleChange=(event)=>{

        setState({value:event.target.value});
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        alert("Form Submitted Successfully");
        setState({value:''});
        
    }
  return (
    <React.Fragment>

        <form onSubmit={handleSubmit}>
        <InputTextarea value={state.value} onChange={handleChange}/> <br/><br/>
        <Button label='Submit'/>
        </form>

        
    </React.Fragment>
  )
}

export default AboutSCA