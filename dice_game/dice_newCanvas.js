/*
var diceParameter={
    diceX:"",
    diceY:"",
    diceWidth:"",
    diceHeiht:"",
    dotrad:""
};
*/


function Dice(diceParameter){
  this.diceX=diceParameter.diceWidth/2;
  this.diceY=diceParameter.diceHeiht/2;
  this.diceWidth=diceParameter.diceWidth || 100;
  this.diceHeight=diceParameter.diceHeiht || 100;
  this.dotrad=diceParameter.dotrad || 6;
  this.ch=1;
  this.dots=[];
  this.canvas;
  this.ctx;
  this.makeCanvas(diceParameter.diceX, diceParameter.diceY);
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
    //this.ctx.translate(this.canvas.width/2, this.canvas.width/2);
    this.ctx.clearRect(this.diceX, this.diceY, this.diceWidth, this.diceHeight);
   // this.ctx.rotate(60*Math.PI / 180);
    this.ctx.strokeRect(this.diceX, this.diceY, this.diceWidth, this.diceHeight);
   // this.ctx.translate(-(this.canvas.width/2), -(this.canvas.width)/2);
}

Dice.prototype.makeCanvas=function(diceX, diceY){
    this.canvas=document.createElement("canvas");
    this.canvas.width=this.diceWidth*2;
    this.canvas.height=this.diceHeight*2;
    this.canvas.style.position="absolute";
    this.canvas.style.border="1px solid";
    this.canvas.style.top=diceY+"px";
    this.canvas.style.left=diceX+"px";
    this.ctx=this.canvas.getContext("2d");
    this.ctx.fillStyle="#009966";
    this.ctx.lineWidth=5;    
    document.getElementById('canvas-area').appendChild(this.canvas);
   
   
    
}

Dice.prototype.giveIDToCanvas=function(name){
    this.canvas.id=name;
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
    this.dots.map((item)=>{
        this.ctx.beginPath();
        this.ctx.arc(item[0]+_this.diceX, item[1]+_this.diceY, _this.dotrad, 0, Math.PI*2, false);
        this.ctx.closePath();
        this.ctx.fill();
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