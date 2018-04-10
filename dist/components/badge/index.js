Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=_interopRequireWildcard(_reactNativeAnimatable);
var _colors=require('../../style/colors');var _colors2=_interopRequireDefault(_colors);
var _commons=require('../../commons');
var _style=require('../../style');function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var








Badge=function(_BaseComponent){_inherits(Badge,_BaseComponent);function Badge(){_classCallCheck(this,Badge);return _possibleConstructorReturn(this,(Badge.__proto__||Object.getPrototypeOf(Badge)).apply(this,arguments));}_createClass(Badge,[{key:'generateStyles',value:function generateStyles()




































{
this.styles=createStyles(this.props);
}},{key:'getBadgeSizeStyle',value:function getBadgeSizeStyle()

{var _props=
this.props,label=_props.label,size=_props.size,borderWidth=_props.borderWidth;
var isOneLetter=label.length<2;
var isSmallBadge=size==='small';
var width=isSmallBadge?isOneLetter?18:25:isOneLetter?21:30;
var height=isSmallBadge?18:21;
if(borderWidth){
width+=borderWidth*2;
height+=borderWidth*2;
}

return{width:width,height:height};
}},{key:'render',value:function render()

{var _props2=
this.props,size=_props2.size,borderWidth=_props2.borderWidth,borderColor=_props2.borderColor;
var containerStyle=this.extractContainerStyle(this.props);
var backgroundStyle=this.props.backgroundColor&&{backgroundColor:this.props.backgroundColor};
var animationProps=this.extractAnimationProps();
var isSmallBadge=size==='small';
var sizeStyle=this.getBadgeSizeStyle();

return(
_react2.default.createElement(Animatable.View,_extends({
testID:this.props.testId,
style:[
sizeStyle,
this.styles.badge,
borderWidth&&{borderWidth:borderWidth},
borderColor&&{borderColor:borderColor},
containerStyle,
backgroundStyle]},

animationProps),

_react2.default.createElement(_reactNative.Text,{
style:[this.styles.label,isSmallBadge&&this.styles.labelSmall],
allowFontScaling:false,
numberOfLines:1,
testID:'badge'},

this.props.label)));



}}]);return Badge;}(_commons.BaseComponent);Badge.displayName='Badge';Badge.propTypes={label:_propTypes2.default.string,backgroundColor:_propTypes2.default.string,size:_propTypes2.default.oneOf(['default','small']),borderWidth:_propTypes2.default.number,borderColor:_propTypes2.default.string,containerStyle:_propTypes2.default.object,testId:_propTypes2.default.string};Badge.defaultProps={size:'default'};exports.default=Badge;


function createStyles(){
return _reactNative.StyleSheet.create({
badge:{
borderRadius:_style.BorderRadiuses.br100,
backgroundColor:_style.ThemeManager.primaryColor,
alignItems:'center',
justifyContent:'center'},

badgeSmall:{
height:18},

label:_extends({},
_style.Typography.text90,{
color:_colors2.default.white,
backgroundColor:'rgba(0,0,0,0)'}),

labelSmall:_extends({},
_style.Typography.text100,{
lineHeight:undefined})});


}