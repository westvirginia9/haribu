document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', () => {
        const currentPage = button.closest('.page');
        const targetPageId = button.getAttribute('data-target');
        const targetPage = document.querySelector(targetPageId);

        currentPage.classList.add('hidden');
        targetPage.classList.remove('hidden');
    });
});

const message = "Dear mamah, Selamat Hari Ibu untuk wanita luar biasa yang selalu menjadi pelita dalam keluraga. Terima kasih atas cinta, pengorbanan, dan kekuatan yang tak pernah habis. Semoga kasih sayangmu senantiasa menjadi inspirasi bagi kita semua. Hari ini dan setiap hari, engkau adalah pahlawan sejati. Kami mencitaimu!";
const typedMessage = document.getElementById('typedMessage');
let index = 0;

function typeMessage() {
    if (index < message.length) {
        typedMessage.textContent += message.charAt(index);
        index++;
        setTimeout(typeMessage, 50);
    }
}

document.querySelector('[data-target="#page2"]').addEventListener('click', () => {
    setTimeout(typeMessage, 500);
});

const slides = document.getElementById('slides');
let slideIndex = 0;

function nextSlide() {
    const totalSlides = slides.children.length;
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 3000);

const gift = document.getElementById('gift');
const certificate = document.getElementById('certificate');

gift.addEventListener('click', () => {
    gift.classList.add('hidden');
    certificate.classList.remove('hidden');

    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${5 + Math.random() * 5}px`;
        confetti.style.height = `${5 + Math.random() * 5}px`;
        confetti.style.background = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.bottom = '0'; //buat dari bawah ye yg ini
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animation = `rise ${2 + Math.random()}s linear ${Math.random()}s forwards`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 3000);
}


