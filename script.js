const words = [
    "INCREÍBLE",
    "ESPECIAL",
    "ÚNICO",
    "ARTÍSTICO",
    "GENIAL",
    "INNOVADOR",
    "LOCAL",
    "CREATIVO",
    "FANTÁSTICO",
    "ÉPICO",
    "BRUTAL",
    "SALVAJE",
    "POTENTE",
    "DISRUPTIVO",
    "FRESCO",
    "MODERNO",
    "AUDAZ",
    "ORIGINAL",
    "ELEGANTE",
    "SORPRENDENTE"
];

let currentWordIndex = 0;
let completedCycles = 0;
let intervalId;

function changeWord() {
    const wordElement = document.getElementById('dynamicWord');
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.textContent = words[currentWordIndex];
    
    if (currentWordIndex === 0) {
        completedCycles++;
        
        if (completedCycles === 1) {
            clearInterval(intervalId);
            startGlitchTransition();
        }
    }
}

function startGlitchTransition() {
    const messageElement = document.querySelector('.changing-message');
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    
    messageElement.classList.add('glitching');
    
    let glitchCount = 0;
    const maxGlitches = 3;
    
    const glitchInterval = setInterval(() => {
        let glitchedText = '';
        const lines = ['ALGO', 'ÉPICO', 'SE VIENE!'];
        
        for (let line of lines) {
            for (let char of line) {
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            glitchedText += '<br>';
        }
        
        messageElement.innerHTML = glitchedText;
        glitchCount++;
        
        if (glitchCount >= maxGlitches) {
            clearInterval(glitchInterval);
            messageElement.classList.remove('glitching');
            messageElement.innerHTML = 'CONOCE<br>NUESTRA<br><span class="dynamic-word">MARCA</span>';
        }
    }, 40);
}

document.addEventListener('DOMContentLoaded', () => {
    intervalId = setInterval(changeWord, 200);
});