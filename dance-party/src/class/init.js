/* eslint-disable */
const dancers = [];

function handleClickDancerButton() {
  let random = Math.floor(Math.random() * 3);
  let dancer;
  // make a dancer with a random position
  if (random === 0) {
    dancer = new BlinkyDancerClass( // instance
      document.body.clientHeight * Math.random(),
      document.body.clientWidth * Math.random(),
      Math.random() * 1000
    );
  } else if (random === 1) {
    dancer = new RainDancerClass( // instance
      document.body.clientHeight * Math.random(),
      document.body.clientWidth * Math.random(),
      Math.random() * 1000
    );
  } else if (random === 2) {
    dancer = new CamDancerClass( // instance
      document.body.clientHeight * Math.random(),
      document.body.clientWidth * Math.random(),
      Math.random() * 1000
    );
  }

  dancers.push(dancer);
  document.body.appendChild(dancer.$node);
}

function handleClickLineupButton() {
  for (let dancer of dancers) {
    dancer.lineup();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const elAddDancerButton = document.querySelector('.addDancerButton');
  elAddDancerButton.addEventListener('click', handleClickDancerButton);
  const lineupDancerButton = document.querySelector('.lineUpButton');
  lineupDancerButton.addEventListener('click', handleClickLineupButton);
});
