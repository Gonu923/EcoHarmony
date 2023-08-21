// JavaScript for the EcoHarmony home page

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100, // Adjust the offset as needed
                behavior: 'smooth'
            });
        }
    });
});

// Carbon footprint calculator form submission
const calculatorForm = document.querySelector('.calculator');

if (calculatorForm) {
    calculatorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Perform calculation and display results
        // You can use this area to implement the calculator's functionality
        // For example: calculate the carbon footprint based on user inputs
        // Display the result on the page
    });
}



// Event cost calculator functionality

const attendeesInput = document.getElementById('attendees');
const priceInput = document.getElementById('price');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', calculateCost);

function calculateCost() {
    const attendees = parseInt(attendeesInput.value, 10);
    const pricePerAttendee = parseFloat(priceInput.value);
    
    if (isNaN(attendees) || isNaN(pricePerAttendee)) {
        resultElement.textContent = 'Please enter valid numbers for attendees and price.';
    } else {
        const totalCost = attendees * pricePerAttendee;
        resultElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    }
}





