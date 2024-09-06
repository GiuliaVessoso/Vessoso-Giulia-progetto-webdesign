// Funzione per aprire/chiudere il menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    navLinks.classList.toggle('active');

    // Cambia l'icona da hamburger a X
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '&#10006;'; // X
    } else {
        menuIcon.innerHTML = '&#9776;';  // Hamburger (☰)
    }
    
    console.log('Menu toggled!');  // Messaggio di controllo per verificare il click
}

// Aggiungi l'evento click all'icona del menu
const menuIcon = document.querySelector('.menu-icon');
if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
}

// Mostra il popup quando la pagina è completamente caricata
window.addEventListener('load', function() {
    var popup = document.getElementById('discount-popup');
    var closeButton = document.querySelector('.close-btn');
    
    if (popup) {
        popup.style.display = 'flex'; // Mostra il popup
        
        // Chiudi il popup quando si clicca sul pulsante di chiusura
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                popup.style.display = 'none';
            });
        }
        
        // Chiudi il popup quando si clicca fuori dal contenuto del popup
        window.addEventListener('click', function(event) {
            if (event.target === popup) {
                popup.style.display = 'none';
            }
        });
    }
});


