import React from "react";
import { connect } from "react-redux";
import { sourceCityActions } from "../actions/actions";

@connect((store) => {
  return {
    sourceCities: store.sourceCity.sourceCities,
    selectedSourceCity: store.sourceCity.selectedSourceCity
  };
})
export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.onCityClick = this.onCityClick.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(sourceCityActions.fetchCities());
  }

  onCityClick(selectedCity){
    this.props.dispatch(sourceCityActions.setCity(selectedCity));
  }

  // render
  render() {

    const mappedCities = this.props.sourceCities.map((city, index)=> <div key={index} onClick={() => this.onCityClick(city)}>{city}</div>);

    return (
      <div className="container">

        <div>Source Cities</div>
        <div>Selected City :: {this.props.selectedSourceCity}</div>
        {mappedCities}
      </div>
    );
  }
}
