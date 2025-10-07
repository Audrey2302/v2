document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const seasonBtns = document.querySelectorAll(".season-btn");
  const snowContainer = document.querySelector(".snowflakes");
  const root = document.documentElement;

  /* === 1. Afficher l'année dans le footer === */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* === 2. Restaurer le thème choisi précédemment === */
  const savedTheme = localStorage.getItem("acweb-theme");

// détecter la saison selon la date actuelle
const month = new Date().getMonth();
let season = "spring";

if (month >= 2 && month <= 4) season = "spring"; // mars à mai
else if (month >= 5 && month <= 7) season = "summer"; // juin à août
else if (month >= 8 && month <= 10) season = "autumn"; // sept à nov
else season = "winter"; // déc à fév

// on met à jour le thème à chaque chargement
root.classList.remove("spring", "summer", "autumn", "winter");
root.classList.add(season);
localStorage.setItem("acweb-theme", season);


  /* === 3. Fonction pour générer les flocons selon la saison === */
  function generateFlakes() {
  if (!snowContainer) return;
  snowContainer.innerHTML = ""; // vide les anciens

  const flakeCount = 40;
  let emoji = "❄️";

  if (root.classList.contains("spring")) emoji = "🌸";
  else if (root.classList.contains("summer")) emoji = "☀️";
  else if (root.classList.contains("autumn")) emoji = "🍂";
  else if (root.classList.contains("winter")) emoji = "❄️";

  for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.textContent = emoji;

    flake.style.setProperty("--left", `${Math.random() * 100}%`);
    flake.style.setProperty("--duration", `${8 + Math.random() * 10}s`);
    flake.style.setProperty("--opacity", `${0.1 + Math.random() * 0.4}`);
    flake.style.setProperty("--fontSize", `${10 + Math.random() * 20}px`);

    // 💡 délai aléatoire pour un démarrage fluide
    flake.style.animationDelay = `${Math.random() * 10}s`;

    snowContainer.appendChild(flake);
  }
}

  /* === 4. Changement de saison via les boutons === */
  seasonBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      root.classList.remove("spring", "summer", "autumn", "winter");
      const theme = btn.dataset.theme;
      root.classList.add(theme);
      localStorage.setItem("acweb-theme", theme);
      generateFlakes(); // 🔥 met à jour les emojis
    });
  });

  /* === 5. Génération initiale des flocons === */
  generateFlakes();

  /* === 6. Effet Parallax sur l’image de fond du Hero === */
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    let offset = window.scrollY * 0.07;
    hero.style.backgroundPositionY = `${offset}px`;
  });
});