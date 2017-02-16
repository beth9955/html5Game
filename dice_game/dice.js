//주사위만들기
function Dice(diceX, diceY, diceWidth, diceHeiht, dotrad){
  this.diceX=diceX;
  this.diceY=diceY;
  this.diceWidth=diceWidth;
  this.diceHeight=diceHeiht;
  this.dotrad=dotrad;
  this.ch=1;
  this.dotX=0;
  this.doxY=0;
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
}


Dice.prototype.draw1=function(){
    this.dotX=this.middleDiceX();
    this.dotY=this.middleDiceY();    
    this.creatDot();
}
    
Dice.prototype.draw2=function(){
    this.dotX=this.dotRadFromDiceX(true);
    this.dotY=this.dotRadFromDiceY(true);
    this.creatDot();
    this.dotX=this.dotRadFromDiceX(false);
    this.dotY=this.dotRadFromDiceX(false);
    this.creatDot();
}
    
Dice.prototype.draw4=function(){
    this.dotX=this.dotRadFromDiceX(true);
    this.dotY=this.dotRadFromDiceY(true);
    this.creatDot();
    this.dotX=this.dotRadFromDiceX(false);
    this.dotY=this.dotRadFromDiceX(false);
    this.creatDot();
    this.dotX=this.dotRadFromDiceX(false);
    this.dotY=this.dotRadFromDiceY(true);
    this.creatDot();
    this.dotX=this.dotRadFromDiceX(true);
    this.dotY=this.dotRadFromDiceX(false);
    this.creatDot();
}
    
Dice.prototype.draw1Mid=function(){
    this.dotX=this.middleDiceX();
    this.dotY=this.moveYDistance();
    this.creatDot();
    this.dotX=this.middleDiceX();
    this.dotY=this.diceHeight-this.moveYDistance();
    this.creatDot();
}
    

Dice.prototype.creatDot=function(){
    ctx.beginPath();
    ctx.arc(this.dotX+this.diceX, this.dotX+this.diceY, this.dotrad, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    
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


