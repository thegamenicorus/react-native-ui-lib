Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _style=require('../../style');
var _view=require('../view');var _view2=_interopRequireDefault(_view);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var









Button=function(_BaseComponent){_inherits(Button,_BaseComponent);





































































































function Button(props){_classCallCheck(this,Button);var _this=_possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).call(this,
props));

if(!_lodash2.default.isUndefined(props.containerStyle)){
console.error('Button "containerStyle" prop will be deprecated soon, please use "style" instead');
}return _this;
}_createClass(Button,[{key:'getComponentDimensions',value:function getComponentDimensions(


event){
if(_helpers.Constants.isAndroid&&_reactNative.Platform.Version<=17){
var height=event.nativeEvent.layout.height;
this.setState({borderRadius:height/2});
}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getBackgroundColor',value:function getBackgroundColor()











{var _getThemeProps=
this.getThemeProps(),disabled=_getThemeProps.disabled,outline=_getThemeProps.outline,link=_getThemeProps.link,propsBackgroundColor=_getThemeProps.backgroundColor;var
stateBackgroundColor=this.state.backgroundColor;

if(!outline&&!link){
if(disabled){
return _style.ThemeManager.CTADisabledColor;
}

return propsBackgroundColor||stateBackgroundColor||_style.Colors.blue30;
}
return'transparent';
}},{key:'getActiveBackgroundColor',value:function getActiveBackgroundColor()

{var _getThemeProps2=
this.getThemeProps(),getActiveBackgroundColor=_getThemeProps2.getActiveBackgroundColor;
if(getActiveBackgroundColor){
return getActiveBackgroundColor(this.getBackgroundColor(),this.getThemeProps());
}
}},{key:'getLabelColor',value:function getLabelColor()

{var _getThemeProps3=
this.getThemeProps(),link=_getThemeProps3.link,linkColor=_getThemeProps3.linkColor,outline=_getThemeProps3.outline,outlineColor=_getThemeProps3.outlineColor,disabled=_getThemeProps3.disabled;

var color=_style.ThemeManager.CTATextColor;
if(link){
color=linkColor||_style.Colors.blue30;
}else if(outline){
color=outlineColor||_style.Colors.blue30;
}

if(disabled&&(link||outline)){
return _style.ThemeManager.CTADisabledColor;
}

color=this.props.color||this.extractColorValue()||color;
return color;
}},{key:'getContentSizeStyle',value:function getContentSizeStyle()

{var _props=
this.props,size=_props.size,link=_props.link,avoidInnerPadding=_props.avoidInnerPadding;

if(avoidInnerPadding){
return;
}

var LABEL_STYLE_BY_SIZE={};
LABEL_STYLE_BY_SIZE[Button.sizes.xSmall]={paddingHorizontal:12};
LABEL_STYLE_BY_SIZE[Button.sizes.small]={paddingHorizontal:15};
LABEL_STYLE_BY_SIZE[Button.sizes.medium]={paddingHorizontal:_helpers.Constants.isIOS?18:20};
LABEL_STYLE_BY_SIZE[Button.sizes.large]={paddingHorizontal:_helpers.Constants.isIOS?36:28};

var labelSizeStyle=LABEL_STYLE_BY_SIZE[size];


if(link){
labelSizeStyle.paddingHorizontal=0;
}

return labelSizeStyle;
}},{key:'getLabelSizeStyle',value:function getLabelSizeStyle()

{var
size=this.props.size;

var LABEL_STYLE_BY_SIZE={};
LABEL_STYLE_BY_SIZE[Button.sizes.xSmall]=_extends({},_style.Typography.text80);
LABEL_STYLE_BY_SIZE[Button.sizes.small]=_extends({},_style.Typography.text80);
LABEL_STYLE_BY_SIZE[Button.sizes.medium]=_extends({},_style.Typography.text80);
LABEL_STYLE_BY_SIZE[Button.sizes.large]={};

var labelSizeStyle=LABEL_STYLE_BY_SIZE[size];
return labelSizeStyle;
}},{key:'getContainerSizeStyle',value:function getContainerSizeStyle()

{var _props2=
this.props,size=_props2.size,outline=_props2.outline,avoidMinWidth=_props2.avoidMinWidth;

var CONTAINER_STYLE_BY_SIZE={};
CONTAINER_STYLE_BY_SIZE[Button.sizes.xSmall]={
paddingVertical:_helpers.Constants.isIOS?5:4,
minWidth:_helpers.Constants.isIOS?66:60};

CONTAINER_STYLE_BY_SIZE[Button.sizes.small]={
paddingVertical:6,
minWidth:_helpers.Constants.isIOS?74:72};

CONTAINER_STYLE_BY_SIZE[Button.sizes.medium]={
paddingVertical:_helpers.Constants.isIOS?11:10,
minWidth:_helpers.Constants.isIOS?95:88};

CONTAINER_STYLE_BY_SIZE[Button.sizes.large]={
paddingVertical:_helpers.Constants.isIOS?16:15,
minWidth:_helpers.Constants.isIOS?138:128};


if(outline){
_lodash2.default.forEach(CONTAINER_STYLE_BY_SIZE,function(style){
style.paddingVertical-=1;
});
}

var containerSizeStyle=CONTAINER_STYLE_BY_SIZE[size];
if(avoidMinWidth){
containerSizeStyle.minWidth=undefined;
}

return containerSizeStyle;
}},{key:'getOutlineStyle',value:function getOutlineStyle()

{var _props3=
this.props,outline=_props3.outline,outlineColor=_props3.outlineColor,link=_props3.link,disabled=_props3.disabled;
var outlineStyle=void 0;
if((outline||outlineColor)&&!link){
outlineStyle={
borderWidth:1,
borderColor:outlineColor||_style.Colors.blue30};


if(disabled){
outlineStyle.borderColor=_style.Colors.dark70;
}
}
return outlineStyle;
}},{key:'getBorderRadiusStyle',value:function getBorderRadiusStyle()

{var _props4=
this.props,link=_props4.link,fullWidth=_props4.fullWidth,borderRadiusFromProps=_props4.borderRadius;
if(link||fullWidth||borderRadiusFromProps===0){
return{borderRadius:0};
}var

borderRadiusFromState=this.state.borderRadius;
var borderRadius=borderRadiusFromProps||borderRadiusFromState||_style.BorderRadiuses.br100;
return{borderRadius:borderRadius};
}},{key:'getShadowStyle',value:function getShadowStyle()

{
var backgroundColor=this.getBackgroundColor();var
enableShadow=this.props.enableShadow;
if(enableShadow){
return[this.styles.shadowStyle,backgroundColor&&{shadowColor:backgroundColor}];
}
}},{key:'getIconStyle',value:function getIconStyle()

{var _props5=
this.props,size=_props5.size,disabled=_props5.disabled,propsIconStyle=_props5.iconStyle;
var iconStyle={
tintColor:this.getLabelColor()};


if([Button.sizes.large,Button.sizes.medium].includes(size)){
iconStyle.marginRight=8;
}else{
iconStyle.marginRight=4;
}

if(disabled&&!this.isFilled){
iconStyle.tintColor=_style.Colors.dark60;
}

return[iconStyle,propsIconStyle];
}},{key:'renderIcon',value:function renderIcon()

{var
iconSource=this.props.iconSource;
if(iconSource){
var iconStyle=this.getIconStyle();
return _react2.default.createElement(_reactNative.Image,{source:iconSource,style:iconStyle});
}
return null;
}},{key:'renderLabel',value:function renderLabel()

{var _props6=
this.props,label=_props6.label,labelStyle=_props6.labelStyle,labelProps=_props6.labelProps;
var typography=this.extractTypographyValue();
var color=this.getLabelColor();
var labelSizeStyle=this.getLabelSizeStyle();
if(label){
return(
_react2.default.createElement(_text2.default,_extends({
style:[this.styles.text,color&&{color:color},labelSizeStyle,_extends({},typography),labelStyle],
numberOfLines:1},
labelProps),

label));


}
return null;
}},{key:'render',value:function render()

{var _getThemeProps4=
this.getThemeProps(),onPress=_getThemeProps4.onPress,disabled=_getThemeProps4.disabled,link=_getThemeProps4.link,style=_getThemeProps4.style,containerStyle=_getThemeProps4.containerStyle,testID=_getThemeProps4.testID,others=_objectWithoutProperties(_getThemeProps4,['onPress','disabled','link','style','containerStyle','testID']);
var shadowStyle=this.getShadowStyle();var
margins=this.state.margins;
var backgroundColor=this.getBackgroundColor();
var outlineStyle=this.getOutlineStyle();
var containerSizeStyle=this.getContainerSizeStyle();
var contentSizeStyle=this.getContentSizeStyle();
var borderRadiusStyle=this.getBorderRadiusStyle();

return(
_react2.default.createElement(_touchableOpacity2.default,_extends({
style:[
this.styles.container,
this.styles.innerContainer,
containerSizeStyle,
link&&this.styles.innerContainerLink,
shadowStyle,
margins,
containerStyle,
backgroundColor&&{backgroundColor:backgroundColor},
borderRadiusStyle,
outlineStyle,
style],

activeOpacity:0.6,
activeBackgroundColor:this.getActiveBackgroundColor(),
onLayout:this.getComponentDimensions,
onPress:onPress,
disabled:disabled,
testID:testID},
others),

_react2.default.createElement(_view2.default,{row:true,centerV:true,style:contentSizeStyle},
this.props.children,
this.renderIcon(),
this.renderLabel())));












}},{key:'isOutline',get:function get(){var _getThemeProps5=this.getThemeProps(),outline=_getThemeProps5.outline,outlineColor=_getThemeProps5.outlineColor;return Boolean(outline||outlineColor);}},{key:'isFilled',get:function get(){var _getThemeProps6=this.getThemeProps(),link=_getThemeProps6.link;return!this.isOutline&&!link;}}]);return Button;}(_commons.BaseComponent);Button.displayName='Button';Button.propTypes=_extends({},_text2.default.propTypes,{label:_propTypes2.default.string,iconSource:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),iconStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),backgroundColor:_propTypes2.default.string,size:_propTypes2.default.oneOf(['xSmall','small','medium','large']),borderRadius:_propTypes2.default.number,onPress:_propTypes2.default.func,disabled:_propTypes2.default.bool,outline:_propTypes2.default.bool,outlineColor:_propTypes2.default.string,link:_propTypes2.default.bool,linkColor:_propTypes2.default.string,labelStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),fullWidth:_propTypes2.default.bool,enableShadow:_propTypes2.default.bool,labelProps:_propTypes2.default.object,avoidInnerPadding:_propTypes2.default.bool,avoidMinWidth:_propTypes2.default.bool,getActiveBackgroundColor:_propTypes2.default.func,testID:_propTypes2.default.string});Button.defaultProps={labelStyle:{},size:'large',outline:false};Button.sizes={xSmall:'xSmall',small:'small',medium:'medium',large:'large'};exports.default=Button;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
backgroundColor:'transparent'},

innerContainer:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center'},

containerDisabled:{
backgroundColor:_style.Colors.dark60},

innerContainerLink:{
minWidth:undefined,
paddingHorizontal:undefined,
paddingVertical:undefined,
borderRadius:_style.BorderRadiuses.br0,
backgroundColor:undefined},

shadowStyle:{
shadowColor:'#3082C8',
shadowOffset:{height:5,width:0},
shadowOpacity:0.35,
shadowRadius:9.5},

text:_extends({
backgroundColor:'transparent',
flex:0,
flexDirection:'row'},
_style.Typography.text70,{
fontWeight:'100'})});


}