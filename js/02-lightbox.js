import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryItems = (items) => {
    const itemsList = [];
    items.forEach(element => {
        itemsList.push(`
        <a class="gallery__item" href="${element.original}">
            <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
        </a>`)
    });
    
    return itemsList.join('');
}

const onGalleryCardClick = event => {
    const { target } = event;
    event.preventDefault();

    if (target.nodeName !== 'IMG') {
        return;
    }

    var lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250, });
    lightbox.open();
}

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));
gallery.addEventListener("click", onGalleryCardClick);
