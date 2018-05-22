Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _colors=require('../../style/colors');var _colors2=_interopRequireDefault(_colors);
var _typography=require('../../style/typography');var _typography2=_interopRequireDefault(_typography);

var _WheelPicker=require('../../nativeComponents/WheelPicker');var _WheelPicker2=_interopRequireDefault(_WheelPicker);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


WheelPickerDialog=function(_Component){_inherits(WheelPickerDialog,_Component);


function WheelPickerDialog(props){_classCallCheck(this,WheelPickerDialog);var _this=_possibleConstructorReturn(this,(WheelPickerDialog.__proto__||Object.getPrototypeOf(WheelPickerDialog)).call(this,
props));_this.





state={
initalSelectedValue:_this.props.selectedValue,
currentValue:false};_this.onValueChange=_this.onValueChange.bind(_this);_this.onSelect=_this.onSelect.bind(_this);return _this;}_createClass(WheelPickerDialog,[{key:'onValueChange',value:function onValueChange(


value,index){
if(this.props.onValueChange){
this.props.onValueChange(value,index);
}
this.setState({currentValue:value});
}},{key:'onSelect',value:function onSelect()

{
if(this.props.onSelect){
this.props.onSelect(this.state.currentValue);
}
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_view2.default,{style:styles.container,'bg-white':true,center:true},
_react2.default.createElement(_view2.default,{style:styles.titleContainer},
_react2.default.createElement(_text2.default,{style:styles.title},
this.props.title)),



_react2.default.createElement(_WheelPicker2.default,{
onValueChange:this.onValueChange,
selectedValue:this.state.currentValue||this.state.initalSelectedValue,
style:styles.picker},

this.props.items.map(function(item,idx){
return(
_react2.default.createElement(_WheelPicker2.default.Item,{key:String(idx)+String(item.value),value:item.value,label:item.label}));

})),

_react2.default.createElement(_view2.default,{style:styles.bottomButtonsContainer},

_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.props.onCancel},
_react2.default.createElement(_text2.default,{style:styles.cancelButton,'text80-medium':true},
'CANCEL')),


_react2.default.createElement(_reactNative.TouchableOpacity,{onPress:this.onSelect},
_react2.default.createElement(_text2.default,{style:styles.okButton,'text80-medium':true},
'OK')))));






}}]);return WheelPickerDialog;}(_react.Component);WheelPickerDialog.displayName='IGNORE';exports.default=WheelPickerDialog;


WheelPickerDialog.propTypes={
items:_propTypes2.default.array,
selectedValue:_propTypes2.default.oneOfType([
_propTypes2.default.string,
_propTypes2.default.number]),

title:_propTypes2.default.string,
onCancel:_propTypes2.default.func,
onSelect:_propTypes2.default.func,
onValueChange:_propTypes2.default.func};


var styles=_reactNative.StyleSheet.create({
container:{
height:295,
width:280,
flex:0,
justifyContent:'center'},

titleContainer:{
alignSelf:'flex-start'},

title:_extends({
marginTop:21,
marginLeft:24},
_typography2.default.text60,{
color:_colors2.default.black}),

picker:{
marginTop:24,
width:56,
height:148},

bottomButtonsContainer:{
alignItems:'center',
marginTop:32,
flex:0,
marginBottom:8,
flexDirection:'row',
marginLeft:142},

cancelButton:{
color:_colors2.default.blue30,
width:75,
height:36,
textAlign:'center',
textAlignVertical:'center'},

okButton:{
color:_colors2.default.blue30,
width:47,
height:36,
textAlign:'center',
textAlignVertical:'center',
marginHorizontal:8}});