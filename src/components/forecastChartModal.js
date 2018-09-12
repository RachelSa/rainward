import React from 'react'
import { Bar } from 'react-chartjs'
import { Button, Modal } from 'semantic-ui-react'

const ForecastChartModal = ({destinations}) => {
  if (destinations !== "") {
    return (
      <Modal size={'small'} trigger={<Button basic size='tiny'>compare forecasts</Button>}>
        <Modal.Header>Find the Dreariness that Suits You Best</Modal.Header>
        <Modal.Content scrolling>
          <div>
            <Bar data={displayData(destinations)} width="625" height="250"/>
          </div>
          <Modal.Description>
            <p className="paragraph-text">Destinations can gain up to thirty points each of the following forecast categories:</p>
            <ul className="paragraph-text">
              <li>precipitation: mist, drizzle, rain, thunderstorm, or snow </li>
              <li>cool temps: below 50ºF</li>
              <li>clouds: coverage over 50%</li>
              <li>wind: speeds above 13 mph</li>
            </ul>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  } else {
    return null
  }
}

const displayData = (destinations) => {
  return {
    labels:rankingTypes(),
    datasets: cityDatasets(destinations)
  }
}

const rankingTypes = () => {
  return ["precipitation", "cool temps", "clouds", "wind"]
}

const colors = [
  {
    fillColor: "rgba(143, 160, 239,0.5)",
    strokeColor: "rgba(143, 160, 239,0.8)",
  },
  {
    fillColor: "rgba(143, 213, 239,0.5)",
    strokeColor: "rgba(143, 213, 239,0.8)",
  },
  {
    fillColor: "rgba(143, 239, 204,0.5)",
    strokeColor: "rgba(143, 239, 204,0.8)",
  }
]

const cityDatasets = (destinations) => {
  let datasets = destinations.map((destination, idx) => {
    return {
      label: destination["name"],
      fillColor: colors[idx]["fillColor"],
      strokeColor: colors[idx]["strokeColor"],
      highlightFill: colors[idx]["highlightFill"],
      highlightStroke: colors[idx]["highlightStroke"],
      data: [
        destination["precipitation_rating"],
        destination["temperature_rating"],
        destination["cloudiness_rating"],
        destination["windiness_rating"]
      ]
    }
  })
  return datasets
}



export default ForecastChartModal
