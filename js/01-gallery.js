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

const onGalleryCardClick = event => {
    const { target } = event;
    event.preventDefault();

    if (target.nodeName !== 'IMG') {
        return;
    }

    modal.element().querySelector('img').src = target.dataset.source;

    modal.show();
}

const closeModal = event => {
        if (event.code === "Escape") {
            modal.close();
            return;
        }
    };

const modal = basicLightbox.create(`
	<img src=""></img>
`, {
        onShow: modal => {
        document.addEventListener("keydown", closeModal);
        },
    
        onClose: modal => {
            document.removeEventListener("keydown", closeModal);
        },
    });

const gallery = document.querySelector(".gallery");
const galleryItemsList = galleryItems.map(el => createGalleryItem(el)).join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsList);
gallery.addEventListener("click", onGalleryCardClick);
