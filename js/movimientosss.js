const playBoard = document.querySelector(".play-board");


let gameOver = false ;
let foodx,foody;
let snakex =5, snakey = 10;
let snakeBody = [];
let velocityx = 0, velocityY =0;
let setIntervalId;

const changFoodposition =() => {
    foodx = Math.floor(Math.random() *30) +1;
    foody = Math.floor(Math.random() *30) +1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("game over");
    Location.reload();
}

const changeDirection = (e) =>{
    // console.log(e);
    if (e.key === "ArrowUp" ){
        velocityx = 0;
        velocityY = -1 ;
    } else if (e.key === "ArrowDown"){
        velocityx = 0;
        velocityY = 1;
    }else if (e.key === "ArrowLeft"){
        velocityx = -1;
        velocityY = 0;
    }else if (e.key === "ArrowRight"){
        velocityx = 1;
        velocityY = 0;
    }
    // initGame();
}

const initGame = ( ) =>{
    if(gameOver) return handleGameOver();
    let htmlmarkup = `<div class="food" style="grid-area:${foody} / ${foodx}"></div>`;



    if(snakex === foodx && snakey === foody){
        changFoodposition();
        snakeBody.push([foodx, foody]);
    }

    for(let i = snakeBody.length -1; i > 0; i--){
        snakeBody[i] =snakeBody[i - 1];
    }

    snakeBody[0] = [snakex , snakey];

    snakex += velocityx;
    snakey += velocityY;

    if(snakex <= 0 || snakex > 30 || snakey <= 0 || snakey > 30 ){
       gameOver = true ; 
    }

    for(let i = 0; i < snakeBody.length; i++){
        htmlmarkup += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    }


    
    playBoard.innerHTML =htmlmarkup;
}


changFoodposition();
// initGame();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);