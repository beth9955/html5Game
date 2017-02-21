"use strict";

class Shape{

    constructor(shapeConfig){
         this.x=shapeConfig.x;
         this.y=shapeConfig.y;
         this.widht=shapeConfig.widht;
         this.height=shapeConfig.height;
         this.shapeRad=shapeConfig.shapeRad;
         this.vX=shapeConfig.vX;
         this.vY=shapeConfig.vY;
     }


     moveShape(){
        this.calculateBound();
        this.keepMoveInterval();
     }

    calculateBound(){
        this.rightBoundX=this.box.getBoxX()+this.box.getBoxWidth()-this.shapeRad; //오른쪽
        this.bottomBoundY=this.box.getBoxY()+this.box.getBoxHeight()-this.shapeRad; //아래
        this.leftBoundX=this.box.getBoxX()+this.shapeRad;//왼쪽
        this.topBoundY=this.box.getBoxY()+this.shapeRad;
    }

     keepMoveInterval(){
         setInterval(()=>{
             this.x +=this.vX;
             this.y +=this.vY;
             this.moveCheck();
             this.drawShape();
         }, 1000);
     }


    drawShape(){}

    moveCheck(){
        //계산과정 넣기
    }
    setBox(box){
        this.box=box;
    }
}

class Circle extends Shape{
    setBox(box){
        super.setBox();
        this.box=box;
        this.ctx=box.getCtx();
    }

    drawShape(){
         super.drawShape();
         this.ctx.beginPath();
         this.ctx.arc(this.x,this.y,this.shapeRad, Math.PI*2, false);
         this.ctx.closePath();
         this.ctx.fill();
    }
}

class Rect extends Shape{
    drawShape(ctx){
        super.drawShape();
        ctx.beginPath();
      //  ctx.arc(this.x,bally,ballrad, Math.PI*2, false);
        ctx.closePath();
        ctx.fill();
    }
}