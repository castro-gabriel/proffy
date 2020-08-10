const subjects = [
    "Arts",
    "Math",
    "Science",
    "Phisic",
    "History",
    "Portuguese",
    "English",
    "Quimic",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

//  Funcionalidades
function getSubjects( subjectNumber ) {
    const arrayPosition = +subjectNumber - 1
    return subjects[ arrayPosition ]
}

//  Convert hours to minutes
function convertHoursToMinutes(time) {
    const [ hour, minute ] = time.split(':')
    return Number((hour * 60) + minute)
}

module.exports = {
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes
}