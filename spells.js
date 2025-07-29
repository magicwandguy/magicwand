// spells.js
const spellMap = {
  // ✨ Utility / Light Magic
  "lumos": { color: "#ffffff" }, // white
  "nox": { color: "#888888" }, // gray
  "accio": { color: "#3399ff" }, // bright blue
  "alohomora": { color: "#00cc66" }, // green
  "reparo": { color: "#ffcc33" }, // yellow-gold
  "wingardium leviosa": { color: "#ff9999" }, // soft red
  "muffliato": { color: "#ff6666" }, // red-pink
  "rictusempra": { color: "#ff5050" }, // strong red
  "sonorus": { color: "#ff9933" }, // orange
  "quietus": { color: "#9966cc" }, // purple
  "orchideous": { color: "#cc66cc" }, // violet
  "scourgify": { color: "#00cccc" }, // teal
  "tergeo": { color: "#66ccff" }, // light blue
  "lumos maxima": { color: "#ffff99" }, // light yellow

  // 🛡️ Defensive Spells
  "protego": { color: "#ffd700" }, // gold
  "expelliarmus": { color: "#ff0000" }, // red
  "expecto patronum": { color: "#66ccff" }, // icy blue
  "finite incantatem": { color: "#ccccff" }, // light purple
  "episkey": { color: "#66ff66" }, // green
  "protego maxima": { color: "#ffaa00" }, // gold-orange
  "repello muggletum": { color: "#cccc99" }, // sand
  "salvio hexia": { color: "#cccccc" }, // silver
  "priori incantato": { color: "#999999" }, // light gray

  // ⚔️ Offensive / Dueling Spells
  "stupefy": { color: "#0033cc" }, // deep blue
  "petrificus totalus": { color: "#6666cc" }, // slate
  "incendio": { color: "#ff3300" }, // fire red
  "reducto": { color: "#cc6600" }, // burnt orange
  "confringo": { color: "#cc0000" }, // deep red
  "expulso": { color: "#cc0066" }, // magenta
  "sectumsempra": { color: "#800000" }, // maroon
  "bombarda": { color: "#990000" }, // dark red
  "bombarda maxima": { color: "#ff6600" }, // bright orange
  "deprimo": { color: "#663300" }, // brown

  // 🔮 Miscellaneous / Neutral
  "obliviate": { color: "#6699cc" }, // steel blue
  "impervius": { color: "#00bfff" }, // sky blue
  "riddikulus": { color: "#9966ff" }, // purple
  "tarantallegra": { color: "#cc3399" }, // pink-violet
  "langlock": { color: "#cc0000" }, // red
  "colovaria": { color: "#33cc99" }, // turquoise
  "confundo": { color: "#9999ff" }, // pale violet
  "homenum revelio": { color: "#eeeeee" }, // off-white
  "aparecium": { color: "#ffffcc" }, // parchment yellow
  "point me": { color: "#ffcc99" }, // tan

  // ☠️ Dark Magic (Curses)
  "crucio": { color: "#8b0000" }, // dark red
  "imperio": { color: "#00008b" }, // dark blue
  "avada kedavra": { color: "#00ff00" }, // neon green
  "morsmordre": { color: "#111111" }, // black
  "fiendfyre": { color: "#ff4500" }, // blazing orange
  "conjunctivitis": { color: "#ff1493" }, // hot pink
  "dolohov's curse": { color: "#a0522d" }, // sienna

  // 🧪 Transfiguration / Alchemy
  "animagus": { color: "#20b2aa" }, // teal
  "ferula": { color: "#f5f5dc" }, // beige
  "engorgio": { color: "#ffcc66" }, // peach
  "reducio": { color: "#deb887" }, // light brown
  "alecto's curse": { color: "#4b0082" }, // indigo
  "geminio": { color: "#ffffe0" }, // pale yellow
  "multicorfors": { color: "#e0ffff" }, // pale cyan

  // 🪄 Add more spells below if needed
  "ok": { color: "#00ffff" } // cyan
};
