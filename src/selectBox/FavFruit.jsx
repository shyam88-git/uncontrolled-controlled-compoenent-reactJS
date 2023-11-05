import React, { useState } from 'react'
import { Button } from 'primereact/button'

const FavFruit = () => {
    const[state,setState]=useState({value:'Cherry'});

    let handleChange=(event)=>{

        setState({value:event.target.value});
    }

    let handleSubmit=(event)=>{

        event.preventDefault();
        alert("The fav fruit is :"+state.value);
        setState({value:'Cherry'});
    }
  return (
    <React.Fragment>

        <form onSubmit={handleSubmit}>
            <select value={state.value} onChange={handleChange}>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Cherry">Cherry</option>
                <option value="Lemon">Lemon</option>
                <option value="Orange">Orange</option>
            </select>
            <br/><br/>
            <Button label='submit' style={{height:'20px'}}/>
        </form>
    </React.Fragment>
  )
}

export default FavFruit