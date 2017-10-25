Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _style=require('../../style');
var _view=require('../../components/view');var _view2=_interopRequireDefault(_view);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



AnimatedScanner=function(_BaseComponent){_inherits(AnimatedScanner,_BaseComponent);





































function AnimatedScanner(props){_classCallCheck(this,AnimatedScanner);var _this=_possibleConstructorReturn(this,(AnimatedScanner.__proto__||Object.getPrototypeOf(AnimatedScanner)).call(this,
props));

_this.state={
animatedProgress:new _reactNative.Animated.Value(0),
isDone:false};


if(!_lodash2.default.isNumber(props.progress)){
console.warn('[react-native-ui-lib]! please check out the new api for AnimatedScanner. progress now accepts number instead of Animated Value');
}return _this;
}_createClass(AnimatedScanner,[{key:'componentDidMount',value:function componentDidMount()

{var _props=
this.props,progress=_props.progress,duration=_props.duration;
if(progress>0){
this.animate(progress,duration);
}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){var
progress=this.props.progress;
if(nextProps.progress!==progress){
this.animate(nextProps.progress,nextProps.duration);
}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.state.animatedProgress.stopAnimation();
}},{key:'animate',value:function animate(

toValue,duration){var _this2=this;var
animatedProgress=this.state.animatedProgress;
_reactNative.Animated.timing(animatedProgress,{
toValue:toValue,
duration:duration}).
start(function(_ref){var finished=_ref.finished;
if(finished){
var isDone=toValue>=100;
_this2.setState({
isDone:isDone});

_lodash2.default.invoke(_this2.props,'onBreakpoint',{progress:toValue,isDone:isDone});
}
});
}},{key:'renderNew',value:function renderNew()

{var _props2=
this.props,opacity=_props2.opacity,backgroundColor=_props2.backgroundColor,hideScannerLine=_props2.hideScannerLine;var _state=
this.state,isDone=_state.isDone,animatedProgress=_state.animatedProgress;
return(
_react2.default.createElement(_view2.default,{style:_extends({},_reactNative.StyleSheet.absoluteFillObject)},
_react2.default.createElement(_reactNative.Animated.View,{
style:[this.styles.container,
opacity&&{opacity:opacity},
backgroundColor&&{backgroundColor:backgroundColor},
{
right:animatedProgress.interpolate({
inputRange:[0,100],
outputRange:['100%','0%']})}]},




!isDone&&!hideScannerLine&&_react2.default.createElement(_view2.default,{style:this.styles.scanner}))));



}},{key:'render',value:function render()

{
if(_lodash2.default.isNumber(this.props.progress)){
return this.renderNew();
}

return this.renderOld();
}},{key:'renderOld',value:function renderOld()


{var _props3=
this.props,progress=_props3.progress,opacity=_props3.opacity,backgroundColor=_props3.backgroundColor;
return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[this.styles.container,
opacity&&{opacity:opacity},
backgroundColor&&{backgroundColor:backgroundColor},
{
right:progress.interpolate({
inputRange:[0,5,55,100],
outputRange:[_helpers.Constants.screenWidth,_helpers.Constants.screenWidth/2,_helpers.Constants.screenWidth/3,0]})}]},




JSON.stringify(progress)!=='100'&&_react2.default.createElement(_view2.default,{style:this.styles.scanner})));


}}]);return AnimatedScanner;}(_commons.BaseComponent);AnimatedScanner.displayName='AnimatedScanner';AnimatedScanner.propTypes={progress:_propTypes2.default.number,duration:_propTypes2.default.number,opacity:_propTypes2.default.number,backgroundColor:_propTypes2.default.string,onBreakpoint:_propTypes2.default.func,hideScannerLine:_propTypes2.default.bool,testID:_propTypes2.default.string};AnimatedScanner.defaultProps={progress:0,duration:1000};exports.default=AnimatedScanner;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
position:'absolute',
top:0,
bottom:0,
left:0,
right:0,
backgroundColor:_style.Colors.white,
opacity:0.9},

scanner:{
position:'absolute',
top:0,
bottom:0,
right:0,
borderWidth:_reactNative.StyleSheet.hairlineWidth,
borderColor:_style.Colors.dark50}});


}