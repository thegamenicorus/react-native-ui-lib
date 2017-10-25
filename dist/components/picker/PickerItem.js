Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _style=require('../../style');
var _commons=require('../../commons');
var _assets=require('../../assets');var _assets2=_interopRequireDefault(_assets);
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


PickerItem=function(_BaseComponent){_inherits(PickerItem,_BaseComponent);

































function PickerItem(props){_classCallCheck(this,PickerItem);var _this=_possibleConstructorReturn(this,(PickerItem.__proto__||Object.getPrototypeOf(PickerItem)).call(this,
props));

if(props.label){
console.warn('PickerItem \'label\' prop will be deprecated soon. please include label in \'value\' prop. (refer docs)');
}

if(!_lodash2.default.isObject(props.value)){
console.warn('PickerItem \'value\' prop type has changed to object, please use it with the following format: {value: ..., label: ...} or use getItemValue & getItemLabel props');
}return _this;
}_createClass(PickerItem,[{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getLabel',value:function getLabel()

{var _props=
this.props,value=_props.value,label=_props.label;
if(_lodash2.default.isObject(value)){
return _lodash2.default.invoke(this.props,'getItemLabel',value)||_lodash2.default.get(value,'label');
}
return label;
}},{key:'renderSelectedIndicator',value:function renderSelectedIndicator()

{var _props2=
this.props,isSelected=_props2.isSelected,disabled=_props2.disabled;
if(isSelected){
return(
_react2.default.createElement(_reactNative.Image,{
style:[this.styles.checkIcon,disabled&&this.styles.checkIconDisabled],
source:_assets2.default.icons.check}));


}
}},{key:'renderItem',value:function renderItem()

{var
disabled=this.props.disabled;
return(
_react2.default.createElement(_view2.default,{style:this.styles.container,flex:true,row:true,spread:true,centerV:true},
_react2.default.createElement(_text2.default,{
numberOfLines:1,
style:[this.styles.labelText,disabled&&this.styles.labelTextDisabled]},

this.getLabel()),

this.renderSelectedIndicator()));


}},{key:'render',value:function render()

{var _props3=
this.props,renderItem=_props3.renderItem,label=_props3.label,value=_props3.value,disabled=_props3.disabled,_onPress=_props3.onPress,testID=_props3.testID;

return(
_react2.default.createElement(_touchableOpacity2.default,{
activeOpacity:0.5,

onPress:function onPress(){return _onPress(_lodash2.default.isObject(value)?value:{value:value,label:label});},
disabled:disabled,
testID:testID},

renderItem?renderItem(value,this.props):this.renderItem()));


}}]);return PickerItem;}(_commons.BaseComponent);PickerItem.propTypes={label:_propTypes2.default.string,value:_propTypes2.default.object,getItemLabel:_propTypes2.default.func,getItemValue:_propTypes2.default.func,isSelected:_propTypes2.default.bool,disabled:_propTypes2.default.bool,renderItem:_propTypes2.default.func,onPress:_propTypes2.default.func};


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
height:56.5,
paddingHorizontal:23,
borderColor:_style.Colors.rgba(_style.Colors.dark10,0.1),
borderBottomWidth:1},

labelText:_extends({},
_style.Typography.text70,{
color:_style.Colors.dark10,
flex:1}),

labelTextDisabled:{
color:_style.Colors.dark60},

checkIcon:{
tintColor:_style.ThemeManager.primaryColor},

checkIconDisabled:{
tintColor:_style.Colors.dark60}});


}exports.default=

PickerItem;