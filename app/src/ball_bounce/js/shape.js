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
        this.rightBoundX=this.box.getBoxX()+this.box.getBoxWidth()-this.ctx.lineWidth-(this.shapeRad*2); //오른쪽
        this.bottomBoundY=this.box.getBoxY()+this.box.getBoxHeight()-this.ctx.lineWidth-(this.shapeRad*2); //아래
        this.leftBoundX=this.box.getBoxX()+this.ctx.lineWidth+(this.shapeRad*2);//왼쪽
        this.topBoundY=this.box.getBoxY()+this.ctx.lineWidth+(this.shapeRad*2);
    }

     keepMoveInterval(){
        console.log('xx');
         setInterval(()=>{
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
        }
        //왼쪽
       // if(this.getLeftBound()){

        //}
        //아래쪽
        //위쪽
    }

    drawShape(){}

    setBox(box){
        this.box=box;
    }
}

class Circle extends Shape{
    setBox(box){
        super.setBox();
        this.box=box;
    }

    drawShape(){
        super.drawShape();
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

class Rect extends Shape{
    drawShape(ctx){
        super.drawShape();
        //좌표 안 옮기고 네모 그리기
        ctx.beginPath();
        //ctx.arc(this.x,bally,this.shapeRad, Math.PI*2, false);
        //ctx.closePath();
        ctx.fill();
    }
}