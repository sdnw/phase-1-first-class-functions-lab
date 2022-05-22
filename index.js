// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function(fare) {
        return x * fare
    }
}

function fareDoubler(x) {
    return x * 2
}

function fareTripler(x) {
    return x * 3
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    debugger;
    return returnFirstTwoDrivers(arrayOfDrivers);
}
