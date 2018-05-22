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


var DEFAULT_COLOR_BY_STATE={
default:_style.Colors.dark40,
focus:_style.Colors.blue30,
error:_style.Colors.red30};

var DEFAULT_UNDERLINE_COLOR_BY_STATE={
default:_style.Colors.dark70,
focus:_style.Colors.blue30,
error:_style.Colors.red30};var











TextInput=function(_BaseInput){_inherits(TextInput,_BaseInput);










































































function TextInput(props){_classCallCheck(this,TextInput);var _this=_possibleConstructorReturn(this,(TextInput.__proto__||Object.getPrototypeOf(TextInput)).call(this,
props));

_this.onChangeText=_this.onChangeText.bind(_this);
_this.onFocus=_this.onFocus.bind(_this);
_this.onBlur=_this.onBlur.bind(_this);
_this.onDoneEditingExpandableInput=_this.onDoneEditingExpandableInput.bind(_this);
_this.updateFloatingPlaceholderState=_this.updateFloatingPlaceholderState.bind(_this);
_this.toggleExpandableModal=_this.toggleExpandableModal.bind(_this);
_this.shouldShowHelperText=_this.shouldShowHelperText.bind(_this);

_this.state={
value:props.value,
floatingPlaceholderState:new _reactNative.Animated.Value(
_this.hasText(props.value)||_this.shouldShowHelperText()?1:0),

showExpandableModal:false};


_this.generatePropsWarnings(props);return _this;
}_createClass(TextInput,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(nextProps.value!==this.props.value){
this.setState(
{
value:nextProps.value},

this.updateFloatingPlaceholderState);

}
}},{key:'componentDidMount',value:function componentDidMount()

{
this.getHeight();
}},{key:'generatePropsWarnings',value:function generatePropsWarnings(

props){
if(props.maxLength===0){
console.warn('Setting maxLength to zero will block typing in this input');
}
if(props.showCharacterCounter&&!props.maxLength){
console.warn("In order to use showCharacterCount please pass 'maxLength' prop");
}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getStateColor',value:function getStateColor(

colorProp,isUnderline){var
focused=this.state.focused;var
error=this.props.error;
var colorByState=_lodash2.default.cloneDeep(isUnderline?DEFAULT_UNDERLINE_COLOR_BY_STATE:DEFAULT_COLOR_BY_STATE);

if(colorProp){
if(_lodash2.default.isString(colorProp)){

return colorProp;
}else if(_lodash2.default.isObject(colorProp)){

_lodash2.default.merge(colorByState,colorProp);
}
}


var color=colorByState.default;
if(error&&isUnderline){
color=colorByState.error;
}else if(focused){
color=colorByState.focus;
}
return color;
}},{key:'getCharCount',value:function getCharCount()

{var
value=this.state.value;
return _lodash2.default.size(value);
}},{key:'isCounterLimit',value:function isCounterLimit()

{var
maxLength=this.props.maxLength;
var counter=this.getCharCount();
return counter===0?false:maxLength===counter;
}},{key:'hasText',value:function hasText(

value){
return!_lodash2.default.isEmpty(value||this.state.value);
}},{key:'shouldShowHelperText',value:function shouldShowHelperText()

{var
focused=this.state.focused;var
helperText=this.props.helperText;
return focused&&helperText;
}},{key:'shouldFakePlaceholder',value:function shouldFakePlaceholder()

{var _props=
this.props,floatingPlaceholder=_props.floatingPlaceholder,centered=_props.centered;
return Boolean(floatingPlaceholder&&!centered);
}},{key:'getHeight',value:function getHeight()

{var
multiline=this.props.multiline;
if(!multiline){
var typography=this.getTypography();
return typography.lineHeight;
}
return this.getLinesHeightLimit();
}},{key:'getLinesHeightLimit',value:function getLinesHeightLimit()


{var _props2=
this.props,multiline=_props2.multiline,numberOfLines=_props2.numberOfLines;
if(multiline&&numberOfLines){
var typography=this.getTypography();
return typography.lineHeight*numberOfLines;
}
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
this.styles.floatingPlaceholder,
this.styles.placeholder,
typography,
centered&&this.styles.placeholderCentered,
!centered&&{
top:floatingPlaceholderState.interpolate({
inputRange:[0,1],
outputRange:[multiline?30:28,multiline?7:0]}),

fontSize:floatingPlaceholderState.interpolate({
inputRange:[0,1],
outputRange:[typography.fontSize,floatingTypography.fontSize]}),

color:floatingPlaceholderState.interpolate({
inputRange:[0,1],
outputRange:[placeholderTextColor,this.getStateColor(floatingPlaceholderColor)]}),

lineHeight:this.hasText()||this.shouldShowHelperText()?
floatingTypography.lineHeight:
typography.lineHeight}],


onPress:function onPress(){return expandable&&_this2.toggleExpandableModal(true);}},

