import React, { Component } from 'react'
import { Card, Loader } from 'semantic-ui-react'

class FunLoader extends Component {

  constructor(){
    super()
    this.messages = [
      "sifting snowflakes...",
      "counting rain drops...",
      "inspecting fog...",
      "checking wind sock...",
      "punching numbers...",
      "drawing charts...",
      "refilling coffee...",
      "tabulating results..."
    ]
    this.state = {
      currentMessage: this.messages[0]
    }
    let counter = 1
    this.funMessage = setInterval(() => {
      if (counter < 7){
        counter++
        this.setState({currentMessage: this.messages[counter]})
      }
    }, 2000)
  }


  componentWillUnmount(){
    clearInterval(this.funMessage)
  }

  render(){
    return (
      <Card centered={true} className="card-height">
        <Card.Content>
          <Loader active size={"medium"}>{this.state.currentMessage}</Loader>
        </Card.Content>
    </Card>
    )
  }


}

export default FunLoader
