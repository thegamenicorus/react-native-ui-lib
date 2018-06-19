Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=_interopRequireWildcard(_reactNativeAnimatable);
var _reactNativeBlur=require('react-native-blur');
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _button=require('../button');var _button2=_interopRequireDefault(_button);
var _style=require('../../style');
var _assets=require('../../assets');var _assets2=_interopRequireDefault(_assets);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var DURATION=300;
var DELAY=100;var








Toast=function(_BaseComponent){_inherits(Toast,_BaseComponent);























































































function Toast(props){_classCallCheck(this,Toast);var _this=_possibleConstructorReturn(this,(Toast.__proto__||Object.getPrototypeOf(Toast)).call(this,
props));_this.state={isVisible:false,animationConfig:_this.getAnimation(true),contentAnimation:_this.getContentAnimation(true),duration:DURATION,delay:DELAY};var

animated=_this.props.animated;
if(animated){
setupRelativeAnimation(getHeight(_this.props));
}

_this.onDismiss=_this.onDismiss.bind(_this);return _this;
}_createClass(Toast,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){var
visible=nextProps.visible,animated=nextProps.animated;var
isVisible=this.state.isVisible;
if(visible!==isVisible){
if(animated){
setupRelativeAnimation(getHeight(nextProps));
}

var newState=animated?
{
animationConfig:this.getAnimation(visible),
contentAnimation:this.getContentAnimation(visible)}:

{
animationConfig:{},
contentAnimation:{}};


this.setState(newState);
}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getPositionStyle',value:function getPositionStyle()

{var
position=this.props.position;

return position==='relative'?{position:position}:getAbsolutePositionStyle(position);
}},{key:'getAnimation',value:function getAnimation(

shouldShow){var _this2=this;var _props=
this.props,position=_props.position,useNativeDriver=_props.useNativeDriver;
var animationDescriptor=getAnimationDescriptor(position,this.state);var _ref=
shouldShow?animationDescriptor.enter:animationDescriptor.exit,animation=_ref.animation,duration=_ref.duration,delay=_ref.delay;

return{animation:animation,duration:duration,delay:delay,useNativeDriver:useNativeDriver,onAnimationEnd:function onAnimationEnd(){return _this2.onAnimationEnd();}};
}},{key:'getContentAnimation',value:function getContentAnimation(

shouldShow){var _this3=this;var
position=this.props.position;var _state=
this.state,duration=_state.duration,delay=_state.delay;

if(position==='relative'){
return{
animation:shouldShow?'fadeIn':'fadeOut',
duration:duration,
delay:shouldShow?delay:0,
onAnimationEnd:function onAnimationEnd(){return _this3.onAnimationEnd();}};

}
}},{key:'getBlurOptions',value:function getBlurOptions()

{var _getThemeProps=
this.getThemeProps(),blurOptions=_getThemeProps.blurOptions;
return _extends({
blurType:'light',
amount:5},
blurOptions);

}},{key:'renderContent',value:function renderContent()

{var _getThemeProps2=
this.getThemeProps(),actions=_getThemeProps2.actions,allowDismiss=_getThemeProps2.allowDismiss,renderContent=_getThemeProps2.renderContent;

if(_lodash2.default.isFunction(renderContent)){
return renderContent(this.props);
}

var hasOneAction=_lodash2.default.size(actions)===1;
var height=getHeight(this.props);

return(
_react2.default.createElement(_view2.default,{row:true,height:height,centerV:true,spread:true},
this.renderMessage(),
(hasOneAction||allowDismiss)&&
_react2.default.createElement(_view2.default,{row:true,height:'100%'},
hasOneAction&&this.renderOneAction(),
this.renderDismissButton())));




}},{key:'renderMessage',value:function renderMessage()

{var _props2=
this.props,message=_props2.message,messageStyle=_props2.messageStyle,centerMessage=_props2.centerMessage,color=_props2.color;var
contentAnimation=this.state.contentAnimation;
return(
_react2.default.createElement(_view2.default,{flex:true,centerH:centerMessage},
_react2.default.createElement(Animatable.Text,_extends({style:[this.styles.message,color&&{color:color},messageStyle]},contentAnimation),
message)));



}},{key:'renderOneAction',value:function renderOneAction()

{
var action=_lodash2.default.first(this.props.actions);var
contentAnimation=this.state.contentAnimation;

if(action){
return(
_react2.default.createElement(Animatable.View,contentAnimation,
_react2.default.createElement(_button2.default,_extends({style:this.styles.oneActionStyle,size:'medium'},action))));


}
}},{key:'renderTwoActions',value:function renderTwoActions()

{var
actions=this.props.actions;var
contentAnimation=this.state.contentAnimation;

return(
_react2.default.createElement(Animatable.View,_extends({style:this.styles.containerWithTwoActions},contentAnimation),
_react2.default.createElement(_button2.default,_extends({size:'small'},actions[0])),
_react2.default.createElement(_button2.default,_extends({'marginL-12':true,size:'small'},actions[1]))));


}},{key:'renderDismissButton',value:function renderDismissButton()

{var _props3=
this.props,allowDismiss=_props3.allowDismiss,color=_props3.color;var
contentAnimation=this.state.contentAnimation;
if(allowDismiss){
return(
_react2.default.createElement(Animatable.View,_extends({style:{justifyContent:'center'}},contentAnimation),
_react2.default.createElement(_button2.default,{
link:true,
iconStyle:[this.styles.dismissIconStyle,color&&{tintColor:color}],
iconSource:_assets2.default.icons.x,
onPress:this.onDismiss})));



}
}},{key:'render',value:function render()


{var _getThemeProps3=
this.getThemeProps(),backgroundColor=_getThemeProps3.backgroundColor,actions=_getThemeProps3.actions,enableBlur=_getThemeProps3.enableBlur,testID=_getThemeProps3.testID,zIndex=_getThemeProps3.zIndex;var
animationConfig=this.state.animationConfig;
var hasOneAction=_lodash2.default.size(actions)===1;
var hasTwoActions=_lodash2.default.size(actions)===2;
var positionStyle=this.getPositionStyle();
var height=getHeight(this.props);
var blurOptions=this.getBlurOptions();

var shouldShowToast=this.shouldShowToast();
if(!shouldShowToast){
return null;
}

return(
_react2.default.createElement(_view2.default,{style:[positionStyle],useSafeArea:true,testID:testID},
_react2.default.createElement(_view2.default,{height:height}),

_react2.default.createElement(Animatable.View,_extends({
style:[
this.styles.container,
backgroundColor&&{backgroundColor:backgroundColor},
hasOneAction&&this.styles.containerWithOneAction,
{zIndex:zIndex}]},

animationConfig),

enableBlur&&_react2.default.createElement(_reactNativeBlur.BlurView,_extends({style:this.styles.blurView},blurOptions)),

this.renderContent(),

hasTwoActions&&_react2.default.createElement(_view2.default,null,this.renderTwoActions()))));



}},{key:'shouldShowToast',value:function shouldShowToast()

{var
visible=this.props.visible;var
isVisible=this.state.isVisible;
return isVisible||visible&&!isVisible;
}},{key:'onAnimationEnd',value:function onAnimationEnd()

{var
visible=this.props.visible;
this.setState({
isVisible:visible});

this.setDismissTimer();
}},{key:'setDismissTimer',value:function setDismissTimer()

{var _this4=this;var _props4=
this.props,autoDismiss=_props4.autoDismiss,onDismiss=_props4.onDismiss;
if(autoDismiss&&onDismiss){
this.timer=setTimeout(function(){
_lodash2.default.invoke(_this4.props,'onDismiss');
},autoDismiss);
}
}},{key:'onDismiss',value:function onDismiss()

{
if(this.timer){clearTimeout(this.timer);}
_lodash2.default.invoke(this.props,'onDismiss');
}}]);return Toast;}(_commons.BaseComponent);Toast.displayName='Toast';Toast.propTypes={visible:_propTypes2.default.bool,position:_propTypes2.default.oneOf(['relative','top','bottom']),height:_propTypes2.default.number,backgroundColor:_propTypes2.default.string,color:_propTypes2.default.string,message:_propTypes2.default.string,messageStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),actions:_propTypes2.default.arrayOf(_propTypes2.default.shape(_button2.default.propTypes)),onDismiss:_propTypes2.default.func,autoDismiss:_propTypes2.default.number,allowDismiss:_propTypes2.default.bool,renderContent:_propTypes2.default.func,centerMessage:_propTypes2.default.bool,animated:_propTypes2.default.bool,enableBlur:_propTypes2.default.bool,blurOptions:_propTypes2.default.object,zIndex:_propTypes2.default.number};Toast.defaultProps={position:'top',color:_style.Colors.white,animated:true,zIndex:100};exports.default=Toast;



