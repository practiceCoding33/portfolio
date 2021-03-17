let photo = document.querySelector('#scroll-img');
let next = document.querySelector("#next");
let prev = document.querySelector("#previous");
let buttons = [next, prev];
let photos = ['/images/self.jpg', '/images/shire.jpg', '/images/puppy.jpg'];

window.onload = () => {
    photo.src = photos[0];
};

let changePhoto = (e) => {
    let numPhotos = photos.length - 1;
    let url = location.protocol + '//' + location.host;
    let photoSrc = photo.src.replace(url, ''); 
    let photoIndex = photos.indexOf(photoSrc);
    
    if (e.target.id == 'next') {
        if (photoIndex < numPhotos) {
            photo.src = photos[photoIndex + 1];
        } else {
            photo.src = photos[0];
        }
    } else if (e.target.id == 'previous') {
        if (photoIndex > 0) {
            photo.src = photos[photoIndex - 1];
        } else {
            photo.src = photos[numPhotos];
        }
    };
};

buttons.forEach((btn) => {
    btn.addEventListener('click', changePhoto);
});

