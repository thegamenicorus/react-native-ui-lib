Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _style=require('../../style');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _image=require('../image');var _image2=_interopRequireDefault(_image);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




Avatar=function(_BaseComponent){_inherits(Avatar,_BaseComponent);function Avatar(){_classCallCheck(this,Avatar);return _possibleConstructorReturn(this,(Avatar.__proto__||Object.getPrototypeOf(Avatar)).apply(this,arguments));}_createClass(Avatar,[{key:'generateStyles',value:function generateStyles()


























































{
this.styles=createStyles(this.props);
}},{key:'renderRibbon',value:function renderRibbon()

{var _props=
this.props,ribbonLabel=_props.ribbonLabel,ribbonStyle=_props.ribbonStyle,ribbonLabelStyle=_props.ribbonLabelStyle;
if(ribbonLabel){
return(
_react2.default.createElement(_view2.default,{style:[this.styles.ribbon,ribbonStyle]},
_react2.default.createElement(_text2.default,{numberOfLines:1,text100:true,white:true,style:[ribbonLabelStyle]},
ribbonLabel)));



}
}},{key:'render',value:function render()

{var _props2=
this.props,label=_props2.label,color=_props2.labelColor,imageSource=_props2.imageSource,isOnline=_props2.isOnline,backgroundColor=_props2.backgroundColor,testID=_props2.testID,onPress=_props2.onPress;
var containerStyle=this.extractContainerStyle(this.props);
var Container=onPress?_reactNative.TouchableOpacity:_view2.default;
return(
_react2.default.createElement(Container,{style:[this.styles.container,containerStyle,{backgroundColor:backgroundColor}],testID:testID,onPress:onPress},
_react2.default.createElement(_view2.default,{style:this.styles.initialsContainer},
_react2.default.createElement(_text2.default,{numberOfLines:1,style:[this.styles.initials,{color:color}]},
label)),



imageSource&&_react2.default.createElement(_image2.default,{style:this.styles.image,source:imageSource,testID:testID+'.image'}),
isOnline&&
_react2.default.createElement(_view2.default,{style:this.styles.onlineBadge,testID:testID+'.onlineBadge'},
_react2.default.createElement(_view2.default,{style:this.styles.onlineBadgeInner})),


this.renderRibbon()));


}}]);return Avatar;}(_commons.BaseComponent);Avatar.displayName='Avatar';Avatar.propTypes={backgroundColor:_propTypes2.default.string,containerStyle:_reactNative.ViewPropTypes.style,imageSource:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),label:_propTypes2.default.string,labelColor:_propTypes2.default.string,ribbonLabel:_propTypes2.default.string,ribbonStyle:_reactNative.ViewPropTypes.style,ribbonLabelStyle:_text2.default.propTypes.style,isOnline:_propTypes2.default.bool,size:_propTypes2.default.number,testID:_propTypes2.default.string,onPress:_propTypes2.default.func};Avatar.defaultProps={backgroundColor:_style.Colors.dark80,size:50,labelColor:_style.Colors.dark10};exports.default=Avatar;


function createStyles(_ref){var size=_ref.size,backgroundColor=_ref.backgroundColor,labelColor=_ref.labelColor,imageSource=_ref.imageSource;
var borderRadius=size/2;
var fontSizeToImageSizeRatio=0.32;
var styles=_reactNative.StyleSheet.create({
container:{
alignItems:'center',
justifyContent:'center',
width:size,
height:size,
backgroundColor:backgroundColor,
borderRadius:borderRadius},

initialsContainer:{
alignItems:'center',
justifyContent:'center'},

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
backgroundColor:imageSource?_style.Colors.white:'transparent',
position:'absolute',
right:imageSource?-1.5:0,
top:4.5},

onlineBadgeInner:{
flex:1,
borderRadius:999,
backgroundColor:_style.Colors.green30},

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