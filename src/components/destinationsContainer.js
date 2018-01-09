import React from 'react';
import { Container, Card, Header } from 'semantic-ui-react'
import DestinationTile from './destinationTile'
import DestinationLoader from './loader.js'

const DestinationsContainer = ({region, destinations}) => {
    let loaders = [<DestinationLoader key="1" />, <DestinationLoader key="2" />, <DestinationLoader key="3" />]
    let destinationTiles = destinations !== "" ? destinations.map((destination, index) => <DestinationTile key={destination.id} destination={destination} ranking={index + 1}/>) : loaders
    return (
      <Container className="margin-top">
        <Header as='h2' textAlign='center'>{region}</Header>
          <Card.Group>
            {destinationTiles}
          </Card.Group>
      </Container>
    )
}

export default DestinationsContainer
