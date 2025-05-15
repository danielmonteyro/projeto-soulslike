document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("preview-sections");

  const jogos = [
    { titulo: "Dark Souls I", data: gameDataDS1, link: "./ds1.html" },
    { titulo: "Dark Souls II", data: gameDataDS2, link: "ds2.html" },
    { titulo: "Dark Souls III", data: gameDataDS3, link: "ds3.html" }
  ];

  jogos.forEach(jogo => {
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.textContent = jogo.titulo;
    section.appendChild(h2);

    const wrapper = document.createElement("div");
    wrapper.className = "carousel-wrapper";

    const categoria = "bossesPrincipais"; // ou npcs, mobs, etc.
    const personagens = jogo.data[categoria]?.slice(0, categoria.length) || [];

    personagens.forEach(char => {
      const card = document.createElement("div");
      card.className = "card";

      const reformedHP = char.baseHp.toLocaleString("pt-BR");
      const reformedSouls = char.baseSouls.toLocaleString("pt-BR");

      card.innerHTML = `
        <h3>${char.name}</h3>
        <div class="image-co">
          <img src="${char.img}" alt="${char.name}" />
        </div>
        <div class="numbers-co">
          <p class="hp">${reformedHP}</p>
          <p class="souls">${reformedSouls}</p>
        </div>
        <div class="drops-co">
          ${char.drops?.[0] ? `<p>${char.drops[0]}</p>` : ""}
          ${char.drops?.[1] ? `<p>${char.drops[1]}</p>` : ""}
          ${char.drops?.[2] ? `<p>${char.drops[2]}</p>` : ""}
        </div>
      `;

      wrapper.appendChild(card);
    });

    section.appendChild(wrapper);

    const btn = document.createElement("a");
    btn.href = jogo.link;
    btn.textContent = "Ver mais";
    btn.className = "see-more-btn";
    section.appendChild(btn);

    container.appendChild(section);
  });
});
