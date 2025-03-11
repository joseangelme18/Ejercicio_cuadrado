// Seleccionamos el botón, el cuadrado y el audio
const playButton = document.getElementById('playButton');
const cuadrado = document.getElementById('cuadrado');
const audio = document.getElementById('audio');

// Cuando se hace clic en el botón PLAY
playButton.addEventListener('click', function() {
    // Reproducir la música
    audio.play();
    
    // Mostrar el cuadrado y comenzar la animación
    cuadrado.style.display = 'flex'; // Mostramos el cuadrado
    cuadrado.style.animationPlayState = 'running'; // Iniciamos la animación

    // Cambiar el color de fondo gradualmente
    document.body.style.backgroundColor = "#3498db"; // Cambiar a un color bonito (puedes poner otros colores)

    // Cambiar el texto del botón para poner "PAUSE"
    playButton.textContent = "PAUSE";

    // Alternar entre PLAY y PAUSE
    playButton.removeEventListener('click', arguments.callee);
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "PAUSE";
        } else {
            audio.pause();
            playButton.textContent = "PLAY";
        }
    });
});
