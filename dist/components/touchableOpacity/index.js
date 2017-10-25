Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _style=require('../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var






TouchableOpacity=function(_BaseComponent){_inherits(TouchableOpacity,_BaseComponent);

















function TouchableOpacity(props){_classCallCheck(this,TouchableOpacity);var _this=_possibleConstructorReturn(this,(TouchableOpacity.__proto__||Object.getPrototypeOf(TouchableOpacity)).call(this,
props));_this.









state={
active:false};var throttleTime=props.throttleTime||_style.ThemeManager.components.TouchableOpacity.throttleTime;var throttleOptions=props.throttleOptions||_style.ThemeManager.components.TouchableOpacity.throttleOptions;_this.onPress=_lodash2.default.throttle(_this.onPress.bind(_this),throttleTime,throttleOptions);_this.onPressIn=_this.onPressIn.bind(_this);_this.onPressOut=_this.onPressOut.bind(_this);return _this;}_createClass(TouchableOpacity,[{key:'onPressIn',value:function onPressIn()


{
this.setState({
active:true});for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}

_lodash2.default.invoke.apply(_lodash2.default,[this.props,'onPressIn'].concat(args));
}},{key:'onPressOut',value:function onPressOut()

{
this.setState({
active:false});for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}

_lodash2.default.invoke.apply(_lodash2.default,[this.props,'onPressOut'].concat(args));
}},{key:'render',value:function render()










{var _props=
this.props,throttle=_props.throttle,others=_objectWithoutProperties(_props,['throttle']);

return(
_react2.default.createElement(_reactNative.TouchableOpacity,_extends({},
others,{
onPress:this.onPress,
onPressIn:this.onPressIn,
onPressOut:this.onPressOut,
style:[this.props.style,this.backgroundStyle]})));


}},{key:'onPress',value:function onPress()

{
_lodash2.default.invoke(this.props,'onPress');
}},{key:'backgroundStyle',get:function get(){var active=this.state.active;var activeBackgroundColor=this.props.activeBackgroundColor;if(active&&activeBackgroundColor){return{backgroundColor:activeBackgroundColor};}}}]);return TouchableOpacity;}(_commons.BaseComponent);TouchableOpacity.displayName='TouchableOpacity';TouchableOpacity.propTypes={throttleTime:_propTypes2.default.number,throttleOptions:_propTypes2.default.shape({leading:_propTypes2.default.bool,trailing:_propTypes2.default.bool}),activeBackgroundColor:_propTypes2.default.string};exports.default=TouchableOpacity;