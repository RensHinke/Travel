import { useState, useEffect } from 'react';
import TimeText from './TimeText';
function Trip({tripData, handleClick, currentlySelectedTrip}) {
    return (
        <button className={currentlySelectedTrip == tripData ? "tripCard selected" : "tripCard"} onClick={() => handleClick(tripData)}>
            <TimeText
                className="bold"
                actualDurationInMinutes={tripData.actualDurationInMinutes}
                legs={tripData.legs} />
            <div>
                {tripData.status != "CANCELLED" && tripData.modalityListItems.map(trainType => {
                    return <span className='trains'> {trainType.name} </span>
                })}
                {tripData.status == "CANCELLED" &&
                    <span className="error">CANCELLED</span>
                }
            </div>
        </button>
    )
}

export default Trip