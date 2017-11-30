import React from 'react'
import { Grid, Icon, Sticky } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Sticky id="footer-container">
      <Grid>
         <Grid.Row columns={3}>
           <Grid.Column textAlign='center' computer={5} tablet={12} mobile={12}>
            <p className="white-text">created by Rachel Salois</p>
           </Grid.Column>
           <Grid.Column textAlign='center' computer={5} tablet={12} mobile={12}>
            <a href="https://github.com/RachelSa/rainward"><Icon name="github" inverted={true} size="large" link={true}/></a>
           </Grid.Column>
           <Grid.Column  textAlign='center' computer={6} tablet={12} mobile={12}>
            <p className="white-text">forecasts powered by <a href="https://openweathermap.org/">OpenWeatherMap</a></p>
           </Grid.Column>
         </Grid.Row>
      </Grid>
    </Sticky>
  )
}

export default Footer
