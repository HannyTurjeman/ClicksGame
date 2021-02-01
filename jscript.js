const $container = document.getElementById('container');
const $clicksNumber = document.getElementById('clicks');
const $timer = document.getElementById('timer');
const $clicker = document.getElementById('clicker');
const $message = document.getElementById('message');
const $timerScore = document.getElementById('timer-score');
const $reloadButton = document.getElementById('reload');
const $startButton = document.getElementById('start');

//Game Rules
const maxTime = 5;
const winScore = 10;

// Timers
let countClicks;
let timerRun;
let timerFunc;

//functions
const init = ($event) => {
    const buttonId = $event.target.id;
    countClicks = 0;
    timerRun = maxTime;
    $timer.innerHTML = timerRun;
    $timerScore.innerHTML = '';
    $clicksNumber.innerHTML = countClicks;
    $message.classList.remove('message--fail');
    $message.classList.remove('message--success');

    if (buttonId == 'start') {
        timerFunc = setInterval(CountDowntime, 1000);
        $container.classList.add('started');
    }

}
const CountDowntime = () => {
    timerRun--;
    $timer.innerHTML = timerRun;
    checkGameState();

}
const countUpClicks = () => {
    if ($container.classList.contains('started')) {
        countClicks++;
        $clicksNumber.innerHTML = countClicks;
        checkGameState();
    }else {
        alert('You must start the game first!')
    }
    
} 

const checkGameState = () => {
    if (timerRun === 0) {
        stopGame();

        if (countClicks < winScore) {
            $message.classList.add('message--fail');
            countClicks = 0;
        } 
    }

    if (countClicks >= winScore) {
        stopGame();
        $message.classList.add('message--success');
        $timerScore.innerHTML = 'Your Time is: ' + (maxTime - timerRun) + ' seconds';
    }
}
const stopGame = () => {
    clearInterval(timerFunc);
    $container.classList.remove('started');
}

//listener
$clicker.addEventListener('click', countUpClicks);
$reloadButton.addEventListener('click', init);
$startButton.addEventListener('click', init);

//Event Listeners
document.addEventListener('keyup', ($event) => {console.log($event);}) 
document.addEventListener('keydown', ($event) => {console.log($event);}) 
document.addEventListener('click', ($event) => {console.log($event);}) 
