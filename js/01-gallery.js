import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryItems = (items) => {
    const itemsList = [];
    items.forEach(element => {
        itemsList.push(`
        <div class="gallery__item">
            <a class="gallery__link" href="#">
                <img class="gallery__image" src="${element.preview}" data-original="${element.original}" alt="${element.description}"></img>
            </a>
        </div>`)
    });
    
    return itemsList.join('');
}

const onGalleryCardClick = event => {
    const { target } = event;

    if (target.nodeName !== 'IMG') {
        return;
    }
    
    const targetImgUrl = target.dataset.original;
    const modal = basicLightbox.create(`
	<img src="${targetImgUrl}"></img>
`)
    modal.show();
}

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

gallery.addEventListener("click", onGalleryCardClick)