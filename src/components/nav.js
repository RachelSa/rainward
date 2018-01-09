import React from 'react';
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../index.css'

const Nav = () => {
    return (
        <div id="header-container">
          <Grid>
             <Grid.Row columns={2}>
               <Grid.Column textAlign='center' computer={8} tablet={12} mobile={12}>
                 <span id="title-text" className="white-text">Rainward</span>
               </Grid.Column>
               <Grid.Column computer={8} tablet={16} mobile={16}>
               </Grid.Column>
             </Grid.Row>
             <Grid.Row columns={2}>
               <Grid.Column computer={8} tablet={6} mobile={2}>
               </Grid.Column>
               <Grid.Column computer={8} tablet={10} mobile={14}>
                 <p id="subtitle-text" className="white-text">a dreary and drizzly destination-finder</p>
               </Grid.Column>
             </Grid.Row>
             <Grid.Row columns={2}>
               <Grid.Column textAlign='center' className="white-text" computer={6} tablet={6} mobile={6}>
               <Link to="/" className="white-text black-background">home</Link> | <Link to="/about"  className="white-text black-background">about</Link>
               </Grid.Column>
               <Grid.Column computer={10} tablet={10} mobile={10}>
               </Grid.Column>
             </Grid.Row>
          </Grid>
        </div>
    )
}

export default Nav
