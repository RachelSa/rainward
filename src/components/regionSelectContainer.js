import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import RegionSelect from './regionSelect'

class RegionSelectContainer extends Component {
  render() {

    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column width={12} textAlign="center">
              <RegionSelect options={this.props.options} handleChange={this.props.handleChange}/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default RegionSelectContainer
