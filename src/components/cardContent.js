import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardContent = ({destination, woolSocks}) => (
  <div>
    <Image src={destination.photo_url} height={175}/>
    <Card.Meta textAlign="center">photo by {destination.photo_cred}</Card.Meta>
    <Card.Content>
      <Card.Header>{destination.name}</Card.Header>
      <Card.Meta>{destination.country}</Card.Meta>
      <Card.Description>currently {destination.current_temp.toFixed()} ℉ | {destination.current_description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      dreariness rating: {woolSocks}
    </Card.Content>
  </div>
)

export default CardContent
