function changeMode(mode) {
    document.body.classList.remove('light-mode', 'dark-mode', 'sepia-mode');    
    document.body.classList.add(`${mode}-mode`);
}