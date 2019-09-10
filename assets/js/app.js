import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
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
        new SwupPreloadPlugin()
    ]
    
});
swup.cache.getCurrentPage();
swup.cache.exists('/docs'); 
swup.cache.cacheUrl({
    title: 'Page title',    
    pageClass: 'body-class',
    originalContent: 'html content of page',
    blocks: ['<div id="swup"></div>'], 
    responseURL: '/redirected-url'
});


new Glide('.glide').mount()
AOS.init();