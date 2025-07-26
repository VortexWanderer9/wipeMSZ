const bootText = document.getElementById("boot-text");
const donateContent = document.getElementById("donate-content");

const lines = [
  "[BOOT] Initializing secure connection...",
  "[OK] Loading Elliot's donation terminal...",
  "[INFO] Establishing encrypted tunnel...",
  "[OK] Access Granted.",
  "[READY] Secure Payment Gateway Online."
];

let i = 0;
function typeBoot() {
  if (i < lines.length) {
    bootText.textContent += lines[i] + "\n";
    i++;
    setTimeout(typeBoot, 800);
  } else {
    setTimeout(() => {
      document.getElementById("boot").style.display = "none";
      donateContent.style.display = "block";
      // Reveal cards with animation
      document.querySelectorAll('.donate-card').forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 300);
      });
    }, 1000);
  }
}
typeBoot();
