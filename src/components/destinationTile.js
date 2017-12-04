import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class DestinationTile extends Component {

  woolSockOMeter = () => {
    let rating = this.props.destination.rating
    return rating > 150 ? "three wool socks" : rating < 100 ? "one wool sock" : "two wool socks"
  }

  render(){
    const destination = this.props.destination
    return (
      <Card centered={true}>
        <Image src={destination.photo_url} height={175}/>
        <Card.Meta textAlign="center">photo by {destination.photo_cred}</Card.Meta>
        <Card.Content>
          <Card.Header>{destination.name}</Card.Header>
          <Card.Meta>{destination.country}</Card.Meta>
          <Card.Description>currently {destination.current_temp.toFixed()} ℉ | {destination.current_description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          dreariness rating: {this.woolSockOMeter()}
        </Card.Content>
      </Card>
    )
  }

}

export default DestinationTile
