import React, { Component } from 'react';
import Nav from './components/nav'
import RegionSelectContainer from './components/regionSelectContainer'
import DestinationsContainer from './components/destinationsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      destinations: [{
      "id": 63,
      "api_id": 4990729,
      "rating": 21,
      "name": "Detroit",
      "country": "US",
      "lat": 42.331429,
      "lon": -83.045753
    },
    {
      "id": 64,
      "api_id": 4930956,
      "rating": 18,
      "name": "Boston",
      "country": "US",
      "lat": 42.358429,
      "lon": -71.059769
    },
    {
      "id": 61,
      "api_id": 4887398,
      "rating": 15,
      "name": "Chicago",
      "country": "US",
      "lat": 41.850029,
      "lon": -87.650047
    }]
    }

  }

  // componentDidMount() {
  //   fetch("https://api.darksky.net/forecast/c9b017e5dfead0a2f9b5465e3854e063/53.3498,6.2603")
  //   .then(data => data.json())
  //   .then(console.log)
  // }

  render() {
    return (
      <div className="App">
        <Nav/>
        <RegionSelectContainer/>
        <DestinationsContainer destinations={this.state.destinations}/>
      </div>
    );
  }
}

export default App;
