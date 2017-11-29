import React from 'react';
import { Container, Card } from 'semantic-ui-react'
import DestinationTile from './destinationTile'

const DestinationsContainer = ({destinations}) => {
    let destinationTiles = destinations.map(destination => <DestinationTile destination={destination}/>)
    return (
      <Container>
        <Card.Group>
          {destinationTiles}
        </Card.Group>
      </Container>
    )
}

export default DestinationsContainer