function createStyles(){
return _reactNative.StyleSheet.create({
container:_extends({},
_reactNative.StyleSheet.absoluteFillObject,{
backgroundColor:_style.Colors.rgba(_style.ThemeManager.primaryColor,0.8),
paddingHorizontal:15}),

containerWithOneAction:{
paddingRight:0},

containerWithTwoActions:{
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
paddingBottom:14},

message:_extends({
color:_style.Colors.white},
_style.Typography.text80),

oneActionStyle:{
borderRadius:_style.BorderRadiuses.br0,
minWidth:undefined,
height:'100%',
backgroundColor:_style.Colors.rgba(_style.ThemeManager.primaryColor,0.7)},

dismissIconStyle:{
width:12,
height:12,
tintColor:_style.Colors.white},

blurView:_extends({},
_reactNative.StyleSheet.absoluteFillObject)});


}

function getAnimationDescriptor(name,_ref2){var _ref2$duration=_ref2.duration,duration=_ref2$duration===undefined?DURATION:_ref2$duration,_ref2$delay=_ref2.delay,delay=_ref2$delay===undefined?DELAY:_ref2$delay;
var defaultProps={duration:duration,delay:0};
var animationDescriptorMap={
top:{
enter:_extends({},defaultProps,{animation:'slideInDown_toast'}),
exit:_extends({},defaultProps,{animation:'slideOutUp_toast'})},

bottom:{
enter:_extends({},defaultProps,{animation:'slideInUp_toast'}),
exit:_extends({},defaultProps,{animation:'slideOutDown_toast'})},

relative:{
enter:_extends({},defaultProps,{animation:'growUp_toast'}),
exit:_extends({},defaultProps,{animation:'growDown_toast',delay:delay})}};



return animationDescriptorMap[name]||{};
}

function getAbsolutePositionStyle(location){
return _defineProperty({
position:'absolute',
left:0,
right:0},
location,0);

}

function setupRelativeAnimation(height){
Animatable.initializeRegistryWithDefinitions({

slideInUp_toast:{
from:{translateY:height},
to:{translateY:0}},

slideOutDown_toast:{
from:{translateY:0},
to:{translateY:height}},


slideInDown_toast:{
from:{translateY:-height},
to:{translateY:0}},

slideOutUp_toast:{
from:{translateY:0},
to:{translateY:-height}},


growUp_toast:{
from:{height:0},
to:{height:height}},

growDown_toast:{
from:{height:height},
to:{height:0}}});


}

function getHeight(_ref4){var height=_ref4.height,actions=_ref4.actions;
if(_lodash2.default.isUndefined(height)){
return _lodash2.default.size(actions)===2?92:48;
}
return height;
}