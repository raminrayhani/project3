import React, { Component } from "react";
import API from "../utils/API";

class Panel extends Component {
  // liked Item toggles a item's like status in the db and then
  // reloads all quotes in our app
  likeItem(item) {
    API.likedItem(item).then(this.props.getItems);
  }
   // delete Items deletes an item in the db and then
  // reloads all items in our app
  deleteItem(id) {
    API.deleteItem(id).then(this.props.getItems);
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <image src={this.props.item.imageUrl} />
            <i
              onClick={() => this.likeItem(this.props.item)}
              style={styles.likeStyle}
              aria-hidden="true"
            />
            <i
              onClick={() => this.dislikeItem(this.props.item._id)}
              style={styles.dislikeStyle}
              className="fa fa-thumbs-o-down"
              aria-hidden="true"
            />

            {this.props.item.name}

            {this.props.item.description}

          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  likeStyle: {
    cursor: "pointer",
    marginRight: 5,
    color: "blue",
    float: "left"
  },
  dislikeStyle: {
    cursor: "pointer",
    marginLeft: 5,
    color: "red",
    float: "right"
  }
};

export default Panel;
//className={this.props.item.liked ? "fa fa-thumbs-o-up"}
