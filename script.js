let recognition;

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Your browser does not support Speech Recognition. Try Chrome or Edge.");
    return null;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("You said:", `"${transcript}"`);
    handleSpell(transcript);
  };

  recognition.onerror = (err) => {
    alert("Speech recognition error: " + err.error);
    console.error(err);
  };

  return recognition;
}

function startListening() {
  if (!recognition) {
    const initialized = setupSpeechRecognition();
    if (!initialized) return; // Abort if not supported
  }

  recognition.start();
}

function handleSpell(spell) {
  const cleanedSpell = spell.trim().toLowerCase();
  let effect = null;

  for (let key in spellMap) {
    if (cleanedSpell.includes(key)) {
      effect = spellMap[key];
      break;
    }
  }

  if (!effect) {
    alert("Unknown spell: " + cleanedSpell);
    return;
  }

  castLightBeam(effect.color);
  castSparkles(effect.color);
}

function castLightBeam(color) {
  const beam = document.createElement('div');
  beam.className = 'light-beam';
  beam.style.background = color;
  beam.style.boxShadow = `0 0 100px 40px ${color}`;
  document.body.appendChild(beam);

  setTimeout(() => {
    document.body.removeChild(beam);
  }, 800);
}

function castSparkles(color) {
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.background = color;
    sparkle.style.left = '50%';
    sparkle.style.top = '50%';

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 200 + 50;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    sparkle.style.setProperty('--x', `${x}px`);
    sparkle.style.setProperty('--y', `${y}px`);

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
}

function spawnAmbientParticles(count = 40) {
  const bg = document.querySelector('.background-magic');
  if (!bg) return;

  for (let i = 0; i < count; i++) {
    const orb = document.createElement('div');
    orb.className = 'orb';
    orb.style.left = `${Math.random() * 100}vw`;
    orb.style.top = `${Math.random() * 100}vh`;
    orb.style.animationDuration = `${10 + Math.random() * 20}s`;
    orb.style.width = orb.style.height = `${6 + Math.random() * 6}px`;
    orb.style.background = 'rgba(255,255,255,0.05)';
    orb.style.position = 'absolute';
    orb.style.borderRadius = '50%';
    orb.style.pointerEvents = 'none';
    orb.style.filter = 'blur(2px)';
    bg.appendChild(orb);
  }
}

spawnAmbientParticles();
