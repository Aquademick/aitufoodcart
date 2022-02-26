function numberGenerator() {
let randomNumber = Math.floor((Math.random() * 100) + 1);
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = randomNumber;
  let duration = randomNumber/2;
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
}

function promocode() {
  const keyBoard = document.querySelector('.keyboard')

  keyBoard.addEventListener('keypress', e =>{
      console.log(e)
      if(e.keyCode === 83){
        document.getElementById('bonus').innerHTML = "You have received 5% discount for 1 month!";
      }
  })
}
