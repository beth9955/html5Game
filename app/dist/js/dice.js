
"use strict";
//기존 소스 재활용하기(craps-game / dice.js)

function Dice(diceParameter, box) {
    Shape.call(this, diceParameter);

    //width, height재정의
    this.widht = this.shapeRad * 2;
    this.height = this.shapeRad * 2;
    this.box = box;
    this.dotrad = diceParameter.dotrad || 6;
    this.ch = 1;
    this.dots = [];
}

//Shape속성 prototype link걸기
Dice.prototype = Object.create(Shape.prototype);
Dice.prototype.construct = Dice;

//공통 호출메소드인 drawShape만 새로 정의
Dice.prototype.drawShape = function () {
    this.startGame();
};

Dice.prototype.setDiceX = function (diceX) {
    this.x = diceX;
};

Dice.prototype.setDiceY = function (diceY) {
    this.y = diceY;
};

Dice.prototype.startGame = function () {
    this.changeDiceNumber();
    this.drawDice();
    this.makeDot();
    return this.ch;
};

Dice.prototype.changeDiceNumber = function () {
    this.ch = 1 + Math.floor(Math.random() * 6);
};

Dice.prototype.drawDice = function () {
    this.box.ctx.clearRect(this.box.boxx + this.box.ctx.lineWidth / 2, this.box.boxy + this.box.ctx.lineWidth / 2, this.box.boxWidht - this.box.ctx.lineWidth, this.box.boxWidht - this.box.ctx.lineWidth);
    this.box.ctx.strokeRect(this.x, this.y, this.widht, this.height);
};

Dice.prototype.makeDot = function () {
    switch (this.ch) {
        case 1:
            this.draw1();break;
        case 2:
            this.draw2();break;
        case 3:
            this.draw1();this.draw2();break;
        case 4:
            this.draw4();break;
        case 5:
            this.draw1();this.draw4();break;
        case 6:
            this.draw4();this.draw1Mid();break;
    }

    this.creatDot();
};

Dice.prototype.draw1 = function () {
    var x = this.middleDiceX();
    var y = this.middleDiceY();
    this.dots.push([x, y]);
};

Dice.prototype.draw2 = function () {
    var x,
        y = 0;
    x = this.dotRadFromDiceX(true);
    y = this.dotRadFromDiceY(true);
    this.dots.push([x, y]);
    x = this.dotRadFromDiceX(false);
    y = this.dotRadFromDiceX(false);
    this.dots.push([x, y]);
};

Dice.prototype.draw4 = function () {
    var x,
        y = 0;
    x = this.dotRadFromDiceX(true);
    y = this.dotRadFromDiceY(true);
    this.dots.push([x, y]);
    x = this.dotRadFromDiceX(false);
    y = this.dotRadFromDiceX(false);
    this.dots.push([x, y]);
    x = this.dotRadFromDiceX(false);
    y = this.dotRadFromDiceY(true);
    this.dots.push([x, y]);
    x = this.dotRadFromDiceX(true);
    y = this.dotRadFromDiceX(false);
    this.dots.push([x, y]);
};

Dice.prototype.draw1Mid = function () {
    var x,
        y = 0;
    x = this.middleDiceX();
    y = this.moveYDistance();
    this.dots.push([x, y]);
    x = this.middleDiceX();
    y = this.height - this.moveYDistance();
    this.dots.push([x, y]);
};

Dice.prototype.creatDot = function () {
    var _this2 = this;

    var _this = this;
    this.dots.forEach(function (item, index, dots) {
        _this2.box.ctx.beginPath();
        _this2.box.ctx.arc(item[0] + _this.x, item[1] + _this.y, _this.dotrad, 0, Math.PI * 2, false);
        _this2.box.ctx.closePath();
        _this2.box.ctx.fill();
    });

    //초기화
    this.dots = [];
};

Dice.prototype.dotRadFromDiceX = function (isOrigin) {
    return isOrigin ? this.moveXDistance() : this.widht - this.moveXDistance();
};

Dice.prototype.dotRadFromDiceY = function (isOrigin) {
    return isOrigin ? this.moveYDistance() : this.height - this.moveYDistance();
};

Dice.prototype.moveXDistance = function () {
    return this.dotrad * 3;
};

Dice.prototype.moveYDistance = function () {
    return this.dotrad * 3;
};

Dice.prototype.middleDiceX = function () {
    return 0.5 * this.widht;
};

Dice.prototype.middleDiceY = function () {
    return 0.5 * this.height;
};