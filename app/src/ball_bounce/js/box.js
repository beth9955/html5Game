"use stict";

class BoundBox(){
    //box
    let boxx=20;
    let boxy=20;
    let boxWidth=300;
    let boxHeight=300;

    let rightBoundX;
    let bottomBoundY;
    let leftBoundX;
    let topBoundY;
    let ctx;
    let lineHeight;
    
    let shapeRad;
    
    constrctor(ctx,lineHeight ){
       this.ctx=ctx; 
       this.lineHeight=lineHeight;
    }
    
    drawBox(){
        ctx.clearRect(boxx, boxy, boxWidth, boxHeight);
        ctx.strokeRect(boxx, boxy, boxWidth, boxHeight);
    }
    
    setShapeRad(shapeRad){
        this.shapeRad=shapeRad;
    }
    
    getRightBoundX(){
        return boxx+boxWidth-lineWidth/2-shapeRad;
    }
    
    getLeftBoundX(){
        return boxx+lineWidth/2+shapeRad;//왼쪽;
    }
    
    getTopBoundY(){
        return boxy+lineWidth/2+shapeRad; //위쪽
    }
    
    getBottomBound(){
        return boxy+boxHeight-lineWidth/2-shapeRad; //아래;
    }
}