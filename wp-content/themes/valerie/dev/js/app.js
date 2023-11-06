import  FilterResources from './modules/training-edu-resources';
import 'waypoints/lib/noframework.waypoints.min.js';
import './modules/smooth-scroll';
import './modules/nav';
import './modules/form';
import './modules/flickity';
import './modules/gallery-lightbox';
import './modules/gallery-lightbox-new';
import './modules/working-groups';
import './modules/about-scroll-nav';
import './modules/core-facilities';
import './modules/jobs';
import './modules/events';
import './modules/event-toggle';
import './modules/cookie-banner';

document.addEventListener('DOMContentLoaded', () => {
  const filterResources = document.querySelector('[filter-resources]')

  if (filterResources) {
    new FilterResources(filterResources)
  }
})
