const tail = document.getElementById('tail');
const meow = document.getElementById('meow');

tail.addEventListener('click', () => {
  tail.classList.add('wagging'); // animação do rabo
  meow.currentTime = 0;          // reinicia o áudio
  meow.play();                   // toca o áudio
  setTimeout(() => {
    tail.classList.remove('wagging');
  }, 500);
});

