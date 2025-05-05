import { useState, useEffect } from 'react'
import './App.css'
import TopBar from './TopBar'
import TripsData from './TripsData'
import Details from './Details'

function App() {
  const [filterText1, setFilterText1] = useState("")
  const [filterText2, setFilterText2] = useState("")
  const [loading, setLoading] = useState(true)
  const [hasSendRequest, setHasSendRequest] = useState(false)
  const [trips, setTrips] = useState([])
  const [currentlySelectedTrip, setCurrentlySelectedTrip] = useState(null)
  const [stations, setStations] = useState([])
  const [errorOccured, setErrorOccured] = useState(false)

  useEffect(() => {
    let ignore = false;
    
    if (!ignore) {
      sendRequestStations()
    }
    return () => { ignore = true; }
    },[]);

  function handleClick(trip) {
    setCurrentlySelectedTrip(trip)
  }

  function sendRequestStations() {
    fetch(`https://nodejs-serverless-function-express-six-liard.vercel.app/api/stations`, {
      method: 'GET'
    })
    .then(response => response.text())
    .then(response => {
      let data = JSON.parse(JSON.parse(response))
      setStations(data.payload.map(e => e.namen.lang))
    })
    .catch(err => console.error(err));
  }

  function sendRequest() {
    setHasSendRequest(true)
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

  function sendRequestAndResetDetails() {
    if (validateInputs()) {
      setCurrentlySelectedTrip(null)
      setTrips([])
      sendRequest()
      setErrorOccured(false)
    } else {
      setErrorOccured(true)
    }
  }

  function validateInputs() {
    return stations.map(e => e.toUpperCase()).includes(filterText1.toUpperCase()) && 
    (stations.map(e => e.toUpperCase()).includes(filterText2.toUpperCase()))
  }

  return (
    <div className={!loading ? "minHeightFull" : ""}>
      <div className={!loading ? "topBarLoaded" : "topBar"}>
        <TopBar
          filterText1={filterText1}
          onFilterTextChange1={setFilterText1}
          filterText2={filterText2}
          onFilterTextChange2={setFilterText2}
          isLoaded={loading}
          stations={stations}
          handleClick1={setFilterText1}
          handleClick2={setFilterText2} />
        <button className={!loading ? "searchButton searchButtonInverted" : "searchButton"} type="button" onClick={sendRequestAndResetDetails}>Bereken reis</button>
      </div>
      {errorOccured &&
        <div className="error">Er zijn niet geldige stations ingevoerd</div>
      }
      {!loading && trips.length != 0 && 
        <div className='columns'>
          <TripsData listOfTrips={trips} handleClick={handleClick} currentlySelectedTrip={currentlySelectedTrip} />
          <Details tripDetails={currentlySelectedTrip} />
        </div>
      }
      {((loading && hasSendRequest) || (!loading && trips.length == 0)) && currentlySelectedTrip == null &&
        <div className="loaderCircle"></div>
      }
    </div>
  )
}

export default App
