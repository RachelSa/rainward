import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const DestinationLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
)

export default DestinationLoader
