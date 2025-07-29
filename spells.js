// spells.js

const spellMap = {
  // ✨ Utility / Light Magic
  "lumoss": { color: "#ffffff" },
  "noks": { color: "#888888" },
  "aseeo": { color: "#3399ff" },
  "alohomorra": { color: "#00cc66" },
  "reparoh": { color: "#ffcc33" },
  "wingardium leviosah": { color: "#ff9999" },
  "muffliyato": { color: "#ff6666" },
  "rictosempra": { color: "#ff5050" },
  "sonorus": { color: "#ff9933" },
  "quietuss": { color: "#9966cc" },
  "orchideouss": { color: "#cc66cc" },
  "scourgifye": { color: "#00cccc" },
  "tergayoh": { color: "#66ccff" },
  "lumoss maxima": { color: "#ffff99" },

  // 🛡️ Defensive Spells
  "proteego": { color: "#ffd700" },
  "expellyarmus": { color: "#ff0000" },
  "expecto patronum": { color: "#66ccff" },
  "finite incantatem": { color: "#ccccff" },
  "episkey": { color: "#66ff66" },
  "proteego maxima": { color: "#ffaa00" },
  "repello muggleton": { color: "#cccc99" },
  "salveeo hexia": { color: "#cccccc" },
  "priory incantato": { color: "#999999" },

  // ⚔️ Offensive / Dueling Spells
  "stoopify": { color: "#0033cc" },
  "petrificus totalis": { color: "#6666cc" },
  "incendioh": { color: "#ff3300" },
  "reductoh": { color: "#cc6600" },
  "confringo": { color: "#cc0000" },
  "expulsoh": { color: "#cc0066" },
  "sectumsemprah": { color: "#800000" },
  "bombardah": { color: "#990000" },
  "bombardah maxima": { color: "#ff6600" },
  "depreemo": { color: "#663300" },

  // 🔮 Miscellaneous / Neutral
  "obliviate": { color: "#6699cc" },
  "imperviouss": { color: "#00bfff" },
  "riddikulus": { color: "#9966ff" },
  "tarantalegra": { color: "#cc3399" },
  "lang-lock": { color: "#cc0000" },
  "colovaria": { color: "#33cc99" },
  "confundo": { color: "#9999ff" },
  "homenum reveliyo": { color: "#eeeeee" },
  "apareeseeum": { color: "#ffffcc" },
  "pointmee": { color: "#ffcc99" },

  // ☠️ Dark Magic (Curses)
  "crusheo": { color: "#8b0000" },
  "imperiyo": { color: "#00008b" },
  "avada kadavra": { color: "#00ff00" },
  "morsmordray": { color: "#111111" },
  "fiend-fire": { color: "#ff4500" },
  "conjunctivitus": { color: "#ff1493" },
  "dolohovs curse": { color: "#a0522d" },

  // 🧪 Transfiguration / Alchemy
  "animaygus": { color: "#20b2aa" },
  "feroola": { color: "#f5f5dc" },
  "engorgioh": { color: "#ffcc66" },
  "reduseeoh": { color: "#deb887" },
  "alectos curse": { color: "#4b0082" },
  "gemineeyo": { color: "#ffffe0" },
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
