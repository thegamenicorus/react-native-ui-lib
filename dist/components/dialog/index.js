Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=_interopRequireWildcard(_reactNativeAnimatable);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _style=require('../../style');
var _modal=require('../../screensComponents/modal');var _modal2=_interopRequireDefault(_modal);
var _view=require('../view');var _view2=_interopRequireDefault(_view);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var










Dialog=function(_BaseComponent){_inherits(Dialog,_BaseComponent);function Dialog(){_classCallCheck(this,Dialog);return _possibleConstructorReturn(this,(Dialog.__proto__||Object.getPrototypeOf(Dialog)).apply(this,arguments));}_createClass(Dialog,[{key:'generateStyles',value:function generateStyles()











































{
this.styles=createStyles(this.props);
}},{key:'getAnimationConfig',value:function getAnimationConfig()

{var
animationConfig=this.props.animationConfig;
return _extends({
animation:'slideInUp',
duration:400,
useNativeDriver:true},
animationConfig);

}},{key:'render',value:function render()

{var _getThemeProps=






this.getThemeProps(),visible=_getThemeProps.visible,overlayBackgroundColor=_getThemeProps.overlayBackgroundColor,style=_getThemeProps.style,onDismiss=_getThemeProps.onDismiss,backgroundPressDisabled=_getThemeProps.backgroundPressDisabled;var
alignments=this.state.alignments;
var centerByDefault=_lodash2.default.isEmpty(alignments);

return(
_react2.default.createElement(_modal2.default,{
transparent:true,
visible:visible,
animationType:'fade',
onBackgroundPress:backgroundPressDisabled?null:onDismiss,
onRequestClose:onDismiss,
overlayBackgroundColor:overlayBackgroundColor},

_react2.default.createElement(_view2.default,{
center:centerByDefault,
style:[this.styles.overlay,alignments],
pointerEvents:'box-none'},

_react2.default.createElement(Animatable.View,_extends({
style:[this.styles.dialogContainer,style]},
this.getAnimationConfig()),

this.props.children))));




}}]);return Dialog;}(_commons.BaseComponent);Dialog.displayName='Dialog';Dialog.propTypes={visible:_propTypes2.default.bool,onDismiss:_propTypes2.default.func,overlayBackgroundColor:_propTypes2.default.string,width:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),height:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),animationConfig:_propTypes2.default.object,containerStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])};Dialog.defaultProps={overlayBackgroundColor:_style.Colors.rgba(_style.Colors.dark10,0.6),width:'90%',height:'70%'};


function createStyles(_ref){var width=_ref.width,height=_ref.height;
return _reactNative.StyleSheet.create({
overlay:{
flex:1},

dialogContainer:{
width:width,
height:height}});


}exports.default=

Dialog;