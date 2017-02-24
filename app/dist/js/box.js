'use strict';
"use stict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoundBox = function () {
    function BoundBox(boxConfig, canvas) {
        _classCallCheck(this, BoundBox);

        this.boxx = boxConfig.boxx;
        this.boxy = boxConfig.boxy;
        this.boxWidht = boxConfig.boxWidht;
        this.boxHeight = boxConfig.boxHeight;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#000';
        this.ctx.fillStyle = '#000';
    }

    _createClass(BoundBox, [{
        key: 'drawBox',
        value: function drawBox() {
            this.ctx.strokeRect(this.boxx, this.boxy, this.boxWidht, this.boxHeight);
        }
    }, {
        key: 'clearBox',
        value: function clearBox() {
            this.ctx.clearRect(this.boxx + this.ctx.lineWidth / 2, this.boxy + this.ctx.lineWidth / 2, this.boxWidht - this.ctx.lineWidth, this.boxWidht - this.ctx.lineWidth);
        }
    }]);

    return BoundBox;
}();