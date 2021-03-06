"use strict";
/**
 * Created by bethd on 2017-03-14.
 */
"user strict";

var shapeConfig = {};
var changeColor = ["yellow", "blue", "pink", "black", "red", "purple"];
var componet = {
    BALL: "ball",
    GROUND: "ground",
    TARGET: "target",
    SLING: "sling"
};

function makeGameComponet(startX, startY, ctx) {
    //공만들기
    shapeConfig = {
        x: startX,
        y: startY,
        shapeRad: 20,
        width: 1200,
        height: 30,
        fillStyle: "yellow"
    };
    var ball = new Circle(shapeConfig, ctx);

    //땅만들기
    shapeConfig = {
        x: 0,
        y: 230,
        width: 500,
        height: 50,
        fillStyle: "green"
    };
    var ground = new Rect(shapeConfig, ctx);

    //타켓만들기
    shapeConfig = {
        width: 50,
        height: 150,
        x: 450,
        y: 120,
        fillStyle: "red"
    };
    var target = new Rect(shapeConfig, ctx);

    //sling만들기
    shapeConfig = {
        x: startX,
        y: startY,
        s1x: startX + 80,
        s1y: startY - 10,
        s2x: startX + 80,
        s2y: startY + 10,
        s3x: startX + 80,
        s3y: startY + 130,
        fillStyle: "gray"
    };
    var sling = new Sling(shapeConfig, ctx);

    //map에 담기
    var objectMap = new Map();
    objectMap.set(componet.TARGET, target);
    objectMap.set(componet.GROUND, ground);
    objectMap.set(componet.SLING, sling);
    objectMap.set(componet.BALL, ball);

    function drawAll() {
        //현재 캔버스 지우기
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        objectMap.forEach(function (value, key) {
            objectMap.get(key).drawShape();
        });
    }
    //
    // function drawShapeEach(shape){
    //     objectMap.get(shape).drawShape();
    // }


    function moveBall(x, y, moveBallInterval, canvas) {

        ball.moveball(x, y);
        //볼 범위 유효성 검사하기-땅에 닫는지

        if (ball.getOffsetY(true) >= ground.y) {
            endGame(moveBallInterval, "TRY AGAIN");
        }

        //캔버스 안에 있는지 확인하기
        if (ball.getOffsetY(false) <= canvas.offsetTop || ball.getOffsetX(true) >= canvas.offsetLeft + canvas.width) {
            endGame(moveBallInterval, "TRY AGAIN");
        }

        //볼 범위 유효성 검사 - 타겟에 닿았는지
        if (ball.getOffsetX(true) >= target.x && ball.getOffsetX(true) <= target.x + target.widht && ball.getOffsetY(true) >= target.y) {
            endGame(moveBallInterval, "SUCCESS");
        }

        ball.fillStyle = changeColor[1 + Math.floor(Math.random() * 6)];
        drawAll();
    }

    function endGame(moveBallInterval, message) {
        alert(message);
        clearInterval(moveBallInterval);
        cancelAnimationFrame(moveBallInterval);
        ball.resetPosition(startX, startY);
    }

    function isInShapeArea(x, y, shape) {
        var target = objectMap.get(shape);
        return x > target.getOffsetX(true) && x < target.getOffsetX(false) && y > target.getOffsetY(true) && y < target.getOffsetY(false);
    }

    function resetPosition(x, y, shape) {
        objectMap.get(shape).resetPosition(x, y);
    }

    function getOut0fCannon() {
        return distsq(sling.x, sling.y, sling.s1x, sling.s1y) / 700;
    }

    function getAngleRadians() {
        return -Math.atan2(sling.s1y - sling.y, sling.s1x - sling.x);
    }

    function distsq(x, y, x1, y1) {
        return (x - x1) * (x - x1) + (y - y1) * (y - y1);
    }

    return { drawAll: drawAll,
        isInShapeArea: isInShapeArea,
        resetPosition: resetPosition,
        moveBall: moveBall,
        getOut0fCannon: getOut0fCannon,
        getAngleRadians: getAngleRadians
    };
};