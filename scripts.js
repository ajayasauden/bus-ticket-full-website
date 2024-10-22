function addToSelect(){
    const passengers = document.getElementById('choose');
    passengers.innerHTML=``
    const maxpassengers= 10;
    for(let i=1;i<maxpassengers;i++){
        const option = document.createElement('option');
        option.value=i;
        option.textContent=i
        passengers.appendChild(option)
    }
}
document.addEventListener('DOMContentLoaded',addToSelect)

document.getElementById('formId').addEventListener('submit',function(event){
event.preventDefault()
const tripType = document.querySelector('input[name="trip-type"]:checked').value;
console.log("Trip-Type : ",tripType)

const fromCity = document.getElementById('from-city').value;
const toCity = document.getElementById('to-city').value;
let tripDate = document.getElementById('date').value;

// If no date is selected, set today's date
if (!tripDate) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure two digits
    const day = String(today.getDate()).padStart(2, '0');        // Ensure two digits
    tripDate = `${year}-${month}-${day}`;                       // Format as 'YYYY-MM-DD'
    document.getElementById('date').value = tripDate;          // Set input value to today's date
}// Update tripDate to today

const passengersValue = document.getElementById('choose').value;
console.log("From: ",fromCity)
console.log("To-: ",toCity)
console.log("Date of departure : ",tripDate)
console.log("Passengers",passengersValue)

 // Construct the URL with query parameters
const queryString = `?tripTyp=${tripType}&fromCity=${fromCity}&toCity=${toCity}&tripDate=${tripDate}&passengers=${passengersValue}`;

// Redirect to the next page with the query string
// window.location.href = 'bus-receipt.html' + queryString;
window.location.href = 'ticket-details.html' + queryString;
});


