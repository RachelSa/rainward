import React, { Component } from 'react'
import { Card, Loader } from 'semantic-ui-react'
import loaderData from '../loaderData.js'

class FunLoader extends Component {

  constructor(){
    super()
    this.state = {
      currentMessage: ""
    }
    let counter = 0
    this.funMessage = setInterval(() => {
      if (counter < 7){
        let displayItem = loaderData[this.props.display][counter]
        if (displayItem) {
          this.setState({currentMessage: displayItem})
        } else {
          counter = 0
          this.setState({currentMessage: loaderData[this.props.display][counter]})
        }
        counter++
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
