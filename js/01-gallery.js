import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryItems = (items) => {
    const itemsList = [];
    items.forEach(element => {
        itemsList.push(`
        <div class="gallery__item">
            <a class="gallery__link" href="${element.original}">
                <img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/>
            </a>
        </div>`)
    });
    
    return itemsList.join('');
}

const onGalleryCardClick = event => {
    const { target } = event;
    event.preventDefault();

    if (target.nodeName !== 'IMG') {
        return;
    }

    const targetImgUrl = target.dataset.source;
    const modal = basicLightbox.create(`
	<img src="${targetImgUrl}"></img>
`)
    modal.show();

    // додаткове завдання
    const closeModal = event => {
        if (event.code === "Escape") {
            modal.close();
            document.removeEventListener("keydown", closeModal);
        }
    };
        
    document.addEventListener("keydown", closeModal);
}

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));

gallery.addEventListener("click", onGalleryCardClick);
