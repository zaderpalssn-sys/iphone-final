function goTo(n){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
}

function submitForm(){
  const r = document.getElementById('recipient').value;
  const n = document.getElementById('name').value;
  const a = document.getElementById('amount').value;
  const m = document.getElementById('message').value;

  document.getElementById('outRecipient').innerText = r;
  document.getElementById('outName').innerText = n;
  document.getElementById('outAmount').innerText = a;
  document.getElementById('outMessage').innerText = m;

  const now = new Date();
  document.getElementById('datetime').innerText =
    now.toLocaleDateString('sv-SE', { day:'2-digit', month:'short', year:'numeric'}) +
    ", kl " +
    now.toLocaleTimeString('sv-SE', { hour:'2-digit', minute:'2-digit'});

  goTo(3);
}

/* ✅ Vänta tills sidan laddats */
document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.getElementById("glitterTrigger");
  const audio = new Audio("sound/sound1.mp3");

  if (trigger) {
    trigger.addEventListener("click", (e) => {

      // 🔊 spela ljud
      audio.currentTime = 0;
      audio.play();

      const rect = trigger.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      createGlitter(x, y);
    });
  }

});

function createGlitter(x, y) {
  const container = document.getElementById("screen3");

  for (let i = 0; i < 18; i++) {
    const dot = document.createElement("div");
    dot.className = "glitter";

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    container.appendChild(dot);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40 + 10;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    dot.animate([
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: `translate(${moveX}px, ${moveY}px)`, opacity: 0 }
    ], {
      duration: 600,
      easing: "ease-out"
    });

    setTimeout(() => dot.remove(), 600);
  }
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
  }, 2000);
});
