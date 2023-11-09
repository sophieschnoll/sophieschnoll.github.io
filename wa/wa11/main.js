const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['oranges.jpg', 'lemons.jpeg', 'watermelon.jpg', 'strawberries.jpg', 'pomegranate.jpg']; 
/* Declaring the alternative text for each image file */
const altText = ['oranges with pink background', 'lemons with blue background', 'watermelons with blue background', 'strawberries with blue background', 'pomegranate with cream background']

/* Looping through images */
for (let i = 0; i < 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFiles[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });
}
/* Wiring up the Darken/Lighten button */
