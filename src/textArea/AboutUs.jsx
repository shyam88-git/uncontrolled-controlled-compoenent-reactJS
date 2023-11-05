import React, { Component } from "react";

import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default class AboutUs extends Component {

  constructor(props){

    super(props);

    this.state={value:'Review was submitted by sca'};

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    
  }

    handleChange=(event)=>{

       this.setState({value:event.target.value});
    }
    handleSubmit=(event)=>{

       alert("reveiew was submitted");
       event.preventDefault();
    }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <InputTextarea value={this.state.value}  onChange={this.handleChange}/> <br />
          <br />
          <Button label="submit"  />
        </form>
      </React.Fragment>
    );
  }
}
