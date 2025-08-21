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
let completedCycles = 0;
let intervalId;

function changeWord() {
    const wordElement = document.getElementById('dynamicWord');
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.textContent = words[currentWordIndex];
    
    // Si completamos un ciclo, incrementar contador
    if (currentWordIndex === 0) {
        completedCycles++;
        
        // Después de 2 ciclos completos, cambiar a "MEET OUR BRAND"
        if (completedCycles === 2) {
            clearInterval(intervalId);
            
            setTimeout(() => {
                const messageElement = document.querySelector('.changing-message');
                messageElement.innerHTML = 'MEET OUR<br><span class="dynamic-word">BRAND!</span>';
            }, 300);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    intervalId = setInterval(changeWord, 300);
});