
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// NO button escapes!
function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.max(padding, randomX) + "px";
    noBtn.style.top = Math.max(padding, randomY) + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});

// YES button!
yesBtn.addEventListener("click", () => {
    document.querySelector("h1").textContent =
        "YAAAAAY!!! 💖";

    response.innerHTML =
        "I LOVE YOU SO MUCH! 💍🥹💗";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});
