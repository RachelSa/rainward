import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SelectionDisplayContainer from './components/selectionDisplayContainer'
import Nav from './components/nav'
import Footer from './components/footer'
import About from './components/about'

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
      loading: false,
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
    this.setState({ loading: true })
    setTimeout(() => {
      fetch(`https://floating-escarpment-37906.herokuapp.com/suggestions/${region}`)
      .then(data => data.json())
      .then((json) => {
        this.setState({
          selectedRegionData: json,
          loading: false
        })
      })
    }, 2000)
  }


  render() {
    return (
      <div>
        <div id="wrapper">
          <Nav/>
              <Route
              exact path="/"
              component={() => {
                return <SelectionDisplayContainer
                  opacity={this.state.loading ? "0.5" : "1"}
                  options={this.state.regions}
                  handleChange={this.handleChange}
                  region={this.state.selectedRegionDisplay}
                  dropdownDisplay={this.state.selectedRegion}
                  destinations={this.state.selectedRegionData}/>}}
                />
              <Route
              exact path="/about"
              component={About}
              />
          </div>
        <Footer/>
      </div>
    );
  }
}



export default App;
