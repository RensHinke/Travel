import { useState } from 'react'
import './App.css'
import TopBar from './TopBar'
import TripsData from './TripsData'
import Details from './Details'

function App() {
  const [filterText1, setFilterText1] = useState("")
  const [filterText2, setFilterText2] = useState("")
  const [loading, setLoading] = useState(true)
  const [trips, setTrips] = useState([])
  const [currentlySelectedTrip, setCurrentlySelectedTrip] = useState(null)

  function handleClick(trip) {
    setCurrentlySelectedTrip(trip)
  }

  function sendRequest() {
    fetch(`https://nodejs-serverless-function-express-six-liard.vercel.app/api/hello?fromStation=${filterText1}&toStation=${filterText2}`, {
      method: 'GET'
    })
    .then(response => response.text())
    .then(response => {
      let data = JSON.parse(JSON.parse(response))
      setTrips(data.trips)
      setLoading(false)
    })
    .catch(err => console.error(err));
  }

  if (loading) {
    return (
      <>
        <TopBar 
          filterText1={filterText1}
          onFilterTextChange1={setFilterText1}
          filterText2={filterText2}
          onFilterTextChange2={setFilterText2} />
        <button className="searchButton" type="button" onClick={sendRequest}>Bereken reis</button>
      </>
    )
  } else {
    return (
      <>
        <TopBar 
          filterText1={filterText1}
          onFilterTextChange1={setFilterText1}
          filterText2={filterText2}
          onFilterTextChange2={setFilterText2} />
        <button className="searchButton" type="button" onClick={sendRequest}>Bereken reis</button>
        <div className='columns'>
          <TripsData listOfTrips={trips} handleClick={handleClick}/>
          <Details tripDetails={currentlySelectedTrip} />
        </div>
      </>
    )
  }
}

export default App
