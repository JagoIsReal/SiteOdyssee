// Récupérer le bouton
const backToTopButton = document.getElementById('back-to-top');

// Ajouter un événement de scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Apparition après 300px
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Remonter en haut de la page lors du clic
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Défilement fluide
  });
});
