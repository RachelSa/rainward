import React from 'react';
import { Container, Card, Header } from 'semantic-ui-react'
import DestinationTile from './destinationTile'
import DestinationLoader from './loader.js'
import FunLoader from './funLoader.js'
import ForecastChartModal from './forecastChartModal.js'

const DestinationsContainer = ({region, destinations, opacity}) => {
    let loaders = [<DestinationLoader key="1" />, <FunLoader key="2" />, <DestinationLoader key="3" />]
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
