function randomMath(min = 1, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", () => {
    let submitBtn = document.querySelector(".submitBtn");
    let result = document.querySelector(".result");
    let remainingGuesses = 3; // Initialize remaining guesses

    submitBtn.addEventListener("click", () => {
        if (remainingGuesses > 0) {
            let inputNumber = parseInt(document.querySelector("#inputNumber").value);

            if (!isNaN(inputNumber)) {
                let numberRandom = randomMath();
                remainingGuesses--;

                if (numberRandom === inputNumber) {
                    result.textContent = "You Win";
                } else if (numberRandom > inputNumber) {
                    result.textContent = "Correct answer is greater!";
                } else {
                    result.textContent = "Correct answer is smaller!";
                }

                if (remainingGuesses === 0) {
                    submitBtn.disabled = true;
                    result.textContent = "Game Over";
                }

                setTimeout(() => {
                    result.textContent = "";
                }, 3000);
            } else {
                result.textContent = "Please enter a valid number";

                setTimeout(() => {
                    result.textContent = "";
                }, 3000);
            }
        }
    });
});
