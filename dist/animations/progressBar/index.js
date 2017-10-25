Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _commons=require('../../commons');
var _view=require('../../components/view');var _view2=_interopRequireDefault(_view);
var _animatedScanner=require('../animatedScanner');var _animatedScanner2=_interopRequireDefault(_animatedScanner);
var _style=require('../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




ProgressBar=function(_BaseComponent){_inherits(ProgressBar,_BaseComponent);function ProgressBar(){_classCallCheck(this,ProgressBar);return _possibleConstructorReturn(this,(ProgressBar.__proto__||Object.getPrototypeOf(ProgressBar)).apply(this,arguments));}_createClass(ProgressBar,[{key:'render',value:function render()
























{var _props=
this.props,height=_props.height,backgroundColor=_props.backgroundColor,progressBackgroundColor=_props.progressBackgroundColor;
var animatedScannerProps=_animatedScanner2.default.extractOwnProps(this.props);
var modifiers=this.extractModifierProps();

return(
_react2.default.createElement(_view2.default,_extends({height:height},modifiers,{style:{backgroundColor:backgroundColor}}),
_react2.default.createElement(_animatedScanner2.default,_extends({},animatedScannerProps,{backgroundColor:progressBackgroundColor,hideScannerLine:true}))));


}}]);return ProgressBar;}(_commons.BaseComponent);ProgressBar.displayName='ProgressBar';ProgressBar.propTypes=_extends({},_animatedScanner2.default.propTypes,{height:_propTypes2.default.number,backgroundColor:_propTypes2.default.string,progressBackgroundColor:_propTypes2.default.string});ProgressBar.defaultProps={backgroundColor:_style.Colors.dark60,progressBackgroundColor:_style.Colors.dark10};exports.default=ProgressBar;