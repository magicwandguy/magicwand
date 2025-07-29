// spells.js

const spellMap = {
  // ✨ Utility / Light Magic
  "luminous": { color: "#ffffff" },
  "knox": { color: "#888888" },
  "akio": { color: "#3399ff" },
  "Alamaura": { color: "#00cc66" },
  "repairing": { color: "#ffcc33" },
  "wingardium leviosah": { color: "#ff9999" },
  "muffliyat": { color: "#ff6666" },
  "ricto": { color: "#ff5050" },
  "sonorus": { color: "#ff9933" },
  "silentbell": { color: "#9966cc" },
  "orchid": { color: "#cc66cc" },
  "scarify": { color: "#00cccc" },
  "tryness": { color: "#66ccff" },
  "lumus maxima": { color: "#ffff99" },

  // 🛡️ Defensive Spells
  "protecto": { color: "#ffd700" },
  "expelly": { color: "#ff0000" },
  "expelly protecto": { color: "#66ccff" },
  "finite incanteum": { color: "#ccccff" },
  "epickey": { color: "#66ff66" },
  "protecto maxima": { color: "#ffaa00" },
  "repell alive": { color: "#cccc99" },
  "salve hex": { color: "#cccccc" },
  "priority incanteum": { color: "#999999" },

  // ⚔️ Offensive / Dueling Spells
  "spook eye": { color: "#0033cc" },
  "petrified angel": { color: "#6666cc" },
  "incent": { color: "#ff3300" },
  "red use": { color: "#cc6600" },
  "confringo": { color: "#cc0000" },
  "expelled eye": { color: "#cc0066" },
  "sectum": { color: "#800000" },
  "bombard": { color: "#990000" },
  "bombard maxima": { color: "#ff6600" },
  "deep press": { color: "#663300" },

  // 🔮 Miscellaneous / Neutral
  "obliviate": { color: "#6699cc" },
  "imperial list": { color: "#00bfff" },
  "radish dad": { color: "#9966ff" },
  "trans late": { color: "#cc3399" },
  "lang lock": { color: "#cc0000" },
  "colovar": { color: "#33cc99" },
  "confund": { color: "#9999ff" },
  "homonum": { color: "#eeeeee" },
  "appear some": { color: "#ffffcc" },
  "point me": { color: "#ffcc99" },

  // ☠️ Dark Magic (Curses)
  "crusheo": { color: "#8b0000" },
  "imperiyo": { color: "#00008b" },
  "avada kadavra": { color: "#00ff00" },
  "morsmordray": { color: "#111111" },
  "find-fire": { color: "#ff4500" },
  "conjunctivitus": { color: "#ff1493" },
  "dolphi curse": { color: "#a0522d" },

  // 🧪 Transfiguration / Alchemy
  "anima this": { color: "#20b2aa" },
  "furoola": { color: "#f5f5dc" },
  "engor": { color: "#ffcc66" },
  "reduse so": { color: "#deb887" },
  "alectus curse": { color: "#4b0082" },
  "gemini knee": { color: "#ffffe0" },
  "multicolourus": { color: "#e0ffff" },

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
