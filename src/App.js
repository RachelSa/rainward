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
        {key: "us-northeast", value: "usne", text:"US - Northeast"},
        {value: "us-northwest", text:"US - Northwest"},
        {value: "ca-northeast", text:"Canada - East"},
        {value: "ca-northwest", text:"Canada - West"}
      ],
      selectedRegion: "",
      selectedRegionData: ""
    }

  }

  handleChange = (event, { value }) => {
    this.setState({
      selectedRegion: value
    })
    this.fetchRegionalSuggestions(value)
  }

  // componentDidMount() {
  //   Object.keys(this.state.regions)
  //   .map(region => this.fetchRegionalSuggestions(region))
  // }

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
    console.log(this.state.selectedRegionData)
    return (
      <div>
        <div id="wrapper">
          <Nav/>
          <RegionSelectContainer options={this.state.regions} handleChange={this.handleChange} />
          { this.state.selectedRegionData !== "" ? <DestinationsContainer region={this.state.selectedRegion} destinations={this.state.selectedRegionData}/> : null }
          </div>
        <Footer/>
      </div>
    );
  }
}

// {this.state.regions["US Northeast"] !== [] ? <DestinationsContainer region="US Northeast" destinations={this.state.regions["US Northeast"]}/> : <Loader/>}
// {this.state.regions["US Northwest"] !== [] ? <DestinationsContainer region="US Northwest" destinations={this.state.regions["US Northwest"]}/> : <Loader/>}
// {this.state.regions["CA Northeast"] !== [] ? <DestinationsContainer region="CA Northeast" destinations={this.state.regions["CA Northeast"]}/> : <Loader/>}
// {this.state.regions["CA Northwest"] !== [] ? <DestinationsContainer region="CA Northwest" destinations={this.state.regions["CA Northwest"]}/> : <Loader/>}

export default App;
