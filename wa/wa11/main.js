const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['oranges.jpg', 'lemons.jpeg', 'watermelon.jpg', 'strawberries.jpeg', 'pomegranate.jpeg']; 
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
btn.addEventListener('click', () => {
    if(btn.getAttribute('class') === "Dark") {
        btn.setAttribute('class', "Light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', "Dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})