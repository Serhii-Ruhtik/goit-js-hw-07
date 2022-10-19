import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgGallery = CreateAndRenderMarkupGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', imgGallery);

function CreateAndRenderMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </div >
`;
    })
      .join('');
};

let galleryRef = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });
galleryRef.on('show.simplelightbox');












