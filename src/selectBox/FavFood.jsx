import React, { Component } from 'react'
import {Button} from 'primereact/button'


        

export default class FavFood extends Component {
    constructor(props){

        super(props);
        this.state={value:'Chinese'};

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
    }

    handleChange=(event)=>{

        this.setState({value:event.target.value});
    }

    handleSubmit=(event)=>{

        event.preventDefault();
        alert("Your favorite food is :"+this.state.value);
        this.setState({value:'Chinese'});
    }
  render() {
    return (
      <React.Fragment>

       <form onSubmit={ this.handleSubmit}>

       <select value={this.state.value} onChange={this.handleChange}>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Neplease">Neplease</option>
            <option value="Russian">Russian</option>
        </select>
        <br/>
        <br/>

        <Button label='submit' style={{height:'20px'}}/>

       </form>


        

        
      </React.Fragment>
    )
  }
}
