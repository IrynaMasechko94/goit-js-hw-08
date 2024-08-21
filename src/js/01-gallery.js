import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('ul.gallery');

const markup = galleryItems
  .map(
    item => `<li class="gallery__item">
   <a class="gallery__link" href=${item.original}>
      <img class="gallery__image" src=${item.preview} alt=${item.description} title=${item.description} />
   </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
