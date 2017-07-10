import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Home from "../components/Home";
import Likes from "../components/Likes";
import Dislikes from "../components/Dislikes";
import Deal from "../components/Deal";

//Create Main Component
class App extends React.Component {
	constructor(){
		super();
		this.state = {

		}
	}
	render() {
		return (
			<div className="container">
			<div>
				<div>
			)
	}
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="likes" component={Likes} />
    <Route path="dislikes" component={Dislikes} />
    <Route path="deal" component={Deal} />
    <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
