const words = [
    "EXCITING",
    "DELICATE",
    "ARTISTIC", 
    "TIMELESS",
    "SPECIAL",
    "DREAMY",
    "LOCAL",
    "UNIQUE",
    "MARVELOUS",
    "NICE"
];

let currentWordIndex = 0;

function changeWord() {
    const wordElement = document.getElementById('dynamicWord');
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.textContent = words[currentWordIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(changeWord, 500);
});