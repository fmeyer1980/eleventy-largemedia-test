import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import Glide from '@glidejs/glide';


// enable swup
const swup = new Swup({
    cache: true,
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

swup.cache.cacheUrl({
    title: 'Page title',    
    pageClass: 'body-class',
    originalContent: 'html content of page',
    blocks: ['<div id="swup"></div>'], 
    responseURL: '/redirected-url'
});


new Glide('.glide').mount()
AOS.init();

document.addEventListener('swup:contentReplaced', function () {
    new Glide('.glide').mount()
    AOS.init();
});