Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _style=require('../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var







Button=function(_BaseComponent){_inherits(Button,_BaseComponent);





















































































function Button(props){_classCallCheck(this,Button);var _this=_possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).call(this,
props));

if(!_lodash2.default.isUndefined(props.containerStyle)){
console.warn('Button "containerStyle" prop will be deprecated soon, please use "style" instead');
}return _this;
}_createClass(Button,[{key:'generateStyles',value:function generateStyles()

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
}},{key:'getLabelColor',value:function getLabelColor()

{var _getThemeProps2=
this.getThemeProps(),link=_getThemeProps2.link,linkColor=_getThemeProps2.linkColor,outline=_getThemeProps2.outline,disabled=_getThemeProps2.disabled;

var color=_style.ThemeManager.CTATextColor;
if(link){
color=linkColor||_style.Colors.blue30;
}else if(outline){
color=_style.Colors.dark10;
}

if(disabled&&(link||outline)){
return _style.ThemeManager.CTADisabledColor;
}

color=this.props.color||this.extractColorValue()||color;
return color;
}},{key:'getLabelSizeStyle',value:function getLabelSizeStyle()

{var _props=
this.props,size=_props.size,link=_props.link;

var LABEL_STYLE_BY_SIZE={};
LABEL_STYLE_BY_SIZE[Button.sizes.xSmall]=_extends({paddingHorizontal:12},_style.Typography.text80);
LABEL_STYLE_BY_SIZE[Button.sizes.small]=_extends({paddingHorizontal:15},_style.Typography.text80);
LABEL_STYLE_BY_SIZE[Button.sizes.medium]=_extends({paddingHorizontal:24},_style.Typography.text80);
LABEL_STYLE_BY_SIZE[Button.sizes.large]={paddingHorizontal:36};

var labelSizeStyle=LABEL_STYLE_BY_SIZE[size];
if(link){
labelSizeStyle.paddingHorizontal=0;
}

return labelSizeStyle;
}},{key:'getContainerSizeStyle',value:function getContainerSizeStyle()

{var
size=this.props.size;

var CONTAINER_STYLE_BY_SIZE={};
CONTAINER_STYLE_BY_SIZE[Button.sizes.xSmall]={paddingVertical:4,minWidth:60};
CONTAINER_STYLE_BY_SIZE[Button.sizes.small]={paddingVertical:5,minWidth:74};
CONTAINER_STYLE_BY_SIZE[Button.sizes.medium]={paddingVertical:11,minWidth:125};
CONTAINER_STYLE_BY_SIZE[Button.sizes.large]={paddingVertical:16,minWidth:138};

return CONTAINER_STYLE_BY_SIZE[size];
}},{key:'getOutlineStyle',value:function getOutlineStyle()

{var _props2=
this.props,outline=_props2.outline,outlineColor=_props2.outlineColor,link=_props2.link;
if((outline||outlineColor)&&!link){
return{
borderWidth:1,
borderColor:outlineColor||_style.Colors.dark70};

}
return undefined;
}},{key:'getBorderRadiusStyle',value:function getBorderRadiusStyle()

{var _props3=
this.props,link=_props3.link,borderRadius=_props3.borderRadius,fullWidth=_props3.fullWidth;
if(link||fullWidth){
return{borderRadius:0};
}
return{borderRadius:_lodash2.default.isUndefined(borderRadius)?_style.BorderRadiuses.br100:borderRadius};
}},{key:'getShadowStyle',value:function getShadowStyle()

{
var backgroundColor=this.getBackgroundColor();var
enableShadow=this.props.enableShadow;
if(enableShadow){
return[this.styles.shadowStyle,backgroundColor&&{shadowColor:backgroundColor}];
}
}},{key:'renderIcon',value:function renderIcon()

{var _props4=
this.props,iconSource=_props4.iconSource,iconStyle=_props4.iconStyle,label=_props4.label,link=_props4.link,disabled=_props4.disabled;
if(iconSource){
return(
_react2.default.createElement(_reactNative.Image,{
source:iconSource,
style:[
this.styles.icon,
link&&disabled&&this.styles.iconDisabled,
label&&this.styles.iconSpacing,
iconStyle]}));



}
return null;
}},{key:'renderLabel',value:function renderLabel()

{var _props5=
this.props,label=_props5.label,labelStyle=_props5.labelStyle;
var sizeStyle=this.getLabelSizeStyle();
var typography=this.extractTypographyValue();
var color=this.getLabelColor();
if(label){
return(
_react2.default.createElement(_text2.default,{style:[this.styles.text,color&&{color:color},sizeStyle,_extends({},typography),labelStyle],numberOfLines:1},
label));


}
return null;
}},{key:'render',value:function render()

{var _getThemeProps3=
this.getThemeProps(),onPress=_getThemeProps3.onPress,disabled=_getThemeProps3.disabled,link=_getThemeProps3.link,style=_getThemeProps3.style,containerStyle=_getThemeProps3.containerStyle,testID=_getThemeProps3.testID,others=_objectWithoutProperties(_getThemeProps3,['onPress','disabled','link','style','containerStyle','testID']);
var shadowStyle=this.getShadowStyle();var
margins=this.state.margins;
var backgroundColor=this.getBackgroundColor();
var outlineStyle=this.getOutlineStyle();
var containerSizeStyle=this.getContainerSizeStyle();
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
onPress:onPress,
disabled:disabled,
testID:testID},
others),

this.props.children,
this.renderIcon(),
this.renderLabel()));











}}]);return Button;}(_commons.BaseComponent);Button.displayName='Button';Button.propTypes=_extends({},_text2.default.propTypes,{label:_propTypes2.default.string,iconSource:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),iconStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),backgroundColor:_propTypes2.default.string,size:_propTypes2.default.oneOf(['xSmall','small','medium','large']),borderRadius:_propTypes2.default.number,onPress:_propTypes2.default.func,disabled:_propTypes2.default.bool,outline:_propTypes2.default.bool,outlineColor:_propTypes2.default.string,link:_propTypes2.default.bool,linkColor:_propTypes2.default.string,labelStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),fullWidth:_propTypes2.default.bool,enableShadow:_propTypes2.default.bool,testID:_propTypes2.default.string});Button.defaultProps={labelStyle:{},size:'large',outline:false,borderRadius:_style.BorderRadiuses.br100};Button.sizes={xSmall:'xSmall',small:'small',medium:'medium',large:'large'};exports.default=Button;


function createStyles(_ref){var color=_ref.color;
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
fontWeight:'100'}),

icon:{
tintColor:color},

iconDisabled:{
tintColor:_style.Colors.dark60},

iconSpacing:{
marginRight:7,
marginBottom:2,
paddingRight:0}});


}