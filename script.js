document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const seasonBtns = document.querySelectorAll(".season-btn");

  /* === 1. Afficher l'année dans le footer === */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* === 2. Restaurer le thème choisi précédemment === */
  const savedTheme = localStorage.getItem("acweb-theme");
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme);
  } else {
    document.documentElement.classList.add("spring"); // thème par défaut
  }

  /* === 3. Changement de saison via les boutons === */
  seasonBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Supprimer tous les thèmes saisonniers
      document.documentElement.classList.remove("spring", "summer", "autumn", "winter");

      // Ajouter le thème choisi
      const theme = btn.dataset.theme;
      document.documentElement.classList.add(theme);

      // Sauvegarder en localStorage
      localStorage.setItem("acweb-theme", theme);
    });
  });
});

/* === 4. Effet Parallax sur l’image de fond du Hero === */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  let offset = window.scrollY * 0.07; // contrôle la vitesse du décalage
  hero.style.backgroundPositionY = `${offset}px`;
});

