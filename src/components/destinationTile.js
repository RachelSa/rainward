import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class DestinationTile extends Component {
  constructor(){
    super()
  }

  woolSockOMeter = () => {
    let rating = this.props.destination.rating
     return rating > 30 ? "three wool socks" : rating < 20 ? "one wool sock" : "two wool socks"
  }

  render(){
    return (
      <Card centered={true}>
        <Image src={this.props.destination.photo_url} height={175}/>
        <Card.Content>
          <Card.Header>{this.props.destination.name}</Card.Header>
          <Card.Meta>{this.props.destination.country}</Card.Meta>
          <Card.Description>dreariness rating</Card.Description>
          {this.woolSockOMeter()}
        </Card.Content>

      </Card>
    )
  }

}

export default DestinationTile
