import React from 'react';
import { Container, Card, Header } from 'semantic-ui-react'
import DestinationTile from './destinationTile'
import FunLoader from './funLoader.js'
import ForecastChartModal from './forecastChartModal.js'

const DestinationsContainer = ({region, destinations, opacity}) => {
    let loaders = [<FunLoader key="1" display="stars" />, <FunLoader key="2" display="messages"/>, <FunLoader key="3" display="stars" />]
    let destinationTiles = destinations !== "" ? destinations.map((destination, index) => <DestinationTile key={destination.id} destination={destination} ranking={index + 1}/>) : loaders
    return (
      <Container className="margin-top" style={{"opacity": opacity}}>
        <Header as='h2' textAlign='center'>{region}</Header>
        <Container textAlign='center' className="margin-bottom">
          <ForecastChartModal destinations={destinations}/>
        </Container>
          <Card.Group>
            {destinationTiles}
          </Card.Group>
      </Container>
    )
}

export default DestinationsContainer
