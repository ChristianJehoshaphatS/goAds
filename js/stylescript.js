// gototop reaction
window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.getElementById('scrollToTopButton').addEventListener('click', scrollToTop);



