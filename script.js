const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const score = document.getElementById('score');

function jump() {
  player.classList.add('jump-animation');
  setTimeout(() => {
    player.classList.remove('jump-animation');
  }, 700);
}

document.addEventListener('keypress', () => {
  if (!player.classList.contains('jump-animation')) {
    jump();
  }
});

setInterval(() => {
  score.innerText++;
  const playerTop = parseInt(window.getComputedStyle(player)
    .getPropertyValue('top'));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle)
    .getPropertyValue('left'));
  if (obstacleLeft < 0) {
    obstacle.style.display = 'none';
  } else {
    obstacle.style.display = '';
  }

  if (obstacleLeft < 70 && obstacleLeft > 0 && playerTop > 145) {
    alert('Game Over! You got a score of: ' + score.innerText +  
     '\n\nDo you want to play again?');
    location.reload();
  }   
}, 50);