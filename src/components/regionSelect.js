import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'

class RegionSelect extends Component {

  render() {
    return (
      <Button.Group color='blue'>
        <Dropdown
        button
        defaultValue={this.props.dropdownDisplay}
        options={this.props.options}
        onChange={this.props.handleChange}/>
      </Button.Group>
    )
  }
}

export default RegionSelect
