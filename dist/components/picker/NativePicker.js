Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _TextInput=require('../inputs/TextInput');var _TextInput2=_interopRequireDefault(_TextInput);
var _WheelPicker=require('../../nativeComponents/WheelPicker');var _WheelPicker2=_interopRequireDefault(_WheelPicker);
var _PickerDialog=require('./PickerDialog');var _PickerDialog2=_interopRequireDefault(_PickerDialog);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Picker=function(_BaseComponent){_inherits(Picker,_BaseComponent);function Picker(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Picker);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Picker.__proto__||Object.getPrototypeOf(Picker)).call.apply(_ref,[this].concat(args))),_this),_this.
state={
selectedValue:_this.props.value,
items:_this.extractPickerItems(_this.props)},_this.










onCancel=function(){
_this.setState({
selectedValue:_this.props.value});

_this.input.toggleExpandableModal(false);
},_this.

onDone=function(){var
selectedValue=_this.state.selectedValue;
_lodash2.default.invoke(_this.props,'onChange',selectedValue);
_this.input.toggleExpandableModal(false);
},_this.

onValueChange=function(selectedValue){
_this.setState({
selectedValue:selectedValue});

},_this.













renderPickerDialog=function(){var
selectedValue=_this.state.selectedValue;
return(
_react2.default.createElement(_PickerDialog2.default,_extends({},
_this.getThemeProps(),{
onDismiss:_this.onCancel,
onValueChange:_this.onValueChange,
selectedValue:selectedValue,
onDone:_this.onDone,
onCancel:_this.onCancel})));


},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Picker,[{key:'extractPickerItems',value:function extractPickerItems(props){var children=props.children,useNativePicker=props.useNativePicker;if(useNativePicker){var items=_react2.default.Children.map(children,function(child){return{value:child.props.value,label:child.props.label};});return items;}}},{key:'getLabel',value:function getLabel(){var _props=this.props,value=_props.value,getLabel=_props.getLabel;if(_lodash2.default.isFunction(getLabel)){return getLabel(value);}var items=this.state.items;var selectedItem=_lodash2.default.find(items,{value:value});return _lodash2.default.get(selectedItem,'label');}},{key:'render',value:function render()
{var _this2=this;
var textInputProps=_TextInput2.default.extractOwnProps(this.props);
var label=this.getLabel();
return(
_react2.default.createElement(_TextInput2.default,_extends({
ref:function ref(r){return _this2.input=r;},
floatingPlaceholder:false,
enableErrors:false},
textInputProps,{
value:label,
expandable:true,
editable:false,
renderExpandable:this.renderPickerDialog})));


}}]);return Picker;}(_commons.BaseComponent);


Picker.Item=_WheelPicker2.default.Item;exports.default=
Picker;