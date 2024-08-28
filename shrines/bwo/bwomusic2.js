document.querySelectorAll('.music-player2').forEach(player => {
    const audioPlayer = player.querySelector('.audio-player2');
    const playPauseButton = player.querySelector('.play-pause2');
    const seekBar = player.querySelector('.seek-bar2');
    const currentTimeSpan = player.querySelector('.current-time2');
    const totalTimeSpan = player.querySelector('.total-time2');

    audioPlayer.addEventListener('loadedmetadata', () => {
        if (audioPlayer.duration) {
            seekBar.max = audioPlayer.duration;
            totalTimeSpan.textContent = formatTime(audioPlayer.duration);
            resetPlayer();
        }
    });

    audioPlayer.addEventListener('timeupdate', updateSeekBar);

    seekBar.addEventListener('input', () => {
        audioPlayer.currentTime = seekBar.value;
        updateSeekBar();
    });

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.classList.add('pause');
        } else {
            audioPlayer.pause();
            playPauseButton.classList.remove('pause');
        }
    });

    function updateSeekBar() {
        seekBar.value = audioPlayer.currentTime;
        currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
    }

    function resetPlayer() {
        audioPlayer.currentTime = 0;
        seekBar.value = 0;
        currentTimeSpan.textContent = formatTime(0);
        playPauseButton.classList.remove('pause');
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        if (seconds < 10) seconds = '0' + seconds;
        return minutes + ':' + seconds;
    }
});
