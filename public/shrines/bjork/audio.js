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

    Object.keys(audioSources).forEach(key => {
        const audio = new Audio(audioSources[key]);
        audioFiles[key] = audio;


        audio.addEventListener('play', function() {
            audio.pause();
            audio.removeEventListener('play', arguments.callee, false);
        }, false);
    });


    document.addEventListener('click', function () {
        Object.values(audioFiles).forEach(audio => audio.play());
        document.removeEventListener('click', arguments.callee, false);
    }, false);
}

function playAudio(key) {
    const audio = audioFiles[key];
    if (audio) {
        audio.play();
    }
}


window.onload = initAudio;
