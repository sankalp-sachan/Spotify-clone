document.addEventListener("DOMContentLoaded", function () {
  // Desktop
  const playButton = document.getElementById("play");
  const audio = document.getElementById("Audio");
  const currentTimeElement = document.getElementById("current-time");
  const durationElement = document.getElementById("duration");

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  if (playButton && audio) {
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

    audio.addEventListener("loadedmetadata", function () {
      if (durationElement) durationElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", function () {
      if (currentTimeElement) currentTimeElement.textContent = formatTime(audio.currentTime);
      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
      }
    });
  }

  // Mobile
  const playButtonMobile = document.getElementById("play-mobile");
  const audioMobile = document.getElementById("Audio-mobile");

  if (playButtonMobile && audioMobile) {
    playButtonMobile.addEventListener("click", function () {
      if (audioMobile.paused) {
        audioMobile.play();
        playButtonMobile.classList.remove("fa-circle-play");
        playButtonMobile.classList.add("fa-circle-pause");
      } else {
        audioMobile.pause();
        playButtonMobile.classList.remove("fa-circle-pause");
        playButtonMobile.classList.add("fa-circle-play");
      }
    });
  }
});
