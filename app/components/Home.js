import React, { Component } from "react";
import Panel from "./Panel";
import QuoteForm from "./Form";
import API from "../utils/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    // Binding getItems to our component since we'll be passing this
    // method to child components
    this.getItems = this.getItems.bind(this);
  }
  // Getting all items when the component mounts
  componentDidMount() {
    this.getItems();
  }
  getItems() {
    API.getItems().then((res) => {
      this.setState({ items: res.data });
    });
  }
  // A helper method for rendering one panel for each item
  renderItems() {
    return this.state.quotes.map(item => (
      <Panel
        item={item}
        key={item._id}
        getItems={this.getItems}
      />
    ));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Form
            getItems={this.getItems}
          />
        </div>
        <div className="row">
          <hr />
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default Home;
