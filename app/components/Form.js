import React, { Component } from "react";
import API from "../utils/API";

class Form extends Component {
    constructor() {
        super();
        this.state = {inputValue: ''};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    handleButtonClick(event) {
        const newItem = this.state.inputValue;
        API.saveItem(newItem).then(this.props.getItems);
        this.setState({ inputValue: "" });
    }

 render(){
    return(
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            Product Name:
            <input type="text" value={this.state.value} onChange={this.handleInputChange} />
          </label>

          <label>
            Product Image:
            <input type="file" accept="image/*"/>
          </label>

          <textarea
            style={{
              resize: "none"
            }}
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Product description"
            className="form-control"
            id="input-box"
            rows="3"
          />
          <button
            onClick={this.handleButtonClick}
            className="btn btn-success"
            style={styles.buttonStyle}
          >
            Submit
          </button>
        </div>
      </div>  




      
    );
  }
}

const styles = {
  buttonStyle: {
    float: "right",
    marginTop: 10
  },
  formStyle: {
    marginBottom: 60,
    marginTop: 60
  }
};

export default Form;
