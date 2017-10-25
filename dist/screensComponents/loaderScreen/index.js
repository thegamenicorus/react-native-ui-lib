Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=_interopRequireWildcard(_reactNativeAnimatable);
var _style=require('../../style');
var _Constants=require('../../helpers/Constants');var Constants=_interopRequireWildcard(_Constants);
var _commons=require('../../commons');
var _text=require('../../components/text');var _text2=_interopRequireDefault(_text);
var _view=require('../../components/view');var _view2=_interopRequireDefault(_view);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




LoaderScreen=function(_BaseComponent){_inherits(LoaderScreen,_BaseComponent);function LoaderScreen(){_classCallCheck(this,LoaderScreen);return _possibleConstructorReturn(this,(LoaderScreen.__proto__||Object.getPrototypeOf(LoaderScreen)).apply(this,arguments));}_createClass(LoaderScreen,[{key:'render',value:function render()























{var _props=
this.props,message=_props.message,messageStyle=_props.messageStyle,loaderColor=_props.loaderColor,overlay=_props.overlay,others=_objectWithoutProperties(_props,['message','messageStyle','loaderColor','overlay']);
var animationProps=this.extractAnimationProps();
return(
_react2.default.createElement(Animatable.View,_extends({
style:[overlay?styles.overlayContainer:styles.container]},
animationProps),

_react2.default.createElement(_view2.default,{flex:true,center:true},
_react2.default.createElement(_reactNative.ActivityIndicator,_extends({
size:'large',
animating:true,
color:loaderColor||(Constants.isIOS?_style.Colors.dark60:_style.ThemeManager.primaryColor)},
others)),

message&&_react2.default.createElement(_text2.default,{style:[styles.message,messageStyle]},message))));



}}]);return LoaderScreen;}(_commons.BaseComponent);LoaderScreen.displayName='LoaderScreen';LoaderScreen.propTypes=_extends({},_reactNative.ActivityIndicator.propTypes,{loaderColor:_propTypes2.default.string,message:_propTypes2.default.string,messageStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),overlay:_propTypes2.default.bool});exports.default=LoaderScreen;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1},

overlayContainer:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
backgroundColor:_style.Colors.rgba(_style.Colors.white,0.85),
zIndex:100}),

message:_extends({},
_style.Typography.text70,{
marginTop:18,
color:_style.Colors.dark10})});