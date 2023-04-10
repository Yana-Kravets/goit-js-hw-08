import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const KEY_TIME = 'videoplayer-current-time';

const startTime = localStorage.getItem(KEY_TIME)
  ? Number(localStorage.getItem(KEY_TIME))
  : 0;

player.setCurrentTime(startTime);

player.on('timeupdate', throttle( e => {
    localStorage.setItem(KEY_TIME, e.seconds);
  }, 1000)
);

