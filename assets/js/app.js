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
swup.cache.cacheUrl({
    title: 'Page title',    
    pageClass: 'body-class',
    originalContent: 'html content of page',
    blocks: ['<div id="swup"></div>'], 
    responseURL: '/redirected-url'
});
swup.cache.getCurrentPage();
swup.cache.getPage('/docs');
swup.cache.exists('/docs');
swup.cache.remove('/docs');
swup.cache.empty();


// export class Cache {
// 	constructor() {
// 		this.pages = {};
// 		this.last = null;
// 	}

// 	cacheUrl(page) {
// 		if (page.url in this.pages === false) {
// 			this.pages[page.url] = page;
// 		}
// 		this.last = this.pages[page.url];
// 		this.swup.log(`Cache (${Object.keys(this.pages).length})`, this.pages);
// 	}

// 	getPage(url) {
// 		return this.pages[url];
// 	}

// 	getCurrentPage() {
// 		return this.getPage(window.location.pathname + window.location.search);
// 	}

// 	exists(url) {
// 		return url in this.pages;
// 	}

// 	empty() {
// 		this.pages = {};
// 		this.last = null;
// 		this.swup.log('Cache cleared');
// 	}

// 	remove(url) {
// 		delete this.pages[url];
// 	}
// }
// export default Cache;

new Glide('.glide').mount()
AOS.init();

document.addEventListener('swup:contentReplaced', function () {
    new Glide('.glide').mount()
    AOS.init();
});