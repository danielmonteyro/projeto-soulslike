document.addEventListener("DOMContentLoaded", () => {
  const bosses = [
    { id: "gwyn", name: "Gwyn, Lord of Cinder", hp: 5000, souls: 70000 },
    { id: "artorias", name: "Artorias the Abysswalker", hp: 4500, souls: 50000 },
    { id: "ornstein", name: "Dragon Slayer Ornstein", hp: 3000, souls: 25000 },
    { id: "smough", name: "Executioner Smough", hp: 3200, souls: 25000 },
    { id: "manus", name: "Manus, Father of the Abyss", hp: 6000, souls: 68000 },
    // adicione mais bosses aqui
  ];

  const wrapper = document.getElementById("carouselWrapper");

  bosses.forEach(boss => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.hp = boss.hp;
    card.dataset.souls = boss.souls;

    card.innerHTML = `
      <h2>${boss.name}</h2>
      <p>HP: <span class="hp">${boss.hp}</span></p>
      <p>Almas: <span class="souls">${boss.souls}</span></p>
      <button class="ng-btn">NG+</button>
      <button onclick="window.open('lore.html?id=${boss.id}', '_blank')">Lore</button>
    `;

    card.querySelector(".ng-btn").addEventListener("click", () => {
      const hp = card.dataset.hp = Math.floor(card.dataset.hp * 1.5);
      const souls = card.dataset.souls = Math.floor(card.dataset.souls * 1.4);
      card.querySelector(".hp").textContent = hp;
      card.querySelector(".souls").textContent = souls;
    });

    wrapper.appendChild(card);
  });

  // Carrossel
  const wrapperScroll = document.getElementById("carouselWrapper");
  const scrollAmount = 300;

  document.getElementById("prevBtn").addEventListener("click", () => {
    wrapperScroll.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    wrapperScroll.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
