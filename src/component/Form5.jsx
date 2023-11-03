import React, { useState } from 'react'
import {InputText} from 'primereact/inputtext'
import { Button } from 'primereact/button';
const Form5 = () => {
    const[state,setState]=useState({name:'', qty:''});
    const[cart,setCart]=useState([]);

    let handleChange=(event)=>{

        setState({...state,
        [event.target.name]:event.target.value});
    }

    let handleSubmit=(event)=>{

        event.preventDefault();

        let newProduct={name:state.name, qty:state.qty};

        setCart([...cart,newProduct]);

        setState({name:"" ,qty:""});

        
    }

    const deleteItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
      };

  return (
    <React.Fragment>

        <section>

            <h2>Your Shopping Cart</h2>

            <table>
                {cart.map((item ,index)=>{
                    return(
                        <tr key={index}>

                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td><Button label="Danger" severity="danger" className='mb-2' onClick={()=>deleteItem(index)} /></td>

                        </tr>
                    )
                })}
            </table>
        </section>

        <section>
            <hr/>
            <h2>Add New Cart</h2>
            
            <form onSubmit={handleSubmit}>

            <InputText 
            name='name'
            value={state.name}
            onChange={handleChange}
            required={true}
            placeholder='Enter product name' className='mb-2'/> <br/>
            
            <InputText type='number'
            name="qty"
            value={state.qty}
            required={true}
            onChange={handleChange} 
            placeholder='Enter qty' className='mb-2'/> <br/>
            <Button label="Success" severity="success"  />
            </form>
            
            
        </section>
    </React.Fragment>
  )
}

export default Form5