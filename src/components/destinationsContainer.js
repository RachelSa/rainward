import React from 'react';
import { Container, Card, Header } from 'semantic-ui-react'
import DestinationTile from './destinationTile'

const DestinationsContainer = ({region, destinations}) => {
    let destinationTiles = destinations.map(destination => <DestinationTile destination={destination}/>)
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
