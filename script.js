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
    "ÉPICO"
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
        
        // Después de 2 ciclos completos, aplicar efecto glitch real y cambiar a "MEET OUR BRAND"
        if (completedCycles === 2) {
            clearInterval(intervalId);
            
            // Iniciar glitch real con caracteres aleatorios
            startGlitchTransition();
        }
    }
}

// Función para el efecto glitch real estilo 90s
function startGlitchTransition() {
    const messageElement = document.querySelector('.changing-message');
    const targetText = 'MEET OUR<br>BRAND';
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    
    messageElement.classList.add('glitching');
    
    let glitchCount = 0;
    const maxGlitches = 3;
    
    const glitchInterval = setInterval(() => {
        // Flash de caracteres aleatorios
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
        
        // Flash súper rápido y listo
        if (glitchCount >= maxGlitches) {
            clearInterval(glitchInterval);
            messageElement.classList.remove('glitching');
            messageElement.innerHTML = 'CONOCE<br>NUESTRA<br><span class="dynamic-word">MARCA</span>';
        }
    }, 40);
}

document.addEventListener('DOMContentLoaded', () => {
    intervalId = setInterval(changeWord, 300);
});