import React from 'react';
import RegionSelectContainer from './regionSelectContainer'
import DestinationsContainer from './destinationsContainer'

const SelectionDisplayContainer = ({options, handleChange, region, dropdownDisplay, destinations}) => {
    return (
      <div>
        <RegionSelectContainer options={options} dropdownDisplay={dropdownDisplay} handleChange={handleChange} />
        <DestinationsContainer region={region} destinations={destinations}/>
      </div>
    )
}

export default SelectionDisplayContainer