placeholder));


}
}},{key:'renderTitle',value:function renderTitle()

{var _props4=
this.props,floatingPlaceholder=_props4.floatingPlaceholder,title=_props4.title,titleColor=_props4.titleColor,titleStyle=_props4.titleStyle;
var color=this.getStateColor(titleColor);

if(!floatingPlaceholder&&title){
return(
_react2.default.createElement(_text2.default,{
style:[{color:color},this.styles.title,titleStyle]},

title));


}
}},{key:'renderCharCounter',value:function renderCharCounter()

{var
focused=this.state.focused;var _props5=
this.props,maxLength=_props5.maxLength,showCharacterCounter=_props5.showCharacterCounter;
if(maxLength&&showCharacterCounter){
var counter=this.getCharCount();
var color=this.isCounterLimit()&&focused?DEFAULT_COLOR_BY_STATE.error:DEFAULT_COLOR_BY_STATE.default;
return(
_react2.default.createElement(_text2.default,{
style:[{color:color},this.styles.charCounter]},

counter,' / ',maxLength));


}
}},{key:'renderError',value:function renderError()

{var _props6=
this.props,enableErrors=_props6.enableErrors,error=_props6.error,errorStyle=_props6.errorStyle;
if(enableErrors){
return(
_react2.default.createElement(_text2.default,{style:[this.styles.errorMessage,errorStyle]},
error));


}
}},{key:'renderExpandableModal',value:function renderExpandableModal()

{var _this3=this;var
renderExpandable=this.props.renderExpandable;var
showExpandableModal=this.state.showExpandableModal;

if(_lodash2.default.isFunction(renderExpandable)&&showExpandableModal){
return renderExpandable(this.props,this.state);
}

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

{var _this4=this;var _props7=
this.props,style=_props7.style,floatingPlaceholder=_props7.floatingPlaceholder,placeholder=_props7.placeholder;var
value=this.state.value;
var typography=this.getTypography();
var color=this.props.color||this.extractColorValue();
var minHeight=typography.lineHeight;
var shouldShowPlaceholder=_lodash2.default.isEmpty(value)&&!floatingPlaceholder;
var inputStyle=[
this.styles.input,
typography,
color&&{color:color},
style];


return(
_react2.default.createElement(_text2.default,{
style:[
{minHeight:minHeight},
inputStyle,
shouldShowPlaceholder&&this.styles.placeholder],


onPress:function onPress(){return _this4.toggleExpandableModal(true);}},

shouldShowPlaceholder?placeholder:value));


}},{key:'renderTextInput',value:function renderTextInput()

{var _this5=this;var
value=this.state.value;
var color=this.props.color||this.extractColorValue();
var typography=this.getTypography();var _props8=









this.props,style=_props8.style,placeholder=_props8.placeholder,floatingPlaceholder=_props8.floatingPlaceholder,centered=_props8.centered,multiline=_props8.multiline,numberOfLines=_props8.numberOfLines,helperText=_props8.helperText,others=_objectWithoutProperties(_props8,['style','placeholder','floatingPlaceholder','centered','multiline','numberOfLines','helperText']);
var inputStyle=[
this.styles.input,
typography,
color&&{color:color},


style];

var placeholderText=this.shouldFakePlaceholder()?
this.shouldShowHelperText()?helperText:undefined:placeholder;

return(
_react2.default.createElement(_reactNative.TextInput,_extends({},
others,{
value:value,
placeholder:placeholderText,
underlineColorAndroid:'transparent',
style:inputStyle,
multiline:multiline,
numberOfLines:numberOfLines,
onChangeText:this.onChangeText,
onChange:this.onChange,
onFocus:this.onFocus,
onBlur:this.onBlur,
ref:function ref(input){
_this5.input=input;
}})));


}},{key:'render',value:function render()

{var _props9=
this.props,expandable=_props9.expandable,containerStyle=_props9.containerStyle,underlineColor=_props9.underlineColor;
var underlineStateColor=this.getStateColor(underlineColor,true);

return(
_react2.default.createElement(_view2.default,{style:[this.styles.container,containerStyle],collapsable:false},
this.renderTitle(),
_react2.default.createElement(_view2.default,{style:[this.styles.innerContainer,{borderColor:underlineStateColor}]},
this.renderPlaceholder(),
expandable?this.renderExpandableInput():this.renderTextInput(),
this.renderExpandableModal()),

_react2.default.createElement(_view2.default,{row:true},
_react2.default.createElement(_view2.default,{flex:true},
this.renderError()),

this.renderCharCounter())));



}},{key:'toggleExpandableModal',value:function toggleExpandableModal(

value){
this.setState({showExpandableModal:value});
}},{key:'updateFloatingPlaceholderState',value:function updateFloatingPlaceholderState(

withoutAnimation){
if(withoutAnimation){
this.state.floatingPlaceholderState.setValue(this.hasText()||this.shouldShowHelperText()?1:0);
}else{
_reactNative.Animated.spring(this.state.floatingPlaceholderState,{
toValue:this.hasText()||this.shouldShowHelperText()?1:0,
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

text){var
transformer=this.props.transformer;
var transformedText=text;

if(_lodash2.default.isFunction(transformer)){
transformedText=transformer(text);
}

_lodash2.default.invoke(this.props,'onChangeText',transformedText);

this.setState(
{
value:transformedText},

this.updateFloatingPlaceholderState);

}},{key:'onFocus',value:function onFocus()

{for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
_lodash2.default.invoke.apply(_lodash2.default,[this.props,'onFocus'].concat(args));
this.setState({focused:true},this.updateFloatingPlaceholderState);
}},{key:'onBlur',value:function onBlur()

{for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}
_lodash2.default.invoke.apply(_lodash2.default,[this.props,'onBlur'].concat(args));
this.setState({focused:false},this.updateFloatingPlaceholderState);
}}]);return TextInput;}(_BaseInput3.default);TextInput.displayName='TextInput';TextInput.propTypes=_extends({},_reactNative.TextInput.propTypes,_BaseInput3.default.propTypes,{floatingPlaceholder:_propTypes2.default.bool,floatingPlaceholderColor:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]),helperText:_propTypes2.default.string,hideUnderline:_propTypes2.default.bool,underlineColor:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]),centered:_propTypes2.default.bool,error:_propTypes2.default.string,enableErrors:_propTypes2.default.bool,expandable:_propTypes2.default.bool,renderExpandable:_propTypes2.default.func,transformer:_propTypes2.default.func,title:_propTypes2.default.string,titleColor:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.object]),showCharacterCounter:_propTypes2.default.bool,testId:_propTypes2.default.string});TextInput.defaultProps={placeholderTextColor:DEFAULT_COLOR_BY_STATE.default,enableErrors:true};exports.default=TextInput;


