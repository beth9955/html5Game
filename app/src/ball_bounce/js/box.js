"use stict";

class BoundBox{
    
    constructor(boxConfig, canvas){
        this.boxx=boxConfig.boxx;
        this.boxy=boxConfig.boxy;
        this.boxWidht=boxConfig.boxWidht;
        this.boxHeight=boxConfig.boxHeight;
        this.canvas=canvas;
        this.ctx=canvas.getContext('2d');
        this.ctx.lineWidth=5;
        this.ctx.strokeStyle='#000';
        this.ctx.fillStyle='#000';
    }

    drawBox(){
        this.ctx.strokeRect(this.boxx, this.boxy,  this.boxWidht, this.boxHeight);
    }
 
}