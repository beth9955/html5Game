"use strict";

class Shape{

    constructor({x:x, y:y, shapeRad:shapeRad, vX:vX, vY:vY}=shapeConfig, box){
        this.x=x;
        this.y=y;
        this.shapeRad=shapeRad;
        this.vX=vX;
        this.vY=vY;
        this.box=box;
     }

     moveShape(){
        this.calculateBound();
        this.keepMoveInterval();
       
     }

    calculateBound(){
        this.rightBoundX=this.box.boxx+this.box.boxWidht-this.box.ctx.lineWidth-(this.shapeRad*2); //오른쪽
        this.bottomBoundY=this.box.boxy+this.box.boxHeight-this.box.ctx.lineWidth-(this.shapeRad*2); //아래
        this.leftBoundX=this.box.boxx+this.box.ctx.lineWidth;//왼쪽
        this.topBoundY=this.box.boxy+this.box.ctx.lineWidth;
    }

     keepMoveInterval(){
         setInterval(()=>{
             this.box.clearBox();
             this.x +=this.vX;
             this.y +=this.vY;
             this.moveCheck();
             this.drawShape();
         }, 1000);
     }


    moveCheck(){
        //오른쪽
         if(this.x>=this.rightBoundX){
            this.vX=-this.vX;
            this.x=this.rightBoundX;
        }
        //왼쪽
        if(this.leftBoundX>this.x){
            this.vX=-this.vX;
            this.x=this.leftBoundX;
        }
        //아래쪽
         if(this.y>=this.bottomBoundY){
            this.vY=-this.vY;
            this.y=this.bottomBoundY;
        }
        
         //위쪽
         if(this.topBoundY>this.y){
            this.vY=-this.vY;
            this.y=this.topBoundY;
        }
       
    }

    setVX(v){
        this.vX=+v;
    }

    setVY(v){
        this.vY=+v;
    }

}

class Circle extends Shape{
    drawShape(){
       // super.drawShape();
         //원일때만 좌표 옮기기
        this.box.ctx.translate(+this.shapeRad, +this.shapeRad);
        this.box.ctx.beginPath();
        this.box.ctx.arc(this.x,this.y,this.shapeRad, Math.PI*2, false);
        this.box.ctx.closePath();
        this.box.ctx.fill();
        this.box.ctx.stroke();
        this.box.ctx.translate(-this.shapeRad, -this.shapeRad);
    }

}
