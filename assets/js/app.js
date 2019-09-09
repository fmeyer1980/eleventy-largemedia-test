import Swup from 'swup';
import SwupScrollPlugin from '@swup/scroll-plugin';

// enable swup
const swup = new Swup({
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: true,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        }),
    ]
    
  });
  
