import React, { Component } from 'react';
import { Dropdown, Grid, Button, Form, Segment } from 'semantic-ui-react'

class RegionSelect extends Component {

  render() {
    const toOptions = [{ key: 'us-northeast', value: 'us-northeast', text: 'US Northeast' }, { key: 'us-northwest', value: 'us-northwest', text: 'US Northwest' }]
    const fromOptions = [{key:'jfk', value:'jfk', text:'JFK'}]
    return (
            <Grid>
               <Grid.Row columns={5}>
                <Grid.Column computer={3} tablet={16} mobile={16}>
                  <p>I want to go from</p>
                </Grid.Column>
                <Grid.Column computer={4} tablet={16} mobile={16}>
                  <Dropdown placeholder='JFK' search selection options={fromOptions} />
                </Grid.Column>
                <Grid.Column computer={1} tablet={16} mobile={16}>
                  <p>to</p>
                </Grid.Column>
                <Grid.Column computer={4} tablet={16} mobile={16}>
                <Dropdown placeholder='US Northeast' search selection options={toOptions} />
                </Grid.Column>
                <Grid.Column computer={4} tablet={16} mobile={16}>
                <Button type='submit'>
                  Go!
                </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
    )
  }
}

export default RegionSelect
