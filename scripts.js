// Seleziona elementi DOM
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown');

// Funzione per aggiornare l'icona del toggle button
function updateToggleIcon(isOpen) {
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

// Gestisci il click sul toggle button
toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    updateToggleIcon(isOpen);
};

// Gestisci il click sui link del menu a discesa
const dropdownLinks = document.querySelectorAll('.dropdown a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        dropDownMenu.classList.remove('open');
        updateToggleIcon(false);
    });
});
// Quando la pagina è caricata, esegui il seguente codice
document.addEventListener("DOMContentLoaded", function() {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Mostra il bottone quando si scrolla oltre 20px
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block"; // Mostra il bottone
        } else {
            backToTopBtn.style.display = "none"; // Nasconde il bottone
        }
    };

  

