const images = [
    'images/image1.jpg', // Replace with your image paths
    'images/image2.jpg',
    'images/image3.jpg'
    // Add more image paths as needed
];

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateImage() {
    galleryImage.src = images[currentIndex];
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize the gallery
updateImage();
