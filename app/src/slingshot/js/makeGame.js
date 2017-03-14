/**
 * Created by bethd on 2017-03-14.
 */
"user strict";
let shapeConfig={};
function makeGameComponet(startX, startY, ctx){
    //공만들기
    shapeConfig={
        x:startX
        , y:startY
        , shapeRad:10
        , width:1200
        , height:30
        , fillStyle:"yellow"
    };
    let ball=new Circle(shapeConfig, ctx);

    //땅만들기
    shapeConfig={
        x:0
        , y:370
        , width:1200
        , height:30
        , fillStyle:"gray"
    }
    let ground= new Rect(shapeConfig, ctx);

    //타켓만들기
    shapeConfig={
        x:700
        , y:210
        , width:209
        , height:179
        , fillStyle:"red"
    }
    let target=new Rect(shapeConfig, ctx);


    //sling만들기
    shapeConfig={
        x:startX
        , y:startY
        , s1x:startX+80
        , s1y:startY-10
        , s2x:startX+80
        , s2y:startY+10
        , s3x:startX+70
        , s3y:startY+180
        , fillStyle:"red"
    }
    let sling=new Sling(shapeConfig, ctx);

    //map에 담기
    let objectMap=new Map();
    objectMap.set("ball", ball);
    objectMap.set("ground", ground);
    objectMap.set("target", target);
    objectMap.set("sling", sling);

    function drawAll(){
        //현재 캔버스 지우기
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        objectMap.forEach(function(value, key) {
            objectMap.get(key).drawShape();
        });
    }

    return {drawAll:drawAll};
};

