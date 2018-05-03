import React from 'react'
import { Card, Loader } from 'semantic-ui-react'

const DestinationLoader = () => (
    <Card centered={true} className="card-height">
      <Card.Content>
        <Loader active size={"medium"}> * * * </Loader>
      </Card.Content>
    </Card>


)

export default DestinationLoader
