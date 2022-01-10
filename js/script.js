

import { SlideNav } from './slider.js'

const slide = new SlideNav('.slide', '.slide-wrapper');

slide.init(); 

slide.changeSlide(3);

// slide.activeNextSlide();
slide.activePrevSlide();
slide.addArrow('.prev', '.next');