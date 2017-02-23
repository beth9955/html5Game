"use stict";

class BoundBox{
    
    constructor(canvas){
        this.boxx=50;
        this.boxy=50;
        this.boxWidht=100;
        this.boxHeight=100;
        this.canvas=canvas;
        this.ctx=canvas.getContext('2d');
        this.ctx.lineWidth=5;
        this.ctx.strokeStyle='#000';
        this.ctx.fillStyle='#000';
    }

    drawBox(){
        this.ctx.strokeRect(this.boxx, this.boxy,  this.boxWidht, this.boxHeight);
    }

    getBox(){
        return this;
    }

    getCtx(){
        return this.ctx;
    }
    getBoxX(){
        return this.boxx;
    }

    getBoxY(){
        return this.boxy;
    }
    getBoxWidth(){
        return this.boxWidht;
    }
    getBoxHeight(){
        return this.boxHeight;
    }


    // setShapeRad(shapeRad){
    //     this.shapeRad=shapeRad;
    // }
    //
    // getRightBoundX(){
    //     return boxx+boxWidth-lineWidth/2-shapeRad;
    // }
    //
    // getLeftBoundX(){
    //     return boxx+lineWidth/2+shapeRad;//왼쪽;
    // }
    //
    // getTopBoundY(){
    //     return boxy+lineWidth/2+shapeRad; //위쪽
    // }
    //
    // getBottomBound(){
    //     return boxy+boxHeight-lineWidth/2-shapeRad; //아래;
    // }
}