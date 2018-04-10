Object.defineProperty(exports,"__esModule",{value:true});exports.STATUS_MODES=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _style=require('../../style');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _image=require('../image');var _image2=_interopRequireDefault(_image);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var STATUS_MODES=exports.STATUS_MODES={
ONLINE:'ONLINE',
OFFLINE:'OFFLINE',
AWAY:'AWAY',
NONE:'NONE'};var










Avatar=function(_BaseComponent){_inherits(Avatar,_BaseComponent);function Avatar(){_classCallCheck(this,Avatar);return _possibleConstructorReturn(this,(Avatar.__proto__||Object.getPrototypeOf(Avatar)).apply(this,arguments));}_createClass(Avatar,[{key:'generateStyles',value:function generateStyles()















































































{
this.styles=createStyles(this.props);
}},{key:'getStatusBadgeColor',value:function getStatusBadgeColor(

status){
switch(status){
case Avatar.modes.NONE:
return null;
case Avatar.modes.AWAY:
return _style.Colors.yellow30;
case Avatar.modes.ONLINE:
return _style.Colors.green30;
case Avatar.modes.OFFLINE:
return _style.Colors.dark60;
default:
return null;}

}},{key:'getBadgeColor',value:function getBadgeColor(

isOnline,status){
var onlineOverride=status===STATUS_MODES.NONE?isOnline:false;
var badgeColor=onlineOverride?_style.Colors.green30:this.getStatusBadgeColor(status);
return badgeColor;
}},{key:'renderBadge',value:function renderBadge()

{var _props=
this.props,testID=_props.testID,isOnline=_props.isOnline,status=_props.status;
var badgeColor=this.getBadgeColor(isOnline,status);
if(badgeColor===null){
return false;
}
return(
_react2.default.createElement(_view2.default,{style:this.styles.onlineBadge,testID:testID+'.onlineBadge'},
_react2.default.createElement(_view2.default,{style:[this.styles.onlineBadgeInner,{backgroundColor:badgeColor}]})));


}},{key:'renderRibbon',value:function renderRibbon()

{var _props2=
this.props,ribbonLabel=_props2.ribbonLabel,ribbonStyle=_props2.ribbonStyle,ribbonLabelStyle=_props2.ribbonLabelStyle;
if(ribbonLabel){
return(
_react2.default.createElement(_view2.default,{style:[this.styles.ribbon,ribbonStyle]},
_react2.default.createElement(_text2.default,{numberOfLines:1,text100:true,white:true,style:[ribbonLabelStyle]},
ribbonLabel)));



}
}},{key:'renderImage',value:function renderImage()

{var _props3=
this.props,imageSource=_props3.imageSource,onImageLoadStart=_props3.onImageLoadStart,onImageLoadEnd=_props3.onImageLoadEnd,onImageLoadError=_props3.onImageLoadError,testID=_props3.testID;
var hasImage=!_lodash2.default.isUndefined(imageSource);
if(hasImage){
return(
_react2.default.createElement(_image2.default,{
style:this.styles.image,
source:imageSource,
onLoadStart:onImageLoadStart,
onLoadEnd:onImageLoadEnd,
onError:onImageLoadError,
testID:testID+'.image'}));


}
return undefined;
}},{key:'render',value:function render()

{var _props4=
this.props,label=_props4.label,color=_props4.labelColor,imageSource=_props4.imageSource,backgroundColor=_props4.backgroundColor,onPress=_props4.onPress,containerStyle=_props4.containerStyle,testID=_props4.testID;
var Container=onPress?_reactNative.TouchableOpacity:_view2.default;
var hasImage=!_lodash2.default.isUndefined(imageSource);

return(
_react2.default.createElement(Container,{style:[this.styles.container,containerStyle],testID:testID,onPress:onPress},
_react2.default.createElement(_view2.default,{
style:[this.styles.initialsContainer,{backgroundColor:backgroundColor},hasImage&&this.styles.initialsContainerWithInset]},

_react2.default.createElement(_text2.default,{numberOfLines:1,style:[this.styles.initials,{color:color}]},
label)),


this.renderImage(),
this.renderBadge(),
this.renderRibbon()));


}}]);return Avatar;}(_commons.BaseComponent);Avatar.displayName='Avatar';Avatar.modes=STATUS_MODES;Avatar.propTypes={backgroundColor:_propTypes2.default.string,containerStyle:_reactNative.ViewPropTypes.style,imageSource:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),onImageLoadStart:_propTypes2.default.func,onImageLoadEnd:_propTypes2.default.func,onImageLoadError:_propTypes2.default.func,label:_propTypes2.default.string,labelColor:_propTypes2.default.string,ribbonLabel:_propTypes2.default.string,ribbonStyle:_reactNative.ViewPropTypes.style,ribbonLabelStyle:_text2.default.propTypes.style,isOnline:_propTypes2.default.bool,status:_propTypes2.default.oneOf(Object.keys(STATUS_MODES)),size:_propTypes2.default.number,testID:_propTypes2.default.string,onPress:_propTypes2.default.func};Avatar.defaultProps={backgroundColor:_style.Colors.dark80,size:50,labelColor:_style.Colors.dark10,status:STATUS_MODES.NONE};exports.default=Avatar;


function createStyles(_ref){var size=_ref.size,labelColor=_ref.labelColor,imageSource=_ref.imageSource;
var borderRadius=size/2;
var fontSizeToImageSizeRatio=0.32;
var styles=_reactNative.StyleSheet.create({
container:{
alignItems:'center',
justifyContent:'center',
width:size,
height:size,
borderRadius:borderRadius},

initialsContainer:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
alignItems:'center',
justifyContent:'center',
borderRadius:borderRadius}),

initialsContainerWithInset:{
top:1,
right:1,
bottom:1,
left:1},


initials:{
fontSize:size*fontSizeToImageSizeRatio,
color:labelColor,
backgroundColor:'rgba(0,0,0,0)'},


defaultImage:{
width:size,
height:size,
borderRadius:borderRadius},

image:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
position:'absolute',
width:size,
height:size,
borderRadius:borderRadius}),

onlineBadge:{
height:13.5,
width:13.5,
padding:1.5,
borderRadius:999,
backgroundColor:_style.Colors.white,
position:'absolute',
right:imageSource?-1.5:0,
top:4.5},

onlineBadgeInner:{
flex:1,
borderRadius:999},


fixAbsolutePosition:{
position:undefined,
left:undefined,
bottom:undefined},

ribbon:{
position:'absolute',
right:_helpers.Constants.isIOS?'-15%':0,
top:_helpers.Constants.isIOS?'-10%':0,
backgroundColor:_style.Colors.blue30,
borderRadius:_style.BorderRadiuses.br100,
paddingHorizontal:6,
paddingVertical:3}});



return styles;
}