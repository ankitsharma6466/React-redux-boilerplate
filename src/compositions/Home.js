import React from "react";
import Button from "../components/button";
import { routes } from "../config/url";

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.onStartClick = this.onStartClick.bind(this);
  }

  onStartClick(){
    this.context.router.push(routes.sourceCity);
  }

  render() {
    return (
      <div className="container">
        <Button text="Start" onClick={this.onStartClick}/>
      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
