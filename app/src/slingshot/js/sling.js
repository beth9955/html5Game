"use strict";

class Shape{

    constructor(shapeConfig, ctx){
        this.x=shapeConfig.x || "0";
        this.y=shapeConfig.y || "0";
        this.fillStyle=shapeConfig.fillStyle || "pink";
        this.ctx=ctx;
    }

    resetPosition(mx, my){
         this.x = mx;
         this.y = my;
    }

}

class Circle extends Shape{
    constructor(diceParameter, canvas){
        super(diceParameter, canvas);
        this.shapeRad=diceParameter.shapeRad;
    }

    drawShape(){
         //원일때만 좌표 옮기기
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.shapeRad, Math.PI*2, false);
        this.ctx.closePath();
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.fill();
    }

    getOffsetX(isStart){
        return isStart? this.x-this.shapeRad : this.x+this.shapeRad;
    }

    getOffsetY(isStart){
        return isStart? this.y-this.shapeRad : this.y+this.shapeRad;
    }

    moveball(x, y){
        this.x +=x;
        this.y +=y;
    }

}

class Rect extends Shape{
    constructor(diceParameter, canvas){
        super(diceParameter, canvas);
        this.widht=diceParameter.width;
        this.height=diceParameter.height;
    }

    drawShape(){
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.fillRect(this.x, this.y, this.widht, this.height);
    }

    getOffsetX(){
        return this.x+this.widht;
    }

    getOffsetY(){
        return this.y+this.height;
    }
}

class Sling extends Shape{
    constructor(shapeConfig,canvas) {
        super(shapeConfig,canvas);
        this.s1x=shapeConfig.s1x;
        this.s1y=shapeConfig.s1y;
        this.s2x=shapeConfig.s2x;
        this.s2y=shapeConfig.s2y;
        this.s3x=shapeConfig.s3x;
        this.s3y=shapeConfig.s3y;
    }

    drawShape(){
        this.ctx.strokeStyle=this.fillStyle;
        this.ctx.lineWidth=4;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.s1x, this.s1y);
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.s2x, this.s2y);
        this.ctx.moveTo(this.s1x, this.s1y);
        this.ctx.lineTo(this.s2x, this.s2y);
        this.ctx.lineTo(this.s3x, this.s3y);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}