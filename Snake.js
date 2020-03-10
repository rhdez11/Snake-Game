class Snake{
    constructor(){
        this.head = createVector((width/2)/resolution,(height/2)/resolution);
        this.tail = [];
        this.tail.push(this.head);        
        this.addTail();
    }

    addTail(){
        let last = this.tail[this.tail.length-1];
        let newPart = createVector(last.x,last.y);
        this.tail.push(newPart);
    }

    setDirection(dir){
        for(let i = this.tail.length-1; i>0; i--){
            let newPos = createVector(this.tail[i-1].x,this.tail[i-1].y);
            this.tail[i] = newPos;
        }
        switch (dir) {
            case 'right':
                // this.tail[0].x+=1;
                this.head.x+=1;
                break;
            case 'left':
                this.head.x-=1;
                break;
            case 'up':
                this.head.y-=1;
                break;
            case 'down':
                this.head.y+=1;
                break;
        }
    }

    checkIfAlive(){
        this.alive = true;
        for (let i = 1; i < this.tail.length; i++) {
            if(this.head.x === this.tail[i].x && this.head.y === this.tail[i].y ){
                this.alive = false;
            }            
        }
        this.checkBorders();
        return this.alive;
    }

    checkBorders(){
        let w =  (width/resolution)-1;
        let h =  (height/resolution)-1;
            if(this.head.x > w || this.head.x < 0 || this.head.y > h|| this.head.y < 0){
                this.alive = false;
            }            
        return this.alive;
    }

    show(){
        for(let i = 0; i< this.tail.length; i++){
            (i===0)?fill('rgb(15,200,0)'):fill('rgb(0,255,0)');
            noStroke();
            if(this.tail[i].x > width/resolution || this.tail[i].x < 0){this. alive =  false}
            rect(this.tail[i].x,this.tail[i].y,1,1);
        }       
    }
}