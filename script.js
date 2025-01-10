const imageUrls = [
    { url: 'https://i.redd.it/8pkohui3he821.jpg' },
    { url: 'https://wonderfulengineering.com/wp-content/uploads/2016/02/wallpaper-background-2.jpg' },
    { url: 'https://res.allmacwallpaper.com/get/iMac-27-inch-wallpapers/Godafoss,-Iceland-2560x1440/19538-10.jpg' }
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
    
    outputDiv.innerHTML = ''; // Clear any previous images

    images.forEach(img => {
        outputDiv.appendChild(img);
    });
}
