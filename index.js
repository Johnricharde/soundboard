// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
    let html = /*HTML*/ `
    
    <audio id="audio-tag" controls>
    <source id="audio-source" src="" type="audio/mpeg">
    </audio><br>
    
    <button onclick="playSound('/audio/bubbles.mp3')">Bubbles</button>
    <button onclick="playSound('/audio/clay.mp3')">Clay</button><br>
    <button onclick="playSound('/audio/confetti.mp3')">Confetti</button>
    <button onclick="playSound('/audio/glimmer.mp3')">Glimmer</button><br>
    <button onclick="playSound('/audio/moon.mp3')">Moon</button>
    <button onclick="playSound('/audio/ufo.mp3')">Ufo</button>
    `
    app.innerHTML = html
}

// CONTROLLER ///////////////////////////////////////////////////////////////////////////
// Changes mp3 file, loads it, then plays it
function playSound(soundURL) {
    let audioTag = document.getElementById('audio-tag');
    let audioSource = document.getElementById('audio-source');

    audioSource.src = soundURL;
    audioTag.load();
    audioTag.play();
}

