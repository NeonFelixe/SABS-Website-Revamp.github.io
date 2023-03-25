const images = document.querySelectorAll('img');

const options = {
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');

            img.setAttribute('src', src);
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(img => {
    observer.observe(img);
});
