import React, { Component } from "react";
import API from "../utils/API";

class Form extends Component {
    constructor() {
        super();
        this.state = 
            {
                name: "",
                description: "",
                imageUrl: ""
            };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }

    handleButtonClick(event) {
        //const newItem = this.state;
        const newItem = {
            'name':this.state.name,
            'description':this.state.description,
            'imageUrl':this.state.imageUrl
        }
        console.log(newItem);
        API.saveItem(newItem)
            .then(this.props.getItems)
            .catch((err)=>{
                console.log('Issue saving item', err);
            });
        this.setState({ inputValue: "" });
    }

 render(){
    return(
      <div className="col-md-6 col-md-offset-3">
        <div style={styles.formStyle} className="form-group">
          <label htmlFor="input-box">
            Product Name:
            <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
          </label>

          <label>
            Product Image:
            <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange}/>
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
            name="description"
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