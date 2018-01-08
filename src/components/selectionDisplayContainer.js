import React, { Component } from 'react';
import RegionSelectContainer from './regionSelectContainer'
import DestinationsContainer from './destinationsContainer'

class SelectionDisplayContainer extends Component {
  render() {
    return (
      <div>
        <RegionSelectContainer options={this.props.options} handleChange={this.props.handleChange} />
        <DestinationsContainer region={this.props.region} destinations={this.props.destinations}/>
      </div>
    )
  }
}

export default SelectionDisplayContainer
