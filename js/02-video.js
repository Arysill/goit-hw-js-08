import Player from '@vimeo/player';
import throttle from 'lodas.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'video-current-time-local';

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) || 0);

const saveTimeThrottled = throttle(currentTime => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
}, 1000);

prayer.on('timepdate', function (data) {
    saveTimeThrottled(data.seconds);
});