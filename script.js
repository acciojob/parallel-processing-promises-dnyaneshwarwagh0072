const imageUrls = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];



document.getElementById('download-images-button').addEventListener('click', () => {
    downloadImages(imageUrls)
        .then(images => {
            displayImages(images);
        })
        .catch(error => {
            console.error(error);
        });
});

function downloadImages(urls) {
    const promises = urls.map(image =>
        new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.url;
            img.onload = () => resolve(img);
            img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
        })
    );
    return Promise.all(promises);
}

function displayImages(images) {
    const outputDiv = document.getElementById('output');
    console.log(outputDiv);
    
    outputDiv.innerHTML = ''; 
    images.forEach(img => {
        outputDiv.appendChild(img);
    });
}

document.getElementById('download-images-button').addEventListener('click', () => {
    downloadImages(imageUrls)
        .then(images => {
            displayImages(images);
        })
        .catch(error => {
            console.error(error);
        });
});

function downloadImages(urls) {
    const promises = urls.map(image =>
        new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image.url;
            img.onload = () => resolve(img);
            img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
        })
    );
    return Promise.all(promises);
}

function displayImages(images) {
    const outputDiv = document.getElementById('output');
    console.log(outputDiv);
    
    outputDiv.innerHTML = ''; 
    images.forEach(img => {
        outputDiv.appendChild(img);
    });
}
