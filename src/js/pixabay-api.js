export const options = {
  method: 'GET',
};
const host = 'https://pixabay.com/api/';
const key = '43793393-3131be18ae161d81d2e9721c8';

fetch(`${host}?key=${key}`, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Not found');
    }
    return response.json;
  })
  .catch(error => {});
