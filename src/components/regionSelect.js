import React, { Component } from 'react';
import { Button, Dropdown } from 'semantic-ui-react'

const RegionSelect = ({options, handleChange, dropdownDisplay}) => {
  return (
    <Button.Group color='blue'>
      <Dropdown
      button
      defaultValue={dropdownDisplay}
      options={options}
      onChange={handleChange}/>
    </Button.Group>
  )
}

export default RegionSelect
