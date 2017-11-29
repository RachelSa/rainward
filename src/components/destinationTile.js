import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class DestinationTile extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Card centered={true}>
        <Image src='https://ih0.redbubble.net/image.323912751.6034/ap%2C190x210%2C16x12%2C1%2Cf8f8f8%2Ct-pad%2C210x230%2Cf8f8f8.lite-1.jpg' />
        <Card.Content>
          <Card.Header>{this.props.destination.name}</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>{this.props.destination.name}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>

    )
  }

}

export default DestinationTile
