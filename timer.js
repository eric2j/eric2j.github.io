// https://codepen.io/stikoo/pen/GpGgdd

document.addEventListener("DOMContentLoaded", function () {

    //var duree = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--main-duration'));
    var duree = parseInt(getComputedStyle(document.querySelector('html')).getPropertyValue('--main-duration'));
    var mitemps = parseInt(getComputedStyle(document.querySelector('html')).getPropertyValue('--second-duration'));
    var ispause = false;

    var itstime = (t, ispause) => {
        document.querySelector('.after-1').style.setProperty('animation-play-state', ispause ? 'paused' : '');
        document.querySelector('.after-2').style.setProperty('animation-play-state', ispause ? 'paused' : '');
        document.querySelector('.time').innerHTML = t;
        if(ispause) beep(200,0.1)
        if(t==duree) beep(560,0.3)
        if (t == 1) {
            if (!ispause) t = mitemps + 1;
            else t = duree + 1;
            ispause = !ispause;
        }
        setTimeout(itstime, 1000, t - 1, ispause);
    }

    itstime(duree);

});

var context = new AudioContext();

function beep(frequency, delay) {
      o = context.createOscillator()
      g = context.createGain()
      o.type = 'sine'
      o.connect(g)
      o.frequency.value = frequency
      g.connect(context.destination)
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + delay)
}
