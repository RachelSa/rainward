import React, { Component } from 'react';
import Nav from './components/nav'
import RegionSelectContainer from './components/regionSelectContainer'
import DestinationsContainer from './components/destinationsContainer'
import Footer from './components/footer'
import Loader from './components/loader'

class App extends Component {
  constructor(){
    super()
    this.state = {
      regions: [
        {value: "us-northeast", text:"US - Northeast"},
        {value: "us-northwest", text:"US - Northwest"},
        {value: "ca-northeast", text:"Canada - East"},
        {value: "ca-northwest", text:"Canada - West"}
      ],
      selectedRegion: "us-northeast",
      selectedRegionData: "",
      selectedRegionDisplay: "US - Northeast"
    }

  }

  handleChange = (event, { value }) => {
    this.setState({
      selectedRegion: value,
      selectedRegionDisplay: event.target.innerText
    })
    this.fetchRegionalSuggestions(value)
  }

  componentDidMount() {
    let region = this.state.selectedRegion
    this.fetchRegionalSuggestions(region)
  }

  fetchRegionalSuggestions = (region) => {
    fetch(`https://floating-escarpment-37906.herokuapp.com/suggestions/${region}`)
    .then(data => data.json())
    .then((json) => {
      this.setState({
        selectedRegionData: json
      })
    })
  }


  render() {
    return (
      <div>
        <div id="wrapper">
          <Nav/>
          <RegionSelectContainer options={this.state.regions} handleChange={this.handleChange} />
          <DestinationsContainer region={this.state.selectedRegionDisplay} destinations={this.state.selectedRegionData}/> 
          </div>
        <Footer/>
      </div>
    );
  }
}



export default App;
