import createNav from "./footer/footer.js";
import createSlider from "./slider/slider.js";
import { navButtons } from './footer/nav-buttons-details.js';
import { images } from "./slider/slide-images.js";
import { hiddenPostcardsTexts } from "./slider/hidden-postcards-texts.js";

createNav('nav', navButtons);
createSlider('slider', images, hiddenPostcardsTexts);
