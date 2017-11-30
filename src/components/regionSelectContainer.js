import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react'
import RegionSelect from './regionSelect'

class RegionSelectContainer extends Component {
  render() {
    return (
      <Container>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={12}>
              <RegionSelect/>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default RegionSelectContainer
