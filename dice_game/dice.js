function Dice(diceX, diceY, diceWidth, diceHeiht, dotrad){
  this.diceX=diceX;
  this.diceY=diceY;
  this.diceWidth=diceWidth;
  this.diceHeight=diceHeiht;
  this.dotrad=dotrad;
  this.ch=1;
  this.dots=[];
 
}    
    
Dice.prototype.startGame=function(){
    this.changeDiceNumber();
    this.drawDice();
    this.makeDot();
    return this.ch;
}
    
Dice.prototype.changeDiceNumber=function(){
    this.ch=1+Math.floor(Math.random()*6);
}

Dice.prototype.drawDice=function(){    
    ctx.clearRect(this.diceX, this.diceY, this.diceWidth, this.diceHeight);
    ctx.strokeRect(this.diceX, this.diceY, this.diceWidth, this.diceHeight);
}

Dice.prototype.makeDot=function(){
    switch(this.ch){
        case 1: this.draw1(); break;
        case 2: this.draw2(); break;
        case 3: this.draw1(); this.draw2();break;
        case 4: this.draw4(); break;
        case 5: this.draw1(); this.draw4(); break;
        case 6: this.draw4(); this.draw1Mid();break;
    }
    
    this.creatDot();
}


Dice.prototype.draw1=function(){
    var x=this.middleDiceX();
    var y=this.middleDiceY();    
    this.dots.push([x,y]);
}
    
Dice.prototype.draw2=function(){
    var x,y=0;
    x=this.dotRadFromDiceX(true);
    y=this.dotRadFromDiceY(true);
    this.dots.push([x,y]);
    x=this.dotRadFromDiceX(false);
    y=this.dotRadFromDiceX(false);
    this.dots.push([x,y]);
}
    
Dice.prototype.draw4=function(){
    var x,y=0;
    x=this.dotRadFromDiceX(true);
    y=this.dotRadFromDiceY(true);
    this.dots.push([x,y]);
    x=this.dotRadFromDiceX(false);
    y=this.dotRadFromDiceX(false);
    this.dots.push([x,y]);
    x=this.dotRadFromDiceX(false);
    y=this.dotRadFromDiceY(true);
    this.dots.push([x,y]);
    x=this.dotRadFromDiceX(true);
    y=this.dotRadFromDiceX(false);
    this.dots.push([x,y]);
}
    
Dice.prototype.draw1Mid=function(){
    var x,y=0;
    x=this.middleDiceX();
    y=this.moveYDistance();
    this.dots.push([x,y]);
    x=this.middleDiceX();
    y=this.diceHeight-this.moveYDistance();
     this.dots.push([x,y]);
}
    

Dice.prototype.creatDot=function(){
    var _this = this; 
    this.dots.forEach(function(item, index, dots){
        ctx.beginPath();
        ctx.arc(item[0]+_this.diceX, item[1]+_this.diceY, _this.dotrad, 0, Math.PI*2, false);
        ctx.closePath();
        ctx.fill();
    });
    //초기화
  this.dots=[];
}

Dice.prototype.dotRadFromDiceX=function(isOrigin){
    return isOrigin? this.moveXDistance():this.diceWidth-this.moveXDistance();
}
    

Dice.prototype.dotRadFromDiceY=function(isOrigin){
    return isOrigin? this.moveYDistance():this.diceHeight-this.moveYDistance();
}
    
Dice.prototype.moveXDistance=function(){
    return this.dotrad*3;
}  
    
Dice.prototype.moveYDistance=function(){
    return this.dotrad*3;
}  

Dice.prototype.middleDiceX=function(){
    return 0.5*this.diceWidth;
}  
    
Dice.prototype.middleDiceY=function(){
    return 0.5*this.diceHeight;
}  