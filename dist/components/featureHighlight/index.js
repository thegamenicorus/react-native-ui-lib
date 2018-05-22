Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _reactNative=require('react-native');
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _button=require('../button');var _button2=_interopRequireDefault(_button);
var _style=require('../../style');
var _helpers=require('../../helpers');
var _nativeComponents=require('../../nativeComponents');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var defaultOverlayColor=_style.Colors.rgba(_style.Colors.black,0.82);
var defaultTextColor=_style.Colors.white;
var defaultStrokeColor=_style.Colors.rgba(_style.Colors.white,0.12);
var defaultStrokeWidth=12;
var contentViewPadding=_helpers.Constants.isIOS?35:32;
var contentViewRightMargin=_helpers.Constants.isIOS?45:46;
var titleBottomMargin=_helpers.Constants.isIOS?15:12;
var messageBottomMargin=_helpers.Constants.isIOS?30:24;
var titleLineHeight=_helpers.Constants.isAndroid?26:24;
var messageLineHeight=22;
var defaultButtonLabel='Got it';
var contentViewHeight=_helpers.Constants.isAndroid?268:282;var













FeatureHighlight=function(_BaseComponent){_inherits(FeatureHighlight,_BaseComponent);












































































function FeatureHighlight(props){_classCallCheck(this,FeatureHighlight);var _this=_possibleConstructorReturn(this,(FeatureHighlight.__proto__||Object.getPrototypeOf(FeatureHighlight)).call(this,
props));_this.
































































































onPress=function(){
_this.animate(0);
_this.contentHeight=contentViewHeight;
_this.didLayout=false;
_this.targetPosition=undefined;var
confirmButtonProps=_this.props.confirmButtonProps;
_lodash2.default.invoke(confirmButtonProps,'onPress');
};_this.getComponentDimensions=_this.getComponentDimensions.bind(_this);_this.setTargetPosition=_this.setTargetPosition.bind(_this);_this.state={fadeAnim:new _reactNative.Animated.Value(0),contentTopPosition:undefined};_this.contentHeight=contentViewHeight;_this.targetPosition=undefined;return _this;}_createClass(FeatureHighlight,[{key:'componentDidMount',value:function componentDidMount(){this.setTargetPosition();}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.setTargetPosition(nextProps);}},{key:'findTargetNode',value:function findTargetNode(target){return(0,_reactNative.findNodeHandle)(target);}},{key:'animate',value:function animate(toValue){_reactNative.Animated.timing(this.state.fadeAnim,{toValue:toValue,duration:toValue?100:0}).start();}},{key:'setTargetPosition',value:function setTargetPosition(){var _this2=this;var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props;if(props.getTarget!==undefined){var target=props.getTarget();var node=this.findTargetNode(target);this.setState({node:node});if(target){setTimeout(function(){target.measureInWindow(function(x,y,width,height){_this2.targetPosition={left:x,top:y,width:width,height:height};_this2.setContentPosition();});},0);}}else{var frame=props.highlightFrame;if(frame){this.targetPosition={left:frame.x,top:frame.y,width:frame.width,height:frame.height};this.setContentPosition();}}}},{key:'getContentPosition',value:function getContentPosition(){var _props=this.props,highlightFrame=_props.highlightFrame,minimumRectSize=_props.minimumRectSize,innerPadding=_props.innerPadding;var _targetPosition=this.targetPosition,top=_targetPosition.top,height=_targetPosition.height;var screenVerticalCenter=_helpers.Constants.screenHeight/2;var targetCenter=top+height/2;var isAlignedTop=targetCenter>screenVerticalCenter;var topPosition=isAlignedTop?top-this.contentHeight:top+height;if(!highlightFrame&&!isAlignedTop){var minRectHeight=minimumRectSize.height;var isUnderMin=height>=minRectHeight;topPosition=isUnderMin?topPosition+innerPadding:targetCenter+minRectHeight/2+innerPadding/2;}if(topPosition<0||topPosition+this.contentHeight>_helpers.Constants.screenHeight){console.warn('Content is too long and might appear off screen. '+'Please adjust the message length for better results.');}return topPosition;}},{key:'setContentPosition',value:function setContentPosition(){var top=this.getContentPosition();this.setState({contentTopPosition:top});this.animate(1);}},{key:'getComponentDimensions',value:function getComponentDimensions(event){this.contentHeight=event.nativeEvent.layout.height;if(this.targetPosition!==undefined){this.setContentPosition();}}},{key:'renderHighlightMessage',value:function renderHighlightMessage()

{var _getThemeProps=

this.getThemeProps(),title=_getThemeProps.title,message=_getThemeProps.message,confirmButtonProps=_getThemeProps.confirmButtonProps,textColor=_getThemeProps.textColor,titleNumberOfLines=_getThemeProps.titleNumberOfLines,messageNumberOfLines=_getThemeProps.messageNumberOfLines;
var color=textColor||defaultTextColor;

return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[styles.highlightContent,{opacity:this.state.fadeAnim,top:this.state.contentTopPosition}],
onLayout:this.getComponentDimensions,
pointerEvents:'box-none'},

title&&
_react2.default.createElement(_text2.default,{text60:true,style:[styles.title,{color:color}],numberOfLines:titleNumberOfLines,pointerEvents:'none'},
title),


message&&
_react2.default.createElement(_text2.default,{text70:true,style:[styles.message,{color:color}],numberOfLines:messageNumberOfLines,pointerEvents:'none'},
message),


_react2.default.createElement(_button2.default,_extends({
label:defaultButtonLabel,
size:'small',
outline:true,
outlineColor:color,
activeBackgroundColor:_style.Colors.rgba(color,0.3)},
confirmButtonProps,{
onPress:this.onPress}))));



}},{key:'render',value:function render()

{var _state=
this.state,node=_state.node,contentTopPosition=_state.contentTopPosition;
if(contentTopPosition===undefined)return null;var _getThemeProps2=


this.getThemeProps(),testID=_getThemeProps2.testID,visible=_getThemeProps2.visible,highlightFrame=_getThemeProps2.highlightFrame,overlayColor=_getThemeProps2.overlayColor,borderColor=_getThemeProps2.borderColor,borderWidth=_getThemeProps2.borderWidth,minimumRectSize=_getThemeProps2.minimumRectSize,innerPadding=_getThemeProps2.innerPadding,onBackgroundPress=_getThemeProps2.onBackgroundPress;

return(
_react2.default.createElement(_nativeComponents.HighlighterOverlayView,{
testID:testID,
highlightViewTag:node,
highlightFrame:highlightFrame,
visible:visible,
overlayColor:overlayColor||defaultOverlayColor,
strokeColor:borderColor||defaultStrokeColor,
strokeWidth:borderWidth||defaultStrokeWidth,
minimumRectSize:minimumRectSize,
innerPadding:innerPadding},

_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{style:styles.touchableOverlay,onPress:onBackgroundPress},
_react2.default.createElement(_view2.default,{flex:true})),

this.renderHighlightMessage()));


}}]);return FeatureHighlight;}(_commons.BaseComponent);FeatureHighlight.displayName='FeatureHighlight';FeatureHighlight.propTypes={visible:_propTypes2.default.bool.isRequired,highlightFrame:_propTypes2.default.shape({x:_propTypes2.default.number,y:_propTypes2.default.number,width:_propTypes2.default.number,height:_propTypes2.default.number}),getTarget:_propTypes2.default.func,title:_propTypes2.default.string,message:_propTypes2.default.string,titleNumberOfLines:_propTypes2.default.number,messageNumberOfLines:_propTypes2.default.number,confirmButtonProps:_propTypes2.default.object,onBackgroundPress:_propTypes2.default.func,overlayColor:_propTypes2.default.string,textColor:_propTypes2.default.string,borderColor:_propTypes2.default.string,borderWidth:_propTypes2.default.number,minimumRectSize:_propTypes2.default.shape({width:_propTypes2.default.number,height:_propTypes2.default.number}),innerPadding:_propTypes2.default.number,testID:_propTypes2.default.string};FeatureHighlight.defaultProps={minimumRectSize:{width:56,height:56},innerPadding:10};


var styles=_reactNative.StyleSheet.create({
highlightContent:{
position:'absolute',
padding:contentViewPadding,
marginRight:contentViewRightMargin,
alignItems:'flex-start'},

title:{
fontWeight:'500',
marginBottom:titleBottomMargin,
lineHeight:titleLineHeight},

message:{
marginBottom:messageBottomMargin,
lineHeight:messageLineHeight},

touchableOverlay:_extends({},
_reactNative.StyleSheet.absoluteFillObject)});exports.default=



FeatureHighlight;