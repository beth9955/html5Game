"use stict";

class BoundBox{
    
    constructor(canvas){
        this.boxx=20;
        this.boxy=20;
        this.boxWidht=300;
        this.boxHeight=300;
        this.canvas=canvas;
        this.ctx=canvas.getContext('2d');
        this.ctx.lineWidth=5;
        this.ctx.fillStyle='#efefef';
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