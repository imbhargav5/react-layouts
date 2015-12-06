"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Flex Item
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FlexBox = (function (_React$Component) {
	_inherits(FlexBox, _React$Component);

	function FlexBox() {
		_classCallCheck(this, FlexBox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(FlexBox).apply(this, arguments));
	}

	_createClass(FlexBox, [{
		key: "render",
		value: function render() {
			var _props = this.props;
			var style = _props.style;
			var flexVal = _props.flexVal;

			var defaultStyle = {
				flex: flexVal || 1
			};
			style = Object.assign({}, defaultStyle, style || {});
			return _react2.default.createElement(
				"div",
				{ style: style, className: "flex-box__flex-item" },
				this.props.children
			);
		}
	}]);

	return FlexBox;
})(_react2.default.Component);

exports.default = FlexBox;
;
module.exports = exports['default'];