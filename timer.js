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
        if (t == 1) {
            if (!ispause) t = mitemps + 1;
            else t = duree + 1;
            ispause = !ispause;
        }
        setTimeout(itstime, 1000, t - 1, ispause);
    }

    itstime(duree);

});


function example4(frequency, type) {
    o = context.createOscillator()
    g = context.createGain()
    o.type = type
    o.connect(g)
    o.frequency.value = frequency
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
}