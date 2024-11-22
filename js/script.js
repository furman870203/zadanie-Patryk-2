'use strict';
function showPhoto(event) {
    const photo = event.currentTarget;
    const fullSize = photo.getAttribute('data-fullSize');
    const previev = document.querySelector('#previev');
    previev.setAttribute('src', fullSize);
    const title = document.querySelector('h2');
    title.innerHTML = photo.getAttribute('alt');
    const country = document.querySelector('p');
    country.innerHTML = photo.getAttribute('country');
}

const allPhotos = document.querySelectorAll('.photo img');

for (let photo of allPhotos) {
    photo.addEventListener('click', showPhoto);




} 