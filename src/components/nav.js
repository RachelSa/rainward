import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

import '../index.css'

class Nav extends Component {
  render(){
    return (
        <div id="header-container">
          <Grid>
             <Grid.Row columns={2}>
               <Grid.Column textAlign='center' computer={8} tablet={12} mobile={12}>
                <span id="title-text" className="white-text">Rainward</span>
               </Grid.Column>
               <Grid.Column computer={8} tablet={0} mobile={0}>
               </Grid.Column>
             </Grid.Row>

             <Grid.Row columns={2}>
               <Grid.Column computer={8} tablet={6} mobile={2}>

               </Grid.Column>
               <Grid.Column computer={8} tablet={10} mobile={14}>
                 <p id="subtitle-text" className="white-text">a dreary and drizzly destination-finder</p>
               </Grid.Column>
             </Grid.Row>
          </Grid>

        </div>
    )
  }
}

export default Nav
