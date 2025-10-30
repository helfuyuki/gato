const tail = document.getElementById('tail');
const meow = document.getElementById('meow');

tail.addEventListener('click', () => {
  // anima o rabo
  tail.classList.add('wagging');
  setTimeout(() => tail.classList.remove('wagging'), 500);

  // toca o áudio com 50% de volume
  meow.volume = 0.5;
  meow.currentTime = 0;
  meow.play();
});
