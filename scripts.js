var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Numero di slide visibili alla volta
        loop: true, // Abilita il looping continuo
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Intervallo tra una slide e l'altra (in millisecondi)
            disableOnInteraction: false, // Continua l'autoplay anche dopo interazioni
        },
    });

	

    // Seleziona l'icona del menu e il menu stesso
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    // Funzione per aprire/chiudere il menu
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Funzione per chiudere il menu quando viene cliccato un link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });



	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = 150; // Altezza del menu fisso

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});
	


