import React, { Component } from 'react';
import { Select } from 'semantic-ui-react'

class RegionSelect extends Component {

  render() {

    return (
      <Select placeholder="select a region" options={this.props.options} onChange={this.props.handleChange}/>
    )
  }
}

export default RegionSelect
