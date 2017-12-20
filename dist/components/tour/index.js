Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _button=require('../button');var _button2=_interopRequireDefault(_button);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _style=require('../../style');
var _helpers=require('../../helpers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




Tour=function(_BaseComponent){_inherits(Tour,_BaseComponent);
function Tour(props){_classCallCheck(this,Tour);var _this=_possibleConstructorReturn(this,(Tour.__proto__||Object.getPrototypeOf(Tour)).call(this,
props));_this.






































state={};_this.onTargetLayout=_this.onTargetLayout.bind(_this);_this.renderTargetClone=_this.renderTargetClone.bind(_this);return _this;}_createClass(Tour,[{key:'renderTarget',value:function renderTarget()

{var _this2=this;
var target=_react2.default.Children.only(this.props.children);
return _react2.default.cloneElement(target,{onLayout:this.onTargetLayout,ref:function ref(r){return _this2.target=r;}});
}},{key:'onTargetLayout',value:function onTargetLayout()

{var _this3=this;
this.target.measureInWindow(function(x,y,width,height){
_this3.setState({
targetPosition:{
left:x,
top:y,
width:width,
height:height}});


});
}},{key:'renderTargetClone',value:function renderTargetClone()

{
var target=_react2.default.Children.only(this.props.children);
return _react2.default.cloneElement(target);
}},{key:'renderMessage',value:function renderMessage()

{var _props=
this.props,message=_props.message,messageStyle=_props.messageStyle,onClose=_props.onClose;var
targetPosition=this.state.targetPosition;
return(
_react2.default.createElement(_view2.default,{style:{position:'absolute',bottom:targetPosition.height,width:_helpers.Constants.screenWidth}},
_react2.default.createElement(_text2.default,{style:[styles.message,messageStyle]},message),
_react2.default.createElement(_button2.default,{link:true,label:'Got It!',onPress:onClose})));


}},{key:'render',value:function render()

{var _props2=
this.props,visible=_props2.visible,overlayColor=_props2.overlayColor,overlayOpacity=_props2.overlayOpacity;var
targetPosition=this.state.targetPosition;
var shouldShowTour=visible&&!_lodash2.default.isUndefined(targetPosition);

return(
_react2.default.createElement(_view2.default,null,
this.renderTarget(),
_react2.default.createElement(_reactNative.Modal,{visible:shouldShowTour,animationType:'fade',transparent:true},
_react2.default.createElement(_view2.default,{flex:true,style:{backgroundColor:_style.Colors.rgba(overlayColor,overlayOpacity)}},
shouldShowTour&&
_react2.default.createElement(_view2.default,{style:{position:'absolute',top:targetPosition.top,left:targetPosition.left}},
_react2.default.createElement(_view2.default,{style:styles.glowWrapper}),
this.renderTargetClone(),
this.renderMessage())))));






}}]);return Tour;}(_commons.BaseComponent);Tour.propTypes={visible:_propTypes2.default.bool,onClose:_propTypes2.default.func,overlayColor:_propTypes2.default.string,overlayOpacity:_propTypes2.default.number,message:_propTypes2.default.string,messageStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])};Tour.defaultProps={visible:false,overlayColor:_style.Colors.white,overlayOpacity:0.9};


var styles=_reactNative.StyleSheet.create({
message:_extends({
color:_style.Colors.white},
_style.Typography.text70),

glowWrapper:{
backgroundColor:_style.Colors.blue70,
position:'absolute',
top:-4,
left:-4,
right:-4,
bottom:-4,
borderRadius:999}});exports.default=



Tour;