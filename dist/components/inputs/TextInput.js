Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _BaseInput2=require('./BaseInput');var _BaseInput3=_interopRequireDefault(_BaseInput2);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _style=require('../../style');
var _helpers=require('../../helpers');
var _screensComponents=require('../../screensComponents');
var _TextArea=require('./TextArea');var _TextArea2=_interopRequireDefault(_TextArea);
var _view=require('../view');var _view2=_interopRequireDefault(_view);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var DEFAULT_UNDERLINE_COLOR_BY_STATE={
default:_style.Colors.dark80,
focus:_style.Colors.blue30,
error:_style.Colors.red30};var


TextInput=function(_BaseInput){_inherits(TextInput,_BaseInput);

















































function TextInput(props){_classCallCheck(this,TextInput);var _this=_possibleConstructorReturn(this,(TextInput.__proto__||Object.getPrototypeOf(TextInput)).call(this,
props));

_this.onChangeText=_this.onChangeText.bind(_this);
_this.onChange=_this.onChange.bind(_this);
_this.onContentSizeChange=_this.onContentSizeChange.bind(_this);
_this.updateFloatingPlaceholderState=_this.updateFloatingPlaceholderState.bind(_this);


_this.toggleExpandableModal=_this.toggleExpandableModal.bind(_this);
_this.onDoneEditingExpandableInput=_this.onDoneEditingExpandableInput.bind(_this);




_this.state={

widthExtendBreaks:[],
value:props.value,
floatingPlaceholderState:new _reactNative.Animated.Value(
_this.hasText(props.value)?1:0),

showExpandableModal:false};return _this;

}_createClass(TextInput,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(nextProps.value!==this.props.value){
this.setState(
{
value:nextProps.value},

this.updateFloatingPlaceholderState);

}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getUnderlineStyle',value:function getUnderlineStyle()


{var
focused=this.state.focused;var _props=
this.props,error=_props.error,underlineColor=_props.underlineColor;

var underlineColorByState=_lodash2.default.cloneDeep(DEFAULT_UNDERLINE_COLOR_BY_STATE);
if(underlineColor){
if(_lodash2.default.isString(underlineColor)){
return{borderColor:underlineColor};
}else if(_lodash2.default.isObject(underlineColor)){
_lodash2.default.merge(underlineColorByState,underlineColor);
}
}

var borderColor=underlineColorByState.default;
if(error){
borderColor=underlineColorByState.error;
}else if(focused){
borderColor=underlineColorByState.focus;
}


return{borderColor:borderColor};
}},{key:'hasText',value:function hasText(

value){
return!_lodash2.default.isEmpty(value||this.state.value);
}},{key:'shouldFakePlaceholder',value:function shouldFakePlaceholder()

{var _props2=
this.props,floatingPlaceholder=_props2.floatingPlaceholder,centered=_props2.centered;
return Boolean(floatingPlaceholder&&!centered);
}},{key:'getHeight',value:function getHeight()

{var
multiline=this.props.multiline;var
height=this.state.height;
var typography=this.getTypography();

if(multiline){
return height;
}
return typography.lineHeight;
}},{key:'renderPlaceholder',value:function renderPlaceholder()

{var _this2=this;var
floatingPlaceholderState=this.state.floatingPlaceholderState;var _props3=







this.props,centered=_props3.centered,expandable=_props3.expandable,placeholder=_props3.placeholder,placeholderTextColor=_props3.placeholderTextColor,floatingPlaceholderColor=_props3.floatingPlaceholderColor,multiline=_props3.multiline;
var typography=this.getTypography();
var floatingTypography=_style.Typography.text90;

if(this.shouldFakePlaceholder()){
return(
_react2.default.createElement(_reactNative.Animated.Text,{
style:[
this.styles.placeholder,
typography,
centered&&this.styles.placeholderCentered,
!centered&&{
top:floatingPlaceholderState.interpolate({
inputRange:[0,1],
outputRange:[multiline?30:23,multiline?7:0]}),

fontSize:floatingPlaceholderState.interpolate({
inputRange:[0,1],
outputRange:[typography.fontSize,floatingTypography.fontSize]}),

color:floatingPlaceholderState.interpolate({
inputRange:[0,1],
outputRange:[placeholderTextColor,floatingPlaceholderColor]}),

lineHeight:this.hasText()?
floatingTypography.lineHeight:
typography.lineHeight}],


onPress:function onPress(){return expandable&&_this2.toggleExpandableModal(true);}},

placeholder));


}
}},{key:'renderError',value:function renderError()

{var _props4=
this.props,enableErrors=_props4.enableErrors,error=_props4.error;
if(enableErrors){
return(
_react2.default.createElement(_text2.default,{style:this.styles.errorMessage},
error));


}
}},{key:'renderExpandableModal',value:function renderExpandableModal()

{var _this3=this;var
showExpandableModal=this.state.showExpandableModal;
return(
_react2.default.createElement(_screensComponents.Modal,{
animationType:'slide',
visible:showExpandableModal,
onRequestClose:function onRequestClose(){return _this3.toggleExpandableModal(false);}},

_react2.default.createElement(_screensComponents.Modal.TopBar,{
onCancel:function onCancel(){return _this3.toggleExpandableModal(false);},
onDone:this.onDoneEditingExpandableInput}),

_react2.default.createElement(_view2.default,{style:this.styles.expandableModalContent},
_react2.default.createElement(_TextArea2.default,_extends({
ref:function ref(textarea){
_this3.expandableInput=textarea;
}},
this.props,{
value:this.state.value})))));




}},{key:'renderExpandableInput',value:function renderExpandableInput()

{var _this4=this;
var typography=this.getTypography();var _props5=
this.props,floatingPlaceholder=_props5.floatingPlaceholder,placeholder=_props5.placeholder;var
value=this.state.value;
var minHeight=typography.lineHeight;
var shouldShowPlaceholder=_lodash2.default.isEmpty(value)&&!floatingPlaceholder;

return(
_react2.default.createElement(_text2.default,{
style:[
this.styles.input,
typography,
{minHeight:minHeight},
shouldShowPlaceholder&&this.styles.placeholder],

numberOfLines:3,
onPress:function onPress(){return _this4.toggleExpandableModal(true);}},

shouldShowPlaceholder?placeholder:value));


}},{key:'renderTextInput',value:function renderTextInput()

{var _this5=this;
var color=this.props.color||this.extractColorValue();
var typography=this.getTypography();var _props6=







this.props,style=_props6.style,placeholder=_props6.placeholder,floatingPlaceholder=_props6.floatingPlaceholder,centered=_props6.centered,multiline=_props6.multiline,others=_objectWithoutProperties(_props6,['style','placeholder','floatingPlaceholder','centered','multiline']);var
value=this.state.value;
var inputStyle=[
this.styles.input,
typography,
color&&{color:color},

{height:this.getHeight()},
style];


return(
_react2.default.createElement(_reactNative.TextInput,_extends({},
others,{
value:value,
placeholder:floatingPlaceholder&&!centered?undefined:placeholder,
underlineColorAndroid:'transparent',
style:inputStyle,
multiline:multiline,
onChangeText:this.onChangeText,
onChange:this.onChange,
onContentSizeChange:this.onContentSizeChange,
onFocus:this.onFocus,
onBlur:this.onBlur,
ref:function ref(input){
_this5.input=input;
}})));


}},{key:'render',value:function render()

{var _props7=
this.props,expandable=_props7.expandable,containerStyle=_props7.containerStyle;
var underlineStyle=this.getUnderlineStyle();

return(
_react2.default.createElement(_view2.default,{style:[this.styles.container,containerStyle]},
_react2.default.createElement(_view2.default,{style:[this.styles.innerContainer,underlineStyle]},
this.renderPlaceholder(),
expandable?this.renderExpandableInput():this.renderTextInput(),
this.renderExpandableModal()),

this.renderError()));


}},{key:'toggleExpandableModal',value:function toggleExpandableModal(

value){
this.setState({showExpandableModal:value});
}},{key:'updateFloatingPlaceholderState',value:function updateFloatingPlaceholderState(

withoutAnimation){
if(withoutAnimation){
this.state.floatingPlaceholderState.setValue(this.hasText()?1:0);
}else{
_reactNative.Animated.spring(this.state.floatingPlaceholderState,{
toValue:this.hasText()?1:0,
duration:150}).
start();
}
}},{key:'onDoneEditingExpandableInput',value:function onDoneEditingExpandableInput()

{
var expandableInputValue=_lodash2.default.get(this.expandableInput,'state.value');
this.setState({
value:expandableInputValue});

this.state.floatingPlaceholderState.setValue(expandableInputValue?1:0);
_lodash2.default.invoke(this.props,'onChangeText',expandableInputValue);
this.toggleExpandableModal(false);
}},{key:'onChangeText',value:function onChangeText(

text){
var transformedText=text;var
transformer=this.props.transformer;
if(_lodash2.default.isFunction(transformer)){
transformedText=transformer(text);
}

_lodash2.default.invoke(this.props,'onChangeText',transformedText);

this.setState(
{
value:transformedText},

this.updateFloatingPlaceholderState);

}},{key:'onContentSizeChange',value:function onContentSizeChange(

event){
this.calcMultilineInputHeight(event);
_lodash2.default.invoke(this.props,'onChange',event);
}},{key:'onChange',value:function onChange(

event){
this.calcMultilineInputHeight(event);
_lodash2.default.invoke(this.props,'onChange',event);
}},{key:'calcMultilineInputHeight',value:function calcMultilineInputHeight(


event){
if(_helpers.Constants.isAndroid){
var height=_lodash2.default.get(event,'nativeEvent.contentSize.height');
if(height){
this.setState({height:height});
}
}
}}]);return TextInput;}(_BaseInput3.default);TextInput.displayName='TextInput';TextInput.propTypes=_extends({},_reactNative.TextInput.propTypes,_BaseInput3.default.propTypes,{floatingPlaceholder:_propTypes2.default.bool,floatingPlaceholderColor:_propTypes2.default.string,hideUnderline:_propTypes2.default.bool,underlineColor:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]),centered:_propTypes2.default.bool,error:_propTypes2.default.string,enableErrors:_propTypes2.default.bool,expandable:_propTypes2.default.bool,transformer:_propTypes2.default.func,testId:_propTypes2.default.string});TextInput.defaultProps={placeholderTextColor:_style.Colors.dark40,floatingPlaceholderColor:_style.Colors.dark40,enableErrors:true};exports.default=TextInput;


