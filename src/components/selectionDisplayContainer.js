import React from 'react';
import RegionSelectContainer from './regionSelectContainer'
import DestinationsContainer from './destinationsContainer'

const SelectionDisplayContainer = ({options, handleChange, region, dropdownDisplay, destinations, opacity}) => {
    return (
      <div>
        <RegionSelectContainer options={options} dropdownDisplay={dropdownDisplay} handleChange={handleChange} />
        <DestinationsContainer region={region} destinations={destinations} opacity={opacity}/>
      </div>
    )
}

export default SelectionDisplayContainer
