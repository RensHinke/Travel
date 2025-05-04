import { retrieveHourSeconds, minutesToHoursAndMinutes } from './utils/time.js'
function TimeText({ legs, actualDurationInMinutes, className }) {

    const startDate = (legs[0].origin.hasOwnProperty("actualDateTime")) ? legs[0].origin.actualDateTime : legs[0].origin.plannedDateTime;
    const endDate = (legs[legs.length - 1].destination.hasOwnProperty("actualDateTime")) ? legs[legs.length - 1].destination.actualDateTime : legs[legs.length - 1].destination.plannedDateTime;

    return (
        <div className={className}>
            {retrieveHourSeconds(new Date(startDate))}
            →
            {retrieveHourSeconds(new Date(endDate))}
            <span className="timeTaken">({minutesToHoursAndMinutes(actualDurationInMinutes)})</span>
        </div>
    )
}

export default TimeText