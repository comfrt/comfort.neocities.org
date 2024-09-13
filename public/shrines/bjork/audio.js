let audioFiles = {};

function initAudio() {
    const audioSources = {
        'saint': 'bjork/favesaint.ogg',
        'aifol': 'bjork/faveaifol.ogg',
        'ctmdl': 'bjork/favectmdl.ogg',
        'ctmvl': 'bjork/ctmvl.ogg',
        'iry': 'bjork/faveiry.ogg',
        'pp': 'bjork/favepp.ogg',
        'pp2': 'bjork/favepp2.ogg',
        'bm': 'bjork/favebm.ogg',
        'ff': 'bjork/faveff.ogg',
        'bl': 'bjork/favebl.ogg',
        'enjoy': 'bjork/faveenjoy.ogg',
        'dc': 'bjork/favedc.ogg'
    };

    // Preload the audio files in the first click or touch event
    document.addEventListener('click', function () {
        Object.keys(audioSources).forEach(key => {
            const audio = new Audio(audioSources[key]);
            audioFiles[key] = audio;
        });
        document.removeEventListener('click', arguments.callee, false);
    }, { once: true });
}

function playAudio(key) {
    if (audioFiles[key]) {
        audioFiles[key].currentTime = 0; // Reset to the start
        audioFiles[key].play();
    }
}

window.onload = initAudio;
