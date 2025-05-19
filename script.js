const imageCount = 125;
const imageFolder = 'images/';
const imagePrefix = 'page_';
const imageExtension = '.webp';

const images = [];
for (let i = 1; i <= imageCount; i++) {
    const paddedNumber = i.toString().padStart(3, '0');
    images.push(`${imageFolder}${imagePrefix}${paddedNumber}${imageExtension}`);
}

let currentIndex = 0;

const galleryImage = document.getElementById('gallery-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateImage() {
    galleryImage.src = images[currentIndex];
    galleryImage.onerror = () => {
        // Skip missing images
        images.splice(currentIndex, 1);
        if (currentIndex >= images.length) currentIndex = images.length - 1;
        updateImage();
    };
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
