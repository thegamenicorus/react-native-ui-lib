Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);

var _commons=require('../../commons');
var _dialog=require('../dialog');var _dialog2=_interopRequireDefault(_dialog);
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _style=require('../../style');
var _WheelPicker=require('../../nativeComponents/WheelPicker');var _WheelPicker2=_interopRequireDefault(_WheelPicker);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerDialog=function(_BaseComponent){_inherits(PickerDialog,_BaseComponent);function PickerDialog(){var _ref;var _temp,_this,_ret;_classCallCheck(this,PickerDialog);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=PickerDialog.__proto__||Object.getPrototypeOf(PickerDialog)).call.apply(_ref,[this].concat(args))),_this),_this.








state={},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(PickerDialog,[{key:'renderHeader',value:function renderHeader()

{var
topBarProps=this.props.topBarProps;
var title=_lodash2.default.get(topBarProps,'title');
var titleStyle=_lodash2.default.get(topBarProps,'titleStyle');

if(title){
return(
_react2.default.createElement(_view2.default,{style:styles.header},
_react2.default.createElement(_text2.default,{text60:true,dark10:true,style:titleStyle},
title)));



}
}},{key:'renderFooter',value:function renderFooter()

{var _props=
this.props,onDone=_props.onDone,onCancel=_props.onCancel,topBarProps=_props.topBarProps;
var doneLabel=_lodash2.default.get(topBarProps,'doneLabel','OK');
var cancelLabel=_lodash2.default.get(topBarProps,'cancelLabel','CANCEL');

return(
_react2.default.createElement(_view2.default,{style:styles.footer},
_react2.default.createElement(_text2.default,{text80:true,blue30:true,onPress:onCancel},
cancelLabel),

_react2.default.createElement(_text2.default,{text80:true,blue30:true,'marginL-15':true,onPress:onDone},
doneLabel)));



}},{key:'renderPicker',value:function renderPicker()

{var _props2=
this.props,children=_props2.children,onValueChange=_props2.onValueChange,selectedValue=_props2.selectedValue,renderNativePicker=_props2.renderNativePicker;
if(_lodash2.default.isFunction(renderNativePicker)){
return renderNativePicker(this.props);
}
return(
_react2.default.createElement(_WheelPicker2.default,{onValueChange:onValueChange,selectedValue:selectedValue},
children));


}},{key:'render',value:function render()

{
var dialogProps=_dialog2.default.extractOwnProps(this.props);
return(
_react2.default.createElement(_dialog2.default,_extends({},dialogProps,{visible:true,height:'50%',width:'77%'}),
_react2.default.createElement(_view2.default,{style:styles.dialog},
this.renderHeader(),
_react2.default.createElement(_view2.default,{flex:true,centerV:true,'paddingH-24':true},
this.renderPicker()),

this.renderFooter())));



}}]);return PickerDialog;}(_commons.BaseComponent);PickerDialog.propTypes={selectedValue:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),onValueChange:_propTypes2.default.func,onDone:_propTypes2.default.func,onCancel:_propTypes2.default.func,children:_propTypes2.default.array};


var styles=_reactNative.StyleSheet.create({
dialog:{
flex:1,
backgroundColor:_style.Colors.white,
overflow:'hidden',
borderRadius:_style.BorderRadiuses.br10,
paddingHorizontal:24},

header:{
paddingTop:21},

footer:{
height:52,
flexDirection:'row',
justifyContent:'flex-end',
alignItems:'center'}});exports.default=



PickerDialog;