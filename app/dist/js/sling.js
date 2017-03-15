"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
    function Shape(shapeConfig, ctx) {
        _classCallCheck(this, Shape);

        this.x = shapeConfig.x || "0";
        this.y = shapeConfig.y || "0";
        this.fillStyle = shapeConfig.fillStyle || "pink";
        this.ctx = ctx;
    }

    _createClass(Shape, [{
        key: "resetPosition",
        value: function resetPosition(mx, my) {
            this.x = mx;
            this.y = my;
        }
    }]);

    return Shape;
}();

var Circle = function (_Shape) {
    _inherits(Circle, _Shape);

    function Circle(diceParameter, canvas) {
        _classCallCheck(this, Circle);

        var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, diceParameter, canvas));

        _this.shapeRad = diceParameter.shapeRad;
        return _this;
    }

    _createClass(Circle, [{
        key: "drawShape",
        value: function drawShape() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.shapeRad, Math.PI * 2, false);
            this.ctx.closePath();
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.fill();
        }
    }, {
        key: "getOffsetX",
        value: function getOffsetX(isStart) {
            return isStart ? this.x - this.shapeRad : this.x + this.shapeRad;
        }
    }, {
        key: "getOffsetY",
        value: function getOffsetY(isStart) {
            return isStart ? this.y - this.shapeRad : this.y + this.shapeRad;
        }
    }, {
        key: "moveball",
        value: function moveball(x, y) {
            this.x += x;
            this.y += y;
        }
    }]);

    return Circle;
}(Shape);

var Rect = function (_Shape2) {
    _inherits(Rect, _Shape2);

    function Rect(diceParameter, canvas) {
        _classCallCheck(this, Rect);

        var _this2 = _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, diceParameter, canvas));

        _this2.widht = diceParameter.width;
        _this2.height = diceParameter.height;
        return _this2;
    }

    _createClass(Rect, [{
        key: "drawShape",
        value: function drawShape() {
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.fillRect(this.x, this.y, this.widht, this.height);
        }
    }, {
        key: "getOffsetX",
        value: function getOffsetX() {
            return this.x + this.widht;
        }
    }, {
        key: "getOffsetY",
        value: function getOffsetY() {
            return this.y + this.height;
        }
    }]);

    return Rect;
}(Shape);

var Sling = function (_Shape3) {
    _inherits(Sling, _Shape3);

    function Sling(shapeConfig, canvas) {
        _classCallCheck(this, Sling);

        var _this3 = _possibleConstructorReturn(this, (Sling.__proto__ || Object.getPrototypeOf(Sling)).call(this, shapeConfig, canvas));

        _this3.s1x = shapeConfig.s1x;
        _this3.s1y = shapeConfig.s1y;
        _this3.s2x = shapeConfig.s2x;
        _this3.s2y = shapeConfig.s2y;
        _this3.s3x = shapeConfig.s3x;
        _this3.s3y = shapeConfig.s3y;
        return _this3;
    }

    _createClass(Sling, [{
        key: "drawShape",
        value: function drawShape() {
            this.ctx.strokeStyle = this.fillStyle;
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.s1x, this.s1y);
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(this.s2x, this.s2y);
            this.ctx.moveTo(this.s1x, this.s1y);
            this.ctx.lineTo(this.s2x, this.s2y);
            this.ctx.lineTo(this.s3x, this.s3y);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }]);

    return Sling;
}(Shape);