import React, { Component } from 'react'
import { Card, Loader } from 'semantic-ui-react'

class FunLoader extends Component {

  constructor(){
    super()
    const messages = ["sifting snowflakes", "counting rain drops...", "inspecting fog...", "checking wind sock..."]
    this.state = {
      currentMessage: messages[0]
    }
    this.changeMessage()
  }

  changeMessage(){
    let counter = 1
    let funMessage = setInterval(() => {
      if (counter < 4){
        counter++
        this.setState({currentMessage: messages[counter]})
      } else {
        clearInterval(funMessage)
      }
    }, 2000)
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
