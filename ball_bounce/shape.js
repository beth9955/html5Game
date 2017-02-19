"use strict";

class Shape(){
    let x;
    let y;
    let widht;
    let height;
    let shapeRad;

    let vX;
    let vY;
    
    let ctx;
    let box;
    
    constructor(shape){
        this.x=shape.x;
        this.y=shappe.y;
        this.widht=shape.widht;
        this.height=shape.height;
        this.shapeRad=shape.shapeRad;
        this.vX=shape.vX;
        this.vY=shape.vY;
    }
    
    
    moveBall(shpapeVX, shpapeVY){
         this.ballx +=shpapeVX;
         this.bally +=shpapeVY;
         moveCheck();
         drawSape();
    }

    
    moveCheck(){
        if(box.boxWidth-(box.boxx+box.lineWidth/2)>box.rightBoundX){
            shpapeVX=-shpapeVX;
            box.ballx=box.boxx+box.ballrad;
    }
    
//     if(ballx-ballrad<leftBoundX){
//       ballvx=-ballvx;
//       ballx=leftBoundX+ballrad;
//    }
//    
//     if(bally+ballrad>bottomBoundY){
//       ballvy=-ballvy;
//       bally=bottomBoundY-ballrad;
//    }
//    
//    if(bally-ballrad<topBoundY){
//       ballvy=-ballvy;
//       bally=topBoundY+ballrad;
//    }
        
    }
    
    drawShpae(){
        console.log("parent");
    }
    
    setCtx(ctx){
        this.ctx=ctx;
    }
    
    setBox(box){
        //박스객체 넘기기
        this.box=box;
    }
 
}

class Circle extends Shape{
    drawSape(){
        super();
        ctx.beginPath();
        ctx.arc(ballx,bally,ballrad, Math.PI*2, false); 
        ctx.closePath();
        ctx.fill();
    }
}

class Rect extends Shape{
    drawSape(ctx){
        super();
        ctx.beginPath();
        ctx.arc(ballx,bally,ballrad, Math.PI*2, false); 
        ctx.closePath();
        ctx.fill();
    }
}