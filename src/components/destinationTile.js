import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

class DestinationTile extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Card centered={true}>
        <Image src={this.props.destination.photo_url} height={175}/>
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
