// JavaScript to Calculate the Next Birthday Countdown
const countdownDate = new Date("2024-11-03T00:00:00").getTime();

// Countdown Calculation (same as before)
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Get elements to update
    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    // Update elements with new values
    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minutesElem.innerHTML = minutes;
    secondsElem.innerHTML = seconds;

    // Add and remove class for smooth transition effect
    [daysElem, hoursElem, minutesElem, secondsElem].forEach(elem => {
        elem.classList.add("update");
        setTimeout(() => elem.classList.remove("update"), 300);
    });

    
    // Reset countdown if needed
    if (distance < 0) {
        countdownDate.setFullYear(countdownDate.getFullYear() + 1);
    }
}
// Add loaded class to body once the page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Sound Effect Elements
const clickSound = document.getElementById("clickSound");
const hoverSound = document.getElementById("hoverSound");

// Add Event Listeners for Sounds
document.querySelectorAll('button').forEach(elem => {
    elem.addEventListener('mouseover', () => hoverSound.play());
    elem.addEventListener('click', () => clickSound.play());
});



// Update countdown every second
setInterval(updateCountdown, 1000);

// Confetti Animation on Button Click
const celebrateBtn = document.querySelector('.celebrate-btn');
const specialMessage = document.querySelector('.special-message');

celebrateBtn.addEventListener('click', () => {
    // Display special message with fade-in effect
    specialMessage.style.display = 'block';
    setTimeout(() => {
        specialMessage.style.opacity = 1;
    }, 50);

    // Create confetti explosion effect
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);
    }
});


// JavaScript for Confetti Animation
const confettiContainer = document.querySelector('.confetti-container');

for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confettiContainer.appendChild(confetti);
}
