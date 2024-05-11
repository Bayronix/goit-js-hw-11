import { showLoader, updateUi } from './render-functions';

export async function fetchImageData(searchRequest) {
  const apiKey = '43793393-3131be18ae161d81d2e9721c8';
  const apiRequestURL = `https://pixabay.com/api/?key=${apiKey}&q=${searchRequest}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    showLoader(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(apiRequestURL);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const images = data.hits;
    updateUi(images);
  } catch (error) {
    console.error(error);
  } finally {
    showLoader(false);
  }
}
