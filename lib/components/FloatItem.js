"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var style = props.style;
  return _react2.default.createElement(
    "div",
    { style: style, className: "float-grid__float-item" },
    props.children
  );
}; /**
    * Float Item
    */

module.exports = exports['default'];