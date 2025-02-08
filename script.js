function unwrapChocolate(type) {
    let messageElement = document.getElementById("message");

    if (type === 1) {
        messageElement.innerHTML = "Like our love, always sweet and comforting! Every moment with you feels like the warmth of this chocolate.";
        showFloatingHearts();
    } else if (type === 2) {
        messageElement.innerHTML = "Strong, deep, and intense—just like my feelings for you. No matter how far we are, my love for you stays rich and powerful.";
        showFloatingHearts();
    } else if (type === 3) {
        messageElement.innerHTML = "Pure, soft, and full of love—just like you. You bring light into my life, just like this creamy chocolate melts in my heart.";
        showFloatingHearts();
    }

    checkAllChocolatesUnwrapped();
}

function showFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

function checkAllChocolatesUnwrapped() {
    let messages = document.getElementById("message").innerHTML;
    if (messages.includes("Milk Chocolate") && messages.includes("Dark Chocolate") && messages.includes("White Chocolate")) {
        document.getElementById("surprise-box").classList.remove("hidden");
    }
}

function showFinalMessage() {
    document.getElementById("final-message").classList.remove("hidden");
}
