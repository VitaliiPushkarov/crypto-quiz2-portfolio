let currentSlideIndex = 0;
let totalSlides;

function updateProgress() {
    const progressElement = document.querySelector('.progress');
    const progress = (currentSlideIndex / (totalSlides - 1)) * 100;
    progressElement.style.width = progress + '%';
}

function nextSlide(nextId) {
    const currentSlide = document.querySelector('.slide.active');
    const nextSlide = document.getElementById(nextId);

    if (currentSlide && nextSlide) {
        currentSlide.classList.add('prev');
        nextSlide.classList.add('next', 'active');

        setTimeout(() => {
            currentSlide.classList.remove('active', 'prev');
            nextSlide.classList.remove('next');
            currentSlideIndex++;
            updateProgress();
        }, 600); // Время перехода должно соответствовать времени в CSS
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to create a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  
    // Function to get a cookie
    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
  
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptCookiesButton = document.getElementById('accept-cookies');
    var declineButton = document.getElementById('decline');
  
    // Check if the user has already accepted cookies
    if (getCookie("cookies_accepted") !== "true") {
        if (cookieBanner) cookieBanner.style.display = 'block';
    }
  
    // Handle the accept button click
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', function () {
            setCookie("cookies_accepted", "true", 365);
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
  
    // Handle the decline button click
    if (declineButton) {
        declineButton.addEventListener('click', function () {
            if (cookieBanner) cookieBanner.style.display = 'none';
        });
    }
  });
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Регулярное выражение для проверки email

    if (!name) {
        alert('Пожалуйста, введите ваше имя.');
        return false;
    }

    if (!email || !emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный адрес электронной почты.');
        return false;
    }

    window.location.href = 'thankyou.html';
    return true;
}
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    updateProgress();
});