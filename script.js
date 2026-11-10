//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('#buttons .btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Stop any currently playing audio first
        stopSongs();

        // Get the sound name text from the clicked button
        const soundName = button.innerText.trim();

        // If it's not the stop button, play the matching audio element
        if (soundName !== 'stop') {
            const audio = document.getElementById(soundName);
            if (audio) {
                audio.play();
            }
        }
    });
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        if (song) {
            song.pause();
            song.currentTime = 0;
        }
    });
}