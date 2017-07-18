import React from "react";
import API from "../utils/API";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A product was submitted: ' + this.state.value);
        event.preventDefault();
    }

 render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
            Product Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
            Product Description:
            <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
            Product Image:
            <input type="file" accept="image/*"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
