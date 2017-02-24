"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
    function Shape(shapeConfig, box) {
        _classCallCheck(this, Shape);

        this.x = shapeConfig.x;
        this.y = shapeConfig.y;
        this.shapeRad = shapeConfig.shapeRad;
        this.vX = shapeConfig.vX;
        this.vY = shapeConfig.vY;
        this.box = box;
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
            this.rightBoundX = this.box.boxx + this.box.boxWidht - this.box.ctx.lineWidth - this.shapeRad * 2; //오른쪽
            this.bottomBoundY = this.box.boxy + this.box.boxHeight - this.box.ctx.lineWidth - this.shapeRad * 2; //아래
            this.leftBoundX = this.box.boxx + this.box.ctx.lineWidth; //왼쪽
            this.topBoundY = this.box.boxy + this.box.ctx.lineWidth;
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
        key: "moveCheck",
        value: function moveCheck() {
            //오른쪽
            if (this.x >= this.rightBoundX) {
                this.vX = -this.vX;
                this.x = this.rightBoundX;
            }
            //왼쪽
            if (this.leftBoundX > this.x) {
                this.vX = -this.vX;
                this.x = this.leftBoundX;
            }
            //아래쪽
            if (this.y >= this.bottomBoundY) {
                this.vY = -this.vY;
                this.y = this.bottomBoundY;
            }

            //위쪽
            if (this.topBoundY > this.y) {
                this.vY = -this.vY;
                this.y = this.topBoundY;
            }
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
        key: "drawShape",
        value: function drawShape() {
            _get(Circle.prototype.__proto__ || Object.getPrototypeOf(Circle.prototype), "drawShape", this).call(this);
            //원일때만 좌표 옮기기
            this.box.ctx.translate(+this.shapeRad, +this.shapeRad);
            this.box.ctx.beginPath();
            this.box.ctx.arc(this.x, this.y, this.shapeRad, Math.PI * 2, false);
            this.box.ctx.closePath();
            this.box.ctx.fill();
            this.box.ctx.stroke();
            this.box.ctx.translate(-this.shapeRad, -this.shapeRad);
        }
    }]);

    return Circle;
}(Shape);