// Retrieve URL parameters
const params = new URLSearchParams(window.location.search);
const tripType = params.get('tripTyp');
const fromCity = params.get('fromCity');
const toCity = params.get('toCity');
const tripDate = params.get('tripDate');
const passengers = params.get('passengers');
//console.log(tripType)

// Populate the table with the retrieved values
document.querySelector('.trip').textContent = tripType;
document.querySelector('.from').textContent = fromCity;
document.querySelector('.to').textContent = toCity;
document.querySelector('.date').textContent = tripDate;
document.querySelector('.passengers').textContent = passengers;