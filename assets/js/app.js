import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import Glide from '@glidejs/glide';


// enable swup
const swup = new Swup({
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: true,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        }),
        new SwupPreloadPlugin(),
        new SwupBodyClassPlugin(),
    ]
    
});

new Glide('.glide').mount()
AOS.init();

document.addEventListener('swup:contentReplaced', function () {
    new Glide('.glide').mount()
    AOS.init();
});