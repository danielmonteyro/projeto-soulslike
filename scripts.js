document.addEventListener("DOMContentLoaded", () => {
  const container = document.body;

  const gameData = {
    bossesPrincipais: [
      {
        id: "gwyn",
        name: "Gwyn, Lord of Cinder",
        baseHp: 5000,
        baseSouls: 70000,
        ngPlus: [
          { level: "NG+", hp: 6000, souls: 85000 },
          { level: "NG++", hp: 7200, souls: 100000 },
        ]
      },
      {
        id: "artorias",
        name: "Artorias the Abysswalker",
        baseHp: 4500,
        baseSouls: 50000,
        ngPlus: [
          { level: "NG+", hp: 5400, souls: 65000 },
          { level: "NG++", hp: 6300, souls: 80000 },
        ]
      },
      {
        id: "gwyn",
        name: "Gwyn, Lord of Cinder",
        baseHp: 5000,
        baseSouls: 70000,
        ngPlus: [
          { level: "NG+", hp: 6000, souls: 85000 },
          { level: "NG++", hp: 7200, souls: 100000 },
        ]
      },
      {
        id: "artorias",
        name: "Artorias the Abysswalker",
        baseHp: 4500,
        baseSouls: 50000,
        ngPlus: [
          { level: "NG+", hp: 5400, souls: 65000 },
          { level: "NG++", hp: 6300, souls: 80000 },
        ]
      },
      {
        id: "gwyn",
        name: "Gwyn, Lord of Cinder",
        baseHp: 5000,
        baseSouls: 70000,
        ngPlus: [
          { level: "NG+", hp: 6000, souls: 85000 },
          { level: "NG++", hp: 7200, souls: 100000 },
        ]
      },
      {
        id: "artorias",
        name: "Artorias the Abysswalker",
        baseHp: 4500,
        baseSouls: 50000,
        ngPlus: [
          { level: "NG+", hp: 5400, souls: 65000 },
          { level: "NG++", hp: 6300, souls: 80000 },
        ]
      }
    ],
    bossesOpcionais: [
      {
        id: "manus",
        name: "Manus, Father of the Abyss",
        baseHp: 6000,
        baseSouls: 68000,
        ngPlus: [
          { level: "NG+", hp: 7000, souls: 80000 },
          { level: "NG++", hp: 8200, souls: 95000 },
        ]
      }
    ],
    npcs: [
      {
        id: "solaire",
        name: "Solaire of Astora",
        baseHp: 1200,
        baseSouls: 0,
        ngPlus: []
      }
    ],
    mobs: [
      {
        id: "hollow",
        name: "Hollow Warrior",
        baseHp: 300,
        baseSouls: 50,
        ngPlus: [
          { level: "NG+", hp: 350, souls: 70 },
          { level: "NG++", hp: 420, souls: 90 },
        ]
      }
    ]
  };

  for (const categoria in gameData) {
    const section = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = formatarTitulo(categoria);
    section.appendChild(title);

    const carouselContainer = document.createElement("div");
    carouselContainer.className = "carousel-container";

    const prevBtn = document.createElement("button");
    prevBtn.className = "arrow left";
    prevBtn.textContent = "←";

    const nextBtn = document.createElement("button");
    nextBtn.className = "arrow right";
    nextBtn.textContent = "→";

    const wrapper = document.createElement("div");
    wrapper.className = "carousel-wrapper";

    gameData[categoria].forEach((char) => {
      let ngIndex = 0;

      const card = document.createElement("div");
      card.className = "card";

      const hpSpan = document.createElement("span");
      const soulSpan = document.createElement("span");

      hpSpan.textContent = char.baseHp;
      soulSpan.textContent = char.baseSouls;

      card.innerHTML = `
        <h3>${char.name}</h3>
        <p>HP: <span class="hp">${hpSpan.textContent}</span></p>
        <p>Almas: <span class="souls">${soulSpan.textContent}</span></p>
        <button class="ng-btn">${char.ngPlus.length > 0 ? char.ngPlus[0].level : "NG+"}</button>
        <button onclick="window.open('lore.html?id=${char.id}', '_blank')">Lore</button>
      `;

      const ngBtn = card.querySelector(".ng-btn");
      const hpDisplay = card.querySelector(".hp");
      const soulsDisplay = card.querySelector(".souls");

      ngBtn.addEventListener("click", () => {
        if (char.ngPlus.length === 0) return;
        ngIndex = (ngIndex + 1) % char.ngPlus.length;
        const stats = char.ngPlus[ngIndex];
        hpDisplay.textContent = stats.hp;
        soulsDisplay.textContent = stats.souls;
        ngBtn.textContent = stats.level;
      });

      wrapper.appendChild(card);
    });

    const updateArrows = () => {
      const scrollLeft = wrapper.scrollLeft;
      const maxScrollLeft = wrapper.scrollWidth - wrapper.clientWidth;
      prevBtn.style.visibility = scrollLeft <= 0 ? "hidden" : "visible";
      nextBtn.style.visibility = scrollLeft >= maxScrollLeft - 1 ? "hidden" : "visible";
    };

    carouselContainer.addEventListener("mouseenter", () => {
      updateArrows();
      prevBtn.classList.add("show");
      nextBtn.classList.add("show");
    });

    carouselContainer.addEventListener("mouseleave", () => {
      prevBtn.classList.remove("show");
      nextBtn.classList.remove("show");
    });

    wrapper.addEventListener("scroll", updateArrows);

    prevBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      wrapper.scrollBy({ left: 300, behavior: "smooth" });
    });

    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(wrapper);
    carouselContainer.appendChild(nextBtn);

    section.appendChild(carouselContainer);
    container.appendChild(section);
  }

  function formatarTitulo(categoria) {
    switch (categoria) {
      case "bossesPrincipais": return "Bosses Principais";
      case "bossesOpcionais": return "Bosses Opcionais";
      case "npcs": return "NPCs";
      case "mobs": return "Inimigos Comuns (Mobs)";
      default: return categoria;
    }
  }
});
