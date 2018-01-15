Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');



var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var StepperButton=function StepperButton(_ref){var label=_ref.label,testId=_ref.testId,styles=_ref.styles,disabled=_ref.disabled,onPress=_ref.onPress;return(
_react2.default.createElement(_reactNative.TouchableOpacity,{disabled:disabled,testID:testId,onPress:onPress,style:styles.button},
_react2.default.createElement(_reactNative.Text,{style:[styles.buttonText,disabled&&styles.disableText],allowFontScaling:false},
label)));};



StepperButton.propTypes={



label:_propTypes2.default.string,



testId:_propTypes2.default.string,



styles:_propTypes2.default.object.isRequired,



disabled:_propTypes2.default.bool,



onPress:_propTypes2.default.func};


StepperButton.displayName='IGNORE';exports.default=

StepperButton;