import React from 'react';
import { Grid, Container } from 'semantic-ui-react'
import RegionSelect from './regionSelect'

const RegionSelectContainer = ({options, dropdownDisplay, handleChange}) => {
  return (
    <Container>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={9} textAlign="center">
          </Grid.Column>
          <Grid.Column width={7} textAlign="center">
          <RegionSelect options={options} handleChange={handleChange} dropdownDisplay={dropdownDisplay}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default RegionSelectContainer
