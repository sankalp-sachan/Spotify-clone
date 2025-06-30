document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play");
    const audio = document.getElementById("Audio");
    const currentTimeElement = document.getElementById("current-time");
    const durationElement = document.getElementById("duration");

    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    
    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.classList.remove("fa-circle-play");
            playButton.classList.add("fa-circle-pause");
        } else {
            audio.pause();
            playButton.classList.remove("fa-circle-pause");
            playButton.classList.add("fa-circle-play");
        }
    });

    
    audio.addEventListener("timeupdate", function () {
        currentTimeElement.textContent = formatTime(audio.currentTime);
    });

    
    audio.addEventListener("loadedmetadata", function () {
        durationElement.textContent = formatTime(audio.duration);
    });
});
const progressBar = document.getElementById("progress-bar");
const audio = document.getElementById('Audio');

audio.addEventListener("timeupdate", function () {
    currentTimeElement.textContent = formatTime(audio.currentTime);

    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});
