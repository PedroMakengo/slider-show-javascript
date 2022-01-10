

import { SlideNav } from './slider.js'

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init(); 
slide.addArrow('.prev', '.next');

slide.changeSlide(3);


slide.addControl()