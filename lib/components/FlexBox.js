'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
	var defaultStyle = {
		display: 'flex'
	};
	var style = props.style;

	style = Object.assign({}, defaultStyle, style || {});
	return _react2.default.createElement(
		'div',
		{ style: style, className: 'flex-box' },
		props.children
	);
}; /**
    * Flex Container
    */

module.exports = exports['default'];