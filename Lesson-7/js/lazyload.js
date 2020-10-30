//Get all the images with the date-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//This is setting up the optional perameters for IntersectionalObserver
const imgOptions = {
    threshold: 4,
    rootMargin: '0px 0px 50px 0px'
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//We need to check to see that Intersection Observer is supported 
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
 } else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
 }


