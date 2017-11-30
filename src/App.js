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
        "US Northeast": [{
    "id": 79,
    "api_id": 4930956,
    "rating": 16,
    "name": "Boston",
    "country": "US",
    "lat": 42.358429,
    "lon": -71.059769,
    "photo_url": "https://c1.staticflickr.com/3/2279/2215012629_71f107ce6a.jpg"
  },
  {
    "id": 78,
    "api_id": 4990729,
    "rating": 12,
    "name": "Detroit",
    "country": "US",
    "lat": 42.331429,
    "lon": -83.045753,
    "photo_url": "https://c1.staticflickr.com/7/6101/6347529989_fba4717061_q.jpg"
  },
  {
    "id": 77,
    "api_id": 4560349,
    "rating": 9,
    "name": "Philadelphia",
    "country": "US",
    "lat": 39.952339,
    "lon": -75.163788,
    "photo_url": "https://c1.staticflickr.com/7/6034/5886078117_81736521e3.jpg"
  }]
      }
    }

  }

  // componentDidMount() {
  //   fetch("https://floating-escarpment-37906.herokuapp.com/suggestions")
  //   .then(data => data.json())
  //   .then((json) => {
  //     this.setState({
  //       regions: {
  //         "US Northeast": json
  //       }
  //     })
  //   })
  // }

  render() {
    return (
      <body>
        <div id="wrapper">
          <Nav/>
          <DestinationsContainer region="US Northeast" destinations={this.state.regions["US Northeast"]}/>
          </div>
        <Footer/>
      </body>
    );
  }
}

export default App;
