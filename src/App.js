import React, { Component } from 'react';
import Nav from './components/nav'
import RegionSelectContainer from './components/regionSelectContainer'
import DestinationsContainer from './components/destinationsContainer'
import Footer from './components/footer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      regions: {
        "US Northeast": [],
        "US Northwest": [],
        "CA Northeast": [],
        "CA Northwest": []
      }
    }

  }

  componentDidMount() {
    Object.keys(this.state.regions)
    .map(region => this.fetchRegionalSuggestions(region))
  }

  fetchRegionalSuggestions = (region) => {
    const region_url = region.toLowerCase().replace(" ", "-")
    fetch(`https://floating-escarpment-37906.herokuapp.com/suggestions/${region_url}`)
    .then(data => data.json())
    .then((json) => {
      this.setState({
        regions: {
          ...this.state.regions,
          [region]: json
        }
      })
    })
  }


  render() {
    return (
      <div>
        <div id="wrapper">
          <Nav/>
          <DestinationsContainer region="US Northeast" destinations={this.state.regions["US Northeast"]}/>
          <DestinationsContainer region="US Northwest" destinations={this.state.regions["US Northwest"]}/>
          <DestinationsContainer region="CA Northeast" destinations={this.state.regions["CA Northeast"]}/>
          <DestinationsContainer region="CA Northwest" destinations={this.state.regions["CA Northwest"]}/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
