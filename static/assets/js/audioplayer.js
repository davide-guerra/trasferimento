Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "songs": [
        {
            "name": "{{ .Params.title }}",
            "artist": "Tommaso Martino",
            "url": "https://davide-guerra.github.io/audio/{{ .Params.audio }}",
            "cover_art_url": "{{ .Params.image | relURL }}"
        },
    ]
});

window.onkeydown = function (e) {
    return !(e.keyCode == 32);
};

document.getElementById('song-played-progress').addEventListener('click', function (e) {
    var offset = this.getBoundingClientRect();
    var x = e.pageX - offset.left;

    Amplitude.setSongPlayedPercentage((parseFloat(x) / parseFloat(this.offsetWidth)) * 100);
});