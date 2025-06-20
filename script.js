
document.getElementById('logo').addEventListener('click', () => {
  const fire = document.getElementById('logo-fire');
  fire.style.display = 'block';
  setTimeout(() => {
    fire.style.display = 'none';
  }, 1000);
});
