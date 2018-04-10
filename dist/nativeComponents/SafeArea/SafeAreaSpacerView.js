Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NativeSafeAreaSpacerView=(0,_reactNative.requireNativeComponent)('SafeAreaSpacerView',null);

var SafeAreaSpacerView=function SafeAreaSpacerView(_ref){var style=_ref.style;
return(
NativeSafeAreaSpacerView?_react2.default.createElement(NativeSafeAreaSpacerView,{style:style}):_react2.default.createElement(_reactNative.View,{style:style}));

};
SafeAreaSpacerView.propTypes={
style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])};exports.default=


SafeAreaSpacerView;