function createStyles(_ref)




{var placeholderTextColor=_ref.placeholderTextColor,hideUnderline=_ref.hideUnderline,centered=_ref.centered,floatingPlaceholder=_ref.floatingPlaceholder;
return _reactNative.StyleSheet.create({
container:{
flexGrow:1},

innerContainer:{
flexDirection:'row',
borderBottomWidth:hideUnderline?0:1,
borderColor:_style.Colors.dark80,
justifyContent:centered?'center':undefined,
paddingTop:floatingPlaceholder?25:undefined,
flexGrow:1},

focusedUnderline:{
borderColor:_style.Colors.blue30},

errorUnderline:{
borderColor:_style.Colors.red30},

input:{
flex:1,
marginBottom:hideUnderline?undefined:10,
padding:0,
textAlign:centered?'center':undefined,
backgroundColor:'transparent'},

placeholder:{
position:'absolute',
color:placeholderTextColor},

placeholderCentered:{
left:0,
right:0,
textAlign:'center'},

errorMessage:_extends({
color:_style.Colors.red30},
_style.Typography.text90,{
height:_style.Typography.text90.lineHeight,
textAlign:centered?'center':undefined,
marginTop:1}),

expandableModalContent:{
flex:1,
paddingTop:15,
paddingHorizontal:20}});


}