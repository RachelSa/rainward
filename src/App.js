import React, { Component } from 'react';
import Nav from './components/nav'
import RegionSelectContainer from './components/regionSelectContainer'
import DestinationsContainer from './components/destinationsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      regions: {
        "US Northeast": []
      }
    }

  }

  componentDidMount() {
    fetch("https://floating-escarpment-37906.herokuapp.com/suggestions")
    .then(data => data.json())
    .then((json) => {
      this.setState({
        regions: {
          "US Northeast": json
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <DestinationsContainer region="US Northeast" destinations={this.state.regions["US Northeast"]}/>
      </div>
    );
  }
}

export default App;
