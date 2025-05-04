import { useEffect } from 'react'
import { retrieveHourSeconds, minutesToHoursAndMinutes } from './utils/time.js'
function Details({tripDetails}) {

    function textByProductType(leg, origin, destination) {
        if (leg.product.type == "BUS") {
            return "Bus"
        } else if (origin != null && origin.hasOwnProperty("actualTrack")) {
            return "Spoor " + origin.actualTrack
        } else if (destination != null && destination.hasOwnProperty("actualTrack")) {
            return "Spoor " + destination.actualTrack
        } else {
            return ""
        }
    }

    if (tripDetails != null) {
        return (
            <div className="details">
                
                {tripDetails.legs.map(i => {
                    return (
                        <>
                            <div className="stationAndTrack">
                                <span>{retrieveHourSeconds(new Date(i.origin.plannedDateTime))}</span>
                                <span className="bold">{i.origin.name}</span>
                                <span>{textByProductType(i, i.origin, null)}</span>
                            </div>
                            <div>
                                {i.product.displayName} {i.hasOwnProperty("direction") ? `Richting ${i.direction}` : "Lopen"}
                            </div>
                            <div className="stationAndTrack">
                                <span>{retrieveHourSeconds(new Date(i.destination.plannedDateTime))}</span>
                                <span className="bold">{i.destination.name}</span>
                                <span>{textByProductType(i, null, i.destination)}</span>
                            </div>
                            <div>{(i != tripDetails.legs[tripDetails.legs.length - 1]) ? "Overstappen" : ""}</div>
                        </>
                    )
                })}
            </div>
        )
    } else {
        return <></>
    }
}

export default Details