import React from 'react'


const About = () => {
  return (
    <div class="paragraph-text">
      <p>Welcome to Rainward, the web app for finding dreary and drizzly travel destinations, based on their five-day forecasts.</p>

      <p>Rainward ranks locations based on their forecasted temperature, precipitation, wind, and cloudiness, using the <a href="https://openweathermap.org/">OpenWeatherMap</a> API.</p>

      <p>The Wool Sock Rating of displayed destinations can be used to determine how dreary the top-ranked cities are forecasted to be. Three wool socks indicates inclement weather in the forecast. Two wool indicates some inclement weather. One wool sock indicates little or no inclement weather.</p>

      <p>This application was created by <a href="http://rachelsalois.com/">Rachel Salois</a>, a web developer living in Brooklyn, New York.</p>
    </div>
  )
}

export default About
