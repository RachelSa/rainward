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
            <Router>
              <Route
              exact path={`${process.env.PUBLIC_URL}/`}
              component={() => {
                return <SelectionDisplayContainer
                  options={this.state.regions}
                  handleChange={this.handleChange}
                  region={this.state.selectedRegionDisplay}
                  dropdownDisplay={this.state.selectedRegion}
                  destinations={this.state.selectedRegionData}/>}}
                />
              <Route
              exact path={`${process.env.PUBLIC_URL}/about`}
              component={About}
              />
            </Router>
          </div>
        <Footer/>
      </div>
    );
  }
}



export default App;