function createStyles(_ref)




{var placeholderTextColor=_ref.placeholderTextColor,hideUnderline=_ref.hideUnderline,centered=_ref.centered,floatingPlaceholder=_ref.floatingPlaceholder;
return _reactNative.StyleSheet.create({
container:{},

innerContainer:{
flexDirection:'row',
borderBottomWidth:hideUnderline?0:1,
borderColor:_style.Colors.dark70,
justifyContent:centered?'center':undefined,
paddingTop:floatingPlaceholder?25:undefined,
flexGrow:1},

focusedUnderline:{
borderColor:_style.Colors.blue30},

errorUnderline:{
borderColor:_style.Colors.red30},

input:{
flexGrow:1,
marginBottom:hideUnderline?undefined:_helpers.Constants.isIOS?10:5,
padding:0,
textAlign:centered?'center':undefined,
backgroundColor:'transparent'},



floatingPlaceholder:{
position:'absolute'},

placeholder:{
color:placeholderTextColor},

placeholderCentered:{
left:0,
right:0,
textAlign:'center'},

errorMessage:_extends({
color:_style.Colors.red30,
textAlign:centered?'center':undefined},
_style.Typography.text90,{

marginTop:1}),

expandableModalContent:{
flex:1,
paddingTop:15,
paddingHorizontal:20},

title:_extends({
top:0},
_style.Typography.text90,{
height:_style.Typography.text90.lineHeight,
marginBottom:_helpers.Constants.isIOS?5:4}),

charCounter:_extends({},
_style.Typography.text90,{
height:_style.Typography.text90.lineHeight,
marginTop:1})});


}