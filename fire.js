
const canvas = document.getElementById('fire-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function triggerFireEffect() {
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 5 + 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 100, 0, 0.7)';
    ctx.fill();
  }
  setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 800);
}
