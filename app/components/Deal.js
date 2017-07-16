import React, { Component } from "react";
import Panel from "./Panel";
import API from "../utils/API";

class Deal extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
    // Binding getitems to this component since we'll be passing this method to 
    // other components to use
    this.getitems = this.getitems.bind(this);
  }
  // Getting all items once the component has mounted
  componentDidMount() {
    this.getitems();
  }
  getItems() {
    API.getItems().then((res) => {
      const dealItems = res.data.filter(item => item.deal);
      this.setState({ items: dealItems });
    });
  }
  // A helper method for rendering one panel for each item
  renderItems() {
    return this.state.items.map(item => (
      <Panel
        item={item}
        key={item._id}
        getItems={this.getItems}
      />
    ));
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Your Deals</h1>
        </div>
        <div className="container">
        <div className="row">
          {this.renderItems()}
        </div>
        </div>
      </div>
    );
  }
}

export default Deal;
