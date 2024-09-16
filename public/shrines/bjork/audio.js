let audioFiles = {};

function initAudio() {
    const audioSources = {
        'saint': { ogg: 'bjork/favesaint.ogg', mp3: 'bjork/favesaint.mp3' },
        'aifol': { ogg: 'bjork/faveaifol.ogg', mp3: 'bjork/faveaifol.mp3' },
        'ctmdl': { ogg: 'bjork/favectmdl.ogg', mp3: 'bjork/favectmdl.mp3' },
        'ctmvl': { ogg: 'bjork/ctmvl.ogg', mp3: 'bjork/ctmvl.mp3' },
        'iry': { ogg: 'bjork/faveiry.ogg', mp3: 'bjork/faveiry.mp3' },
        'pp': { ogg: 'bjork/favepp.ogg', mp3: 'bjork/favepp.mp3' },
        'pp2': { ogg: 'bjork/favepp2.ogg', mp3: 'bjork/favepp2.mp3' },
        'bm': { ogg: 'bjork/favebm.ogg', mp3: 'bjork/favebm.mp3' },
        'ff': { ogg: 'bjork/faveff.ogg', mp3: 'bjork/faveff.mp3' },
        'bl': { ogg: 'bjork/favebl.ogg', mp3: 'bjork/favebl.mp3' },
        'enjoy': { ogg: 'bjork/faveenjoy.ogg', mp3: 'bjork/faveenjoy.mp3' },
        'dc': { ogg: 'bjork/favedc.ogg', mp3: 'bjork/favedc.mp3' }
    };

    // Create audio objects for each source, checking format support
    Object.keys(audioSources).forEach(key => {
        let audio = new Audio();
        let source = '';

        // Check if the browser can play .ogg, else fallback to .mp3
        if (audio.canPlayType('audio/ogg')) {
            source = audioSources[key].ogg;
        } else if (audio.canPlayType('audio/mpeg')) {
            source = audioSources[key].mp3;
        }

        // Only create the audio object if the source is found
        if (source) {
            audioFiles[key] = new Audio(source);
        }
    });

    // Preload the audio files without playing them
    document.addEventListener('click', function () {
        Object.values(audioFiles).forEach(audio => audio.load()); // Preload only
        document.removeEventListener('click', arguments.callee, false); // Remove listener after preload
    }, { once: true });
}

function playAudio(key) {
    if (audioFiles[key]) {
        audioFiles[key].currentTime = 0; // Reset to the start
        audioFiles[key].play();
    }
}

// Call initAudio to preload the sounds when the page is ready
window.onload = initAudio;
