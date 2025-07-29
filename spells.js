// spells.js

const spellMap = {
  // ✨ Utility / Light Magic
  "lumos": { color: "#ffffff" },
  "nox": { color: "#888888" },
  "accio": { color: "#3399ff" },
  "alohomora": { color: "#00cc66" },
  "reparo": { color: "#ffcc33" },
  "wingardium leviosa": { color: "#ff9999" },
  "muffliato": { color: "#ff6666" },
  "rictusempra": { color: "#ff5050" },
  "sonorus": { color: "#ff9933" },
  "quietus": { color: "#9966cc" },
  "orchideous": { color: "#cc66cc" },
  "scourgify": { color: "#00cccc" },
  "tergeo": { color: "#66ccff" },
  "lumos maxima": { color: "#ffff99" },

  // 🛡️ Defensive Spells
  "protego": { color: "#ffd700" },
  "expelliarmus": { color: "#ff0000" },
  "expecto patronum": { color: "#66ccff" },
  "finite incantatem": { color: "#ccccff" },
  "episkey": { color: "#66ff66" },
  "protego maxima": { color: "#ffaa00" },
  "repello muggletum": { color: "#cccc99" },
  "salvio hexia": { color: "#cccccc" },
  "priori incantato": { color: "#999999" },

  // ⚔️ Offensive / Dueling Spells
  "stupefy": { color: "#0033cc" },
  "petrificus totalus": { color: "#6666cc" },
  "incendio": { color: "#ff3300" },
  "reducto": { color: "#cc6600" },
  "confringo": { color: "#cc0000" },
  "expulso": { color: "#cc0066" },
  "sectumsempra": { color: "#800000" },
  "bombarda": { color: "#990000" },
  "bombarda maxima": { color: "#ff6600" },
  "deprimo": { color: "#663300" },

  // 🔮 Miscellaneous / Neutral
  "obliviate": { color: "#6699cc" },
  "impervius": { color: "#00bfff" },
  "riddikulus": { color: "#9966ff" },
  "tarantallegra": { color: "#cc3399" },
  "langlock": { color: "#cc0000" },
  "colovaria": { color: "#33cc99" },
  "confundo": { color: "#9999ff" },
  "homenum revelio": { color: "#eeeeee" },
  "aparecium": { color: "#ffffcc" },
  "point me": { color: "#ffcc99" },

  // ☠️ Dark Magic (Curses)
  "crucio": { color: "#8b0000" },
  "imperio": { color: "#00008b" },
  "avada kedavra": { color: "#00ff00" },
  "morsmordre": { color: "#111111" },
  "fiendfyre": { color: "#ff4500" },
  "conjunctivitis": { color: "#ff1493" },
  "dolohov's curse": { color: "#a0522d" },

  // 🧪 Transfiguration / Alchemy
  "animagus": { color: "#20b2aa" },
  "ferula": { color: "#f5f5dc" },
  "engorgio": { color: "#ffcc66" },
  "reducio": { color: "#deb887" },
  "alecto's curse": { color: "#4b0082" },
  "geminio": { color: "#ffffe0" },
  "multicorfors": { color: "#e0ffff" },

  // 🪄 Custom or Test
  "ok": { color: "#00ffff" }
};

// 🪄 Simplified / Phonetic Spell Aliases
const spellAliases = {
  // Simplified
  "protaygo": "protego",
  "protahgo": "protego",
  "wingar levio": "wingardium leviosa",
  "aloha": "alohomora",
  "alomora": "alohomora",
  "finito": "finite incantatem",
  "expec patron": "expecto patronum",
  "kaboom": "reducto",
  "disarm": "expelliarmus",
  "tickle": "rictusempra",
  "muffle": "muffliato",
  "cleanus": "scourgify",
  "quiet": "quietus",
  "fireball": "incendio",
  "ghost shield": "expecto patronum",
  "wall": "protego",
  "max wall": "protego maxima"
};

// 🎯 Spell casting function
function castSpell(input) {
  const normalized = input.toLowerCase().trim();
  const trueSpell = spellAliases[normalized] || normalized;
  const spell = spellMap[trueSpell];

  if (spell) {
    console.log(`✨ Casting "${trueSpell}" with color ${spell.color}`);
    return spell;
  } else {
    console.warn("⚠️ Unknown spell: " + input);
    return null;
  }
}

// 🧪 Example usage
// castSpell("protaygo");
// castSpell("tickle");
// castSpell("wingardium leviosa");
