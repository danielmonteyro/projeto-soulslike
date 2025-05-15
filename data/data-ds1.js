const gameDataDS1 = {
  bossesPrincipais: [
    {
      id: "nashandra",
      name: "Nashandra",
      img: "./img/ds2/nashandra.webp",
      baseHp: 5500,
      baseSouls: 90000,
      drops: ["Soul of Nashandra"],
      ngPlus: [
        { level: "NG+", hp: 6600, souls: 108000 },
        { level: "NG++", hp: 7920, souls: 126000 }
      ]
    }
  ],
  bossesOpcionais: [
    {
      id: "darklurker",
      name: "Darklurker",
      img: "./img/ds2/darklurker.webp",
      baseHp: 6000,
      baseSouls: 85000,
      drops: ["Soul of the Darklurker"],
      ngPlus: [
        { level: "NG+", hp: 7200, souls: 100000 },
        { level: "NG++", hp: 8640, souls: 115000 }
      ]
    }
  ],
  mobs: [
    {
      id: "skeleton",
      name: "Skeleton",
      img: "./img/ds2/skeleton.webp",
      baseHp: 280,
      baseSouls: 120,
      drops: ["Titanite Shard", null, null],
      ngPlus: [
        { level: "NG+", hp: 330, souls: 150 },
        { level: "NG++", hp: 390, souls: 180 }
      ]
    }
  ],
  npcs: [
    {
      id: "lucatiel",
      name: "Lucatiel of Mirrah",
      img: "./img/ds2/lucatiel.webp",
      baseHp: 1800,
      baseSouls: 0,
      drops: ["Lucatiel's Set"],
      ngPlus: []
    }
  ]
};
