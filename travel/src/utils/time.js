export function retrieveHourSeconds(date) {
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${(hours < 10) ? "0" : ""}${hours}:${(minutes < 10) ? "0" : ""}${minutes}`
}

export function minutesToHoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / 60)
    let restMinutes = minutes % 60
    if (hours == 0)
        return minutes + " min."
    else
        return hours + " u. " + restMinutes + " min."
}