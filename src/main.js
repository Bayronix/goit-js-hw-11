import './js/pixabay-api';
import { fetchImageData } from './js/pixabay-api';
import './js/render-functions';
import { showNotification, updateUi, showLoader } from './js/render-functions';
export const refs = {
  searchForm: document.querySelector('.search-bar-form'),
  searchInput: document.querySelector('#search-bar'),
  searchButton: document.querySelector('button'),
  galleryList: document.querySelector('.gallery-list'),
};
let userSearchRequestValue = '';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  userSearchRequestValue = refs.searchInput.value.trim();
  if (userSearchRequestValue === '') {
    showNotification('Please enter a search term.');
    return;
  }

  showLoader(true);
  setTimeout(() => {
    try {
      fetchImageData(userSearchRequestValue)
        .then(images => {
          updateUi(images);
          if (refs.galleryList.childElementCount <= 0) {
            console.error(error);
          }
        })
        .catch(() => {
          showNotification('An error occurred while fetching images.');
        })
        .finally(() => {
          setTimeout(() => {
            showLoader(false);
          });
        });
    } catch (error) {
      console.error('An unexpected error occurred.');
    }
  }, 1000);
});
