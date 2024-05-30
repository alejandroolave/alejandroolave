const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".socre");
const highScoreElemet = document.querySelector(".high-score");



let gameOver = false ;
let foodx, foody;
let snakex =1, snakey = 20;
let snakeBody = [];
let velocityx = 0, velocityY =0;
let setIntervalId;
let score = 0;

let highscore = localStorage.getItem("high-score") || 1;





const changFoodposition = () => {
    foodx = Math.floor(Math.random() *30) +1;
    foody = Math.floor(Math.random() *30) +1;
}


const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("game over");
    Location.reload();
}


const changeDirection = (e) =>{
    if (e.key === "ArrowUp" && velocityY != 1 ){
        velocityx = 0;
        velocityY = -1 ;
    } else if(e.key === "ArrowDown" && velocityY != -1){
        velocityx = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityx != 1){
        velocityx = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityx != 1){
        velocityx = 1;
        velocityY = 0;
    }
  
}

const initGame = ( ) =>{
    if(gameOver) return handleGameOver();
    let htmlmarkup = `<div class="food" style="grid-area:${foody} / ${foodx}"></div>`;

    if(snakex === foodx && snakey === foody){
        changFoodposition();
        snakeBody.push([foodx, foody]);
        score++;

        highscore = score >= highscore ? score : highscore;
        localStorage.setItem("high-score", highscore);
        scoreElement.innerHTML = `score: ${score}`;


        highScoreElemet.innerHTML = `high-score: ${highScore}`;
    }

    for(let i = snakeBody.length -1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakex , snakey];

    snakex += velocityx;
    snakey += velocityY;

    if(snakex <= 0 || snakex > 30 || snakey <= 0 || snakey > 30 ){
       gameOver = true ; 
    }

    for(let i = 0; i < snakeBody.length; i++){
        htmlmarkup += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if(i !== 0 && snakeBody [0][1] === snakeBody [i][1] && snakeBody [0][0] === snakeBody [i][0]){
            gameOver = true;
        }
    }
    playBoard.innerHTML =htmlmarkup;
}


changFoodposition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);