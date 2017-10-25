Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNativeBlur=require('react-native-blur');
var _reactNative=require('react-native');
var _commons=require('../../commons');
var _TopBar=require('./TopBar');var _TopBar2=_interopRequireDefault(_TopBar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Modal=function(_BaseComponent){_inherits(Modal,_BaseComponent);function Modal(){_classCallCheck(this,Modal);return _possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).apply(this,arguments));}_createClass(Modal,[{key:'render',value:function render()





{var _props=
this.props,enableModalBlur=_props.enableModalBlur,others=_objectWithoutProperties(_props,['enableModalBlur']);
var Container=enableModalBlur?_reactNativeBlur.BlurView:_reactNative.View;
return(
_react2.default.createElement(_reactNative.Modal,others,
_react2.default.createElement(Container,{style:{flex:1},blurType:'light'},
this.props.children)));



}}]);return Modal;}(_commons.BaseComponent);Modal.propTypes={enableModalBlur:_propTypes2.default.bool};exports.default=Modal;


Modal.TopBar=_TopBar2.default;