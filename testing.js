// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


// Envelope click event

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";


    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

noBtn.addEventListener("mouseenter", () => {
    const min = 150;
    const max = 400;

    const distance = Math.random() * (max - min) + min;
    let angle = Math.random() * 2 * Math.PI;

    const btnRect = noBtn.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;

    let newX = btnRect.left + moveX;
    let newY = btnRect.top + moveY;

    // Bounce off edges
    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + btnRect.width > viewportWidth) newX = viewportWidth - btnRect.width;
    if (newY + btnRect.height > viewportHeight) newY = viewportHeight - btnRect.height;

    // Avoid YES button
    const buffer = 20;
    if (
        newX < yesRect.right + buffer &&
        newX + btnRect.width > yesRect.left - buffer &&
        newY < yesRect.bottom + buffer &&
        newY + btnRect.height > yesRect.top - buffer
    ) {
        // Pick a **new random angle** if it collides
        angle = Math.random() * 2 * Math.PI;
        moveX = Math.cos(angle) * distance;
        moveY = Math.sin(angle) * distance;

        newX = btnRect.left + moveX;
        newY = btnRect.top + moveY;

        // Keep inside screen
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX + btnRect.width > viewportWidth) newX = viewportWidth - btnRect.width;
        if (newY + btnRect.height > viewportHeight) newY = viewportHeight - btnRect.height;
    }

    // Apply transform
    moveX = newX - btnRect.left;
    moveY = newY - btnRect.top;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// YES button click event

yesBtn.addEventListener("click", () => {
    title.textContent = "Thanks for clicking YES!♡";
    catImg.src = "cat-dancing.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = 'none';
    finalText.style.display = 'block';

    // 🎊 Confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 } // start from middle-top
    });
});


