'use strict';
"use stict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundBox = function () {
    function BoundBox(canvas) {
        _classCallCheck(this, BoundBox);

        this.boxx = 20;
        this.boxy = 20;
        this.boxWidht = 300;
        this.boxHeight = 300;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.lineWidth = 5;
        this.ctx.fillStyle = '#efefef';
    }

    _createClass(BoundBox, [{
        key: 'drawBox',
        value: function drawBox() {
            this.ctx.strokeRect(this.boxx, this.boxy, this.boxWidht, this.boxHeight);
        }
    }, {
        key: 'getBox',
        value: function getBox() {
            return this;
        }
    }, {
        key: 'getCtx',
        value: function getCtx() {
            return this.ctx;
        }
    }, {
        key: 'getBoxX',
        value: function getBoxX() {
            return this.boxx;
        }
    }, {
        key: 'getBoxY',
        value: function getBoxY() {
            return this.boxy;
        }
    }, {
        key: 'getBoxWidth',
        value: function getBoxWidth() {
            return this.boxWidht;
        }
    }, {
        key: 'getBoxHeight',
        value: function getBoxHeight() {
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

    }]);

    return BoundBox;
}();
"use strict";

function Dice(diceX, diceY, diceWidth, diceHeiht, dotrad) {
    this.diceX = diceX;
    this.diceY = diceY;
    this.diceWidth = diceWidth;
    this.diceHeight = diceHeiht;
    this.dotrad = dotrad;
    this.ch = 1;
    this.dots = [];
}

Dice.prototype.setDiceX = function (diceX) {
    this.diceX = diceX;
};

Dice.prototype.setDiceY = function (diceY) {
    this.diceY = diceY;
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
    ctx.clearRect(this.diceX, this.diceY, this.diceWidth, this.diceHeight);
    ctx.strokeRect(this.diceX, this.diceY, this.diceWidth, this.diceHeight);
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
    y = this.diceHeight - this.moveYDistance();
    this.dots.push([x, y]);
};

Dice.prototype.creatDot = function () {
    var _this = this;
    this.dots.forEach(function (item, index, dots) {
        ctx.beginPath();
        ctx.arc(item[0] + _this.diceX, item[1] + _this.diceY, _this.dotrad, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    });
    //초기화
    this.dots = [];
};

Dice.prototype.dotRadFromDiceX = function (isOrigin) {
    return isOrigin ? this.moveXDistance() : this.diceWidth - this.moveXDistance();
};

Dice.prototype.dotRadFromDiceY = function (isOrigin) {
    return isOrigin ? this.moveYDistance() : this.diceHeight - this.moveYDistance();
};

Dice.prototype.moveXDistance = function () {
    return this.dotrad * 3;
};

Dice.prototype.moveYDistance = function () {
    return this.dotrad * 3;
};

Dice.prototype.middleDiceX = function () {
    return 0.5 * this.diceWidth;
};

Dice.prototype.middleDiceY = function () {
    return 0.5 * this.diceHeight;
};
"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
    function Shape(shapeConfig) {
        _classCallCheck(this, Shape);

        this.x = shapeConfig.x;
        this.y = shapeConfig.y;
        this.widht = shapeConfig.widht;
        this.height = shapeConfig.height;
        this.shapeRad = shapeConfig.shapeRad;
        this.vX = shapeConfig.vX;
        this.vY = shapeConfig.vY;
    }

    _createClass(Shape, [{
        key: "moveShape",
        value: function moveShape() {
            this.calculateBound();
            this.keepMoveInterval();
        }
    }, {
        key: "calculateBound",
        value: function calculateBound() {
            this.rightBoundX = this.box.getBoxX() + this.box.getBoxWidth() - this.shapeRad; //오른쪽
            this.bottomBoundY = this.box.getBoxY() + this.box.getBoxHeight() - this.shapeRad; //아래
            this.leftBoundX = this.box.getBoxX() + this.shapeRad; //왼쪽
            this.topBoundY = this.box.getBoxY() + this.shapeRad;
        }
    }, {
        key: "keepMoveInterval",
        value: function keepMoveInterval() {
            var _this = this;

            setInterval(function () {
                _this.x += _this.vX;
                _this.y += _this.vY;
                _this.moveCheck();
                _this.drawShape();
            }, 1000);
        }
    }, {
        key: "drawShape",
        value: function drawShape() {}
    }, {
        key: "moveCheck",
        value: function moveCheck() {
            //계산과정 넣기
        }
    }, {
        key: "setBox",
        value: function setBox(box) {
            this.box = box;
        }
    }]);

    return Shape;
}();

var Circle = function (_Shape) {
    _inherits(Circle, _Shape);

    function Circle() {
        _classCallCheck(this, Circle);

        return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
    }

    _createClass(Circle, [{
        key: "setBox",
        value: function setBox(box) {
            _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), "setBox", this).call(this);
            this.box = box;
            this.ctx = box.getCtx();
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), "drawShape", this).call(this);
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.shapeRad, Math.PI * 2, false);
            this.ctx.closePath();
            this.ctx.fill();
        }
    }]);

    return Circle;
}(Shape);

var Rect = function (_Shape2) {
    _inherits(Rect, _Shape2);

    function Rect() {
        _classCallCheck(this, Rect);

        return _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).apply(this, arguments));
    }

    _createClass(Rect, [{
        key: "drawShape",
        value: function drawShape(ctx) {
            _get(Rect.prototype.__proto__ || Object.getPrototypeOf(Rect.prototype), "drawShape", this).call(this);
            ctx.beginPath();
            //  ctx.arc(this.x,bally,ballrad, Math.PI*2, false);
            ctx.closePath();
            ctx.fill();
        }
    }]);

    return Rect;
}(Shape);
//# sourceMappingURL=all.js.map
