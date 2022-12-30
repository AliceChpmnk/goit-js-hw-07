import { galleryItems } from './gallery-items.js';
// Change code below this line
const createGalleryItem = ({ preview, original, description } = {}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>
  `;
};

const galleryItemsList = galleryItems.map(el => createGalleryItem(el)).join('');
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', galleryItemsList);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });