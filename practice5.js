'use strict';

function AudioPlayer(volume) {
    var _volume = 0;

    function validVolume(volume) {
        volume = parseInt(volume);
        if (!isNaN(volume) && volume >= 0 && volume <= 100) {
            _volume = volume;
        }
    }
    validVolume(volume);
    this.volume = function (volume) {
        if (volume === undefined) {
            return _volume;
        } else {
            validVolume(volume);
        }
    };
}

var coolPlayer = new AudioPlayer(23);
console.log(coolPlayer.volume());
coolPlayer.volume(true);
console.log(coolPlayer.volume());
coolPlayer.volume(-1);
console.log(coolPlayer.volume());
coolPlayer.volume(101);
console.log(coolPlayer.volume());
coolPlayer.volume(null);
console.log(coolPlayer.volume());
coolPlayer.volume(undefined);
console.log(coolPlayer.volume());
coolPlayer.volume(0);
console.log(coolPlayer.volume());
coolPlayer.volume(100);
console.log(coolPlayer.volume());
coolPlayer.volume('50');
console.log(coolPlayer.volume());
coolPlayer.volume('45tyt');
console.log(coolPlayer.volume());