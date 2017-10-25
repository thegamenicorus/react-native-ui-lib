Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _TextInput=require('./TextInput');var _TextInput2=_interopRequireDefault(_TextInput);
var _BaseInput2=require('./BaseInput');var _BaseInput3=_interopRequireDefault(_BaseInput2);
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





MaskedInput=function(_BaseInput){_inherits(MaskedInput,_BaseInput);function MaskedInput(){_classCallCheck(this,MaskedInput);return _possibleConstructorReturn(this,(MaskedInput.__proto__||Object.getPrototypeOf(MaskedInput)).apply(this,arguments));}_createClass(MaskedInput,[{key:'renderMaskedText',value:function renderMaskedText()













{var
renderMaskedText=this.props.renderMaskedText;var
value=this.state.value;

if(_lodash2.default.isFunction(renderMaskedText)){
return renderMaskedText(value);
}

return _react2.default.createElement(_text2.default,null,value);
}},{key:'render',value:function render()

{var _this2=this;var
containerStyle=this.props.containerStyle;
return(
_react2.default.createElement(_view2.default,{style:[containerStyle]},
_react2.default.createElement(_TextInput2.default,_extends({},
this.props,{
ref:function ref(input){
_this2.input=input;
},
containerStyle:styles.hiddenInputContainer,
style:styles.hiddenInput,
enableErrors:false,
hideUnderline:true,
placeholder:'',
onChangeText:this.onChangeText})),

_react2.default.createElement(_touchableOpacity2.default,{
activeOpacity:1,
style:styles.maskedInputWrapper,
onPress:this.focus},

this.renderMaskedText())));



}}]);return MaskedInput;}(_BaseInput3.default);MaskedInput.displayName='MaskedInput';MaskedInput.propTypes=_extends({},_TextInput2.default.propTypes,{renderMaskedText:_propTypes2.default.func.isRequired,containerStyle:_reactNative.ViewPropTypes.style});exports.default=MaskedInput;


var styles=_reactNative.StyleSheet.create({
hiddenInputContainer:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
zIndex:1}),

hiddenInput:{
color:'transparent',
height:undefined},

maskedInputWrapper:{
zIndex:1}});