// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

import refs from '../refferences/refs.js'
import pictureCardTmp from '../templates/picture-card-tpl'

// Change code below this line

refs.gallery.innerHTML = pictureCardTmp(galleryItems);

refs.gallery.addEventListener('click', onPictureClick);

let selectedElement = {};
function elementSelection() {
    return selectedElement
}

const sLoptions = {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    captionData: 'alt',
};

let simpleLightboxGallery = new SimpleLightbox('.gallery a', sLoptions);

// console.log(pictureCardTmp(galleryItems));




function onPictureClick(e) {
    e.preventDefault();
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'A' || e.target.nodeName === 'IMG') {
        selectedElement = e.target;
        simpleLightboxGallery.on('show.simplelightbox')
    }

}