// Typing Animation
const textLines = [
  "You are the starlight in my darkness,",
  "the melody of my silent nights,",
  "the dream my heart forever chases.",
];

const typingElement = document.getElementById("typingText");
let lineIndex = 0,
  charIndex = 0;

function typeLine() {
  if (lineIndex < textLines.length) {
    if (charIndex < textLines[lineIndex].length) {
      typingElement.innerHTML += textLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      typingElement.innerHTML += "<br/>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  }
}

typeLine();

// Music Toggle
const audio = document.getElementById("loveMusic");
const musicToggle = document.getElementById("musicToggle");
let isPlaying = false;

audio.volume = 0.5;
audio
  .play()
  .then(() => (isPlaying = true))
  .catch(() => (isPlaying = false));

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    musicToggle.textContent = "Play Music";
  } else {
    audio.play();
    musicToggle.textContent = "Pause Music";
  }
  isPlaying = !isPlaying;
});

// Card Flip with Sparkle Effect
function flipCard() {
  const card = document.getElementById("ecard");
  card.classList.toggle("flipped");

  if (card.classList.contains("flipped")) {
    // Heart-shaped confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { x: 0.5, y: 0.6 },
      colors: ["#ff6f91", "#ff9aa2", "#fff0f6"],
      shapes: ["heart"],
      scalar: 1.2,
    });

    // SweetAlert with glowing heart
    setTimeout(() => {
      Swal.fire({
        title: "💜 My Enchanted Message",
        html: `
              <div style="font-family: 'IM Fell English', serif; font-size: 22px; color: #8a2be2; text-shadow: 0 3px 5px rgba(0,0,0,0.5);">
                You are the poetry to my silence,<br>
                the calm in my storm, the one<br>
                my heart had always been writing about.
              </div>
            `,
        background: "url('assets/starleather.jpg')",
        color: "#8a2be2",
        customClass: {
          popup: "custom-swal",
          title: "custom-title",
          confirmButton: "custom-btn",
        },
        confirmButtonText: "💜 I Feel It Too",
        buttonsStyling: false,
      });
    }, 1000);

    // GSAP sparkle effect on flip
    gsap.to(".card", {
      boxShadow: "0 20px 60px rgba(255, 105, 180, 0.8)",
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    });
  }
}

// Voice Message Simulation
function playVoiceMessage() {
  Swal.fire({
    title: "A Message from My Heart 🎙️",
    text: "Imagine my voice whispering these words to you under a starry sky...",
    icon: "info",
    confirmButtonColor: "#ff6f91",
    background: "#fff0f6",
  });
}

// Glowing Particles
const particleCanvas = document.getElementById("particleCanvas");
particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * particleCanvas.width;
    this.y = Math.random() * particleCanvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.01;
    if (this.x < 0 || this.x > particleCanvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > particleCanvas.height) this.speedY *= -1;
  }

  draw() {
    particleCtx.fillStyle = `rgba(255, 182, 193, ${this.opacity})`;
    particleCtx.beginPath();
    particleCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    particleCtx.fill();
  }
}

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }
}

function createParticles() {
  if (particles.length < 100) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  createParticles();
  handleParticles();
  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
});

// Seer's Orb Animation
const style = document.createElement("style");
style.innerHTML = `
.seer-orb {
animation: orbPulse 2.5s infinite;
border-radius: 50%;
box-shadow: 0 0 25px rgba(138, 43, 226, 0.9);
}
@keyframes orbPulse {
0% { box-shadow: 0 0 25px rgba(138, 43, 226, 0.9); }
50% { box-shadow: 0 0 50px rgba(138, 43, 226, 1); }
100% { box-shadow: 0 0 25px rgba(138, 43, 226, 0.9); }
}
`;
document.head.appendChild(style);

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
