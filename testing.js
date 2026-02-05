// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

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

// Logic to move the NO button

noBtn.addEventListener("mouseenter", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * 2 * Math.PI;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = 'translate(${moveX}px, ${moveY}px)';
});


// YES button click event

yesBtn.addEventListener("click", () => {
    title.textContent = "Yay! Meow you are awesome!";
    catImg.src = "final-cat.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = 'none';
    finalText.style.display = 'block';
});


