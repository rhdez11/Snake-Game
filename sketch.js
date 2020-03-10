var resolution = 20;
var FR = 10;

var snake;
var direction='left';
var dot;
var score;

function setup(){
    createCanvas(30*resolution*2, 30*resolution*1);
    frameRate(FR);
    
    snake = new Snake();    
    createRandomDot();
    this.score = 0;
}

function draw(){
    scale(resolution);
    background(51);  
    
    snake.setDirection(direction);
    snake.show();

    eatDot();

    if(!snake.checkIfAlive()){
        // alert('you lose');
        snake = new Snake();
        this.score = 0;
        this.FR = 10;
        frameRate(FR);
    }

    displayScore();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        (this.direction === 'right')?this.direction = 'right' :this.direction = 'left';
    } else if (keyCode === RIGHT_ARROW) {
        (this.direction === 'left')?this.direction = 'left' :this.direction = 'right';
    }else if (keyCode === UP_ARROW) {
        (this.direction === 'down')?this.direction = 'down' :this.direction = 'up';
    }else if (keyCode === DOWN_ARROW) {
        (this.direction === 'up')?this.direction = 'up' :this.direction = 'down';
    }
}

function eatDot(){
    if(this.snake.tail[0].x === this.dot.x && this.snake.tail[0].y === this.dot.y){
        createRandomDot();
        this.score++;
        this.snake.addTail();
        // if(this.score%3 === 0){
        //     FR++;
        //     frameRate(FR);
        // }
    }else{
        fill(color('red'));
        noStroke();
        rect(this.dot.x,this.dot.y,1,1);
    }
}

function createRandomDot(){
    this.dot = createVector(floor(random(1, (width/resolution)-2)),floor(random(1, (height/resolution)-2)));
    
    for (let i = 0; i < this.snake.tail.length; i++) {
        if(this.dot.x === this.snake.tail[i].x && this.dot.y === this.snake.tail[i].y){
            console.log('recursed!!!');
            createRandomDot();
        }       
    }
}

function displayScore(){
    push();
    (resolution < 10)?textSize(2) : textSize(3);
    fill(255);
    text('SCORE : '+ this.score, 2, 3);
    text('FR : '+ this.FR, 2, 6);
    pop();
}