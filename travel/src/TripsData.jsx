import { useEffect } from "react"
import Trip from "./Trip"
function TripsData({listOfTrips, handleClick, currentlySelectedTrip}) {
    const list = listOfTrips.map(trip => {
        return <li key={trip.idx}><Trip tripData={trip} handleClick={handleClick} currentlySelectedTrip={currentlySelectedTrip}/></li>
    })
    return <ul>{list}</ul>
}

export default TripsData