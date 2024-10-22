

function displayDetails() {
    const busData = mockBusData; 
    const busDetailsContainer = document.getElementById('busDetails');

    busData.forEach(bus => {
        const busDetails = document.createElement('div');
        busDetails.classList.add('buses'); 

        busDetails.innerHTML = `
        <h3>${bus.fromCity} to ${bus.toCity}</h3>
            <p><strong>Trip Type:</strong> ${bus.tripType}</p>
            <p><strong>Date:</strong> ${bus.date}</p>
            <p class="departure"><strong>Departure:</strong> ${bus.departureTime}</p>
            <p class="arrival"><strong>Arrival:</strong> ${bus.arrivalTime}</p>
            <p class="passengers"><strong>Seats Available:</strong> ${bus.passengers}</p>
            <p><strong>Bus Company:</strong> ${bus.busCompany}</p>
            <p class="price"><strong>Price:</strong> NPR ${bus.price}</p> 
        `;
        busDetailsContainer.appendChild(busDetails);
    });
    busDetails.addEventListener('click',function(){
        window.location.href="details.html"
    })
}
displayDetails();