const messages = [
    "No",
    "Are you sure?",
    "Think again 😢",
    "Please 🥺",
    "Don't break my heart 💔",
    "Last chance 😭"
];

let messageIndex = 0;

const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");
const catImage = document.getElementById("catImage");

const maxFontSize = 120;

noButton.addEventListener("mouseenter", () => {

    catImage.src = "cat3.png";
    catImage.classList.add("sad");
    catImage.classList.remove("laugh");

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // YES grows with limit
    const size = parseFloat(
        window.getComputedStyle(yesButton).fontSize
    );
    yesButton.style.fontSize =
        `${Math.min(size * 1.2, maxFontSize)}px`;
});

function handleYesClick() {
    document.body.innerHTML = `
        <div class="container">
            <h1>I knew it 💖</h1>
            <img src="cat1.png" class="image laugh">
        </div>
    `;
};

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 600);
