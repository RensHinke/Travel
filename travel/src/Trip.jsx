import { useState, useEffect } from 'react';
import TimeText from './TimeText';
function Trip({tripData, handleClick}) {
    const timeTaken = tripData.actualDurationInMinutes

    return (
        <button className="tripCard" onClick={() => handleClick(tripData)}>
            <TimeText
                className="bold"
                actualDurationInMinutes={tripData.actualDurationInMinutes}
                legs={tripData.legs} />
            <div>
                {tripData.modalityListItems.map(trainType => {
                    return <span className='trains'> {trainType.name} </span>
                })}
            </div>
        </button>
    )
}

export default Trip