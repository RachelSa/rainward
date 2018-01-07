import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'

class RegionSelect extends Component {

  render() {

    return (
      <Button.Group color='teal'>
        <Dropdown
        button color='teal'
        defaultValue={this.props.options[0].value}
        options={this.props.options}
        onChange={this.props.handleChange}/>
      </Button.Group>
    )
  }
}

export default RegionSelect
