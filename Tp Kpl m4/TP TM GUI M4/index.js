function changeMode(mode) {
    document.body.classList.remove('light-mode', 'dark-mode', 'sepia-mode');    
    document.body.classList.add(`${mode}-mode`);
}

let currentFontSize = 16; 

function changeFontSize(action) {
  
    const textOutput = document.getElementById('text-output'); 
    
    if (action === 'increase') {
        currentFontSize += 2; 
    } else if (action === 'decrease') {
        if (currentFontSize > 10) { 
            currentFontSize -= 2; 
        }
    }
    
    textOutput.style.fontSize = currentFontSize + 'px';
}