import React, { Component } from 'react';
import { Card, Image, Label } from 'semantic-ui-react'

class DestinationTile extends Component {

  woolSockOMeter = () => {
    let rating = this.props.destination.rating
    return rating > 89 ? "three wool socks" : rating < 40 ? "one wool sock" : "two wool socks"
  }

  render(){
    const destination = this.props.destination
    return (
      <Card centered={true}>
        <Image
        className='card-height'
        src={destination.photo_url}
        />
        <Card.Meta textAlign="center">photo by {destination.photo_cred}</Card.Meta>
        <Card.Content>
        <Label as='a' color='black' ribbon>{this.props.ranking}</Label>
          <span className='title-text'>{destination.name}</span>
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
