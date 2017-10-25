Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _inputs=require('../inputs');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _style=require('../../style');
var _assets=require('../../assets');var _assets2=_interopRequireDefault(_assets);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var








TagsInput=function(_BaseComponent){_inherits(TagsInput,_BaseComponent);


















































function TagsInput(props){_classCallCheck(this,TagsInput);var _this=_possibleConstructorReturn(this,(TagsInput.__proto__||Object.getPrototypeOf(TagsInput)).call(this,
props));

_this.addTag=_this.addTag.bind(_this);
_this.onChangeText=_this.onChangeText.bind(_this);
_this.renderTagWrapper=_this.renderTagWrapper.bind(_this);
_this.renderTag=_this.renderTag.bind(_this);
_this.getLabel=_this.getLabel.bind(_this);
_this.onKeyPress=_this.onKeyPress.bind(_this);

_this.state={
value:props.value,
tags:props.tags,
tagIndexToRemove:undefined};return _this;

}_createClass(TagsInput,[{key:'componentDidMount',value:function componentDidMount()

{
_reactNative.DeviceEventEmitter.addListener('onBackspacePress',this.onKeyPress);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
_reactNative.DeviceEventEmitter.removeListener('onBackspacePress',this.onKeyPress);
}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(nextProps.tags!==this.state.tags){
this.setState({
tags:nextProps.tags});

}
}},{key:'addTag',value:function addTag()

{var _props=
this.props,onCreateTag=_props.onCreateTag,disableTagAdding=_props.disableTagAdding;var _state=
this.state,value=_state.value,tags=_state.tags;
if(disableTagAdding)return;
if(_lodash2.default.isEmpty(value.trim()))return;

var newTag=_lodash2.default.isFunction(onCreateTag)?onCreateTag(value):value;
var newTags=[].concat(_toConsumableArray(tags),[newTag]);
this.setState({
value:'',
tags:newTags});

_lodash2.default.invoke(this.props,'onChangeTags',newTags);
this.input.clear();
}},{key:'removeMarkedTag',value:function removeMarkedTag()

{var _state2=
this.state,tags=_state2.tags,tagIndexToRemove=_state2.tagIndexToRemove;
if(!_lodash2.default.isUndefined(tagIndexToRemove)){
tags.splice(tagIndexToRemove,1);
this.setState({
tags:tags,
tagIndexToRemove:undefined});

_lodash2.default.invoke(this.props,'onChangeTags',tags);
}
}},{key:'onChangeText',value:function onChangeText(

value){
this.setState({value:value,tagIndexToRemove:undefined});
_lodash2.default.invoke(this.props,'onChangeText',value);
}},{key:'onTagPress',value:function onTagPress(

index){var
tagIndexToRemove=this.state.tagIndexToRemove;
if(tagIndexToRemove===index){
this.removeMarkedTag();
}else{
this.setState({tagIndexToRemove:index});
}
}},{key:'isLastTagMarked',value:function isLastTagMarked()

{var _state3=
this.state,tags=_state3.tags,tagIndexToRemove=_state3.tagIndexToRemove;
var tagsCount=_lodash2.default.size(tags);
var isLastTagMarked=tagIndexToRemove===tagsCount-1;
return isLastTagMarked;
}},{key:'onKeyPress',value:function onKeyPress(

event){
_lodash2.default.invoke(this.props,'onKeyPress',event);

if(this.props.disableTagRemoval){
return;
}var _state4=

this.state,value=_state4.value,tags=_state4.tags;
var tagsCount=_lodash2.default.size(tags);
var keyCode=_lodash2.default.get(event,'nativeEvent.key');
var hasNoValue=_lodash2.default.isEmpty(value);
var pressedBackspace=_helpers.Constants.isAndroid||keyCode==='Backspace';
var hasTags=tagsCount>0;
var isLastTagAlreadyMarked=this.isLastTagMarked();

if(pressedBackspace){
if(hasNoValue&&hasTags&&!isLastTagAlreadyMarked){
this.setState({
tagIndexToRemove:tagsCount-1});

}else if(isLastTagAlreadyMarked){
this.removeMarkedTag();
}
}
}},{key:'getLabel',value:function getLabel(

item){var
getLabel=this.props.getLabel;
if(getLabel){
return getLabel(item);
}

if(_lodash2.default.isString(item)){
return item;
}
return _lodash2.default.get(item,'label');
}},{key:'renderLabel',value:function renderLabel(

tag,shouldMarkTag){
var typography=this.extractTypographyValue();
return(
_react2.default.createElement(_view2.default,{row:true,centerV:true},
shouldMarkTag&&
_react2.default.createElement(_reactNative.Image,{style:styles.removeIcon,source:_assets2.default.icons.x}),
_react2.default.createElement(_text2.default,{style:[styles.tagLabel,typography]},
shouldMarkTag?'Remove':this.getLabel(tag))));



}},{key:'renderTag',value:function renderTag(

tag,index){var _props2=
this.props,tagStyle=_props2.tagStyle,renderTag=_props2.renderTag;var
tagIndexToRemove=this.state.tagIndexToRemove;
var shouldMarkTag=tagIndexToRemove===index;
if(_lodash2.default.isFunction(renderTag)){
return renderTag(tag,index,shouldMarkTag);
}
return(
_react2.default.createElement(_view2.default,{
key:index,
style:[styles.tag,tagStyle,shouldMarkTag&&styles.tagMarked]},

this.renderLabel(tag,shouldMarkTag)));


}},{key:'renderTagWrapper',value:function renderTagWrapper(

tag,index){var _this2=this;
return(
_react2.default.createElement(_touchableOpacity2.default,{
key:index,
activeOpacity:1,
onPress:function onPress(){return _this2.onTagPress(index);}},

this.renderTag(tag,index)));


}},{key:'renderTextInput',value:function renderTextInput()

{var _this3=this;var _props3=
this.props,containerStyle=_props3.containerStyle,inputStyle=_props3.inputStyle,others=_objectWithoutProperties(_props3,['containerStyle','inputStyle']);var
value=this.state.value;
var isLastTagMarked=this.isLastTagMarked();
return(
_react2.default.createElement(_view2.default,{style:styles.inputWrapper},
_react2.default.createElement(_inputs.TextInput,_extends({
ref:function ref(r){return _this3.input=r;},
text80:true},
others,{
value:value,
onSubmitEditing:this.addTag,
onChangeText:this.onChangeText,
onKeyPress:this.onKeyPress,
blurOnSubmit:false,
enableErrors:false,
hideUnderline:true,
selectionColor:isLastTagMarked?'transparent':undefined,
style:inputStyle,
containerStyle:{flexGrow:0}}))));



}},{key:'render',value:function render()

{var
disableTagRemoval=this.props.disableTagRemoval;
var tagRenderFn=disableTagRemoval?this.renderTag:this.renderTagWrapper;var _props4=

this.props,containerStyle=_props4.containerStyle,hideUnderline=_props4.hideUnderline;var
tags=this.state.tags;
return(
_react2.default.createElement(_view2.default,{style:[!hideUnderline&&styles.withUnderline,containerStyle]},
_react2.default.createElement(_view2.default,{style:styles.tagsList},
_lodash2.default.map(tags,tagRenderFn),
this.renderTextInput())));



}}]);return TagsInput;}(_commons.BaseComponent);TagsInput.displayName='TagsInput';TagsInput.propTypes={tags:_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.string])),getLabel:_propTypes2.default.func,renderTag:_propTypes2.default.func,onChangeTags:_propTypes2.default.func,onCreateTag:_propTypes2.default.func,disableTagRemoval:_propTypes2.default.bool,disableTagAdding:_propTypes2.default.bool,containerStyle:_reactNative.ViewPropTypes.style,tagStyle:_reactNative.ViewPropTypes.style,inputStyle:_inputs.TextInput.propTypes.style,hideUnderline:_propTypes2.default.bool};exports.default=TagsInput;


var GUTTER_SPACING=8;
var styles=_reactNative.StyleSheet.create({
withUnderline:{
borderBottomWidth:_reactNative.StyleSheet.hairlineWidth,
borderColor:_style.ThemeManager.dividerColor},

tagsList:{
flexDirection:'row',
flexWrap:'wrap',
alignItems:'center'},

inputWrapper:{
flexGrow:1,
minWidth:120,
marginVertical:GUTTER_SPACING/2},

tag:{
backgroundColor:_style.Colors.blue30,
borderRadius:_style.BorderRadiuses.br100,
paddingVertical:4.5,
paddingHorizontal:12,
marginRight:GUTTER_SPACING,
marginVertical:GUTTER_SPACING/2},

tagMarked:{
backgroundColor:_style.Colors.dark10},

removeIcon:{
tintColor:_style.Colors.white,
width:10,
height:10,
marginRight:6},

tagLabel:_extends({},
_style.Typography.text80,{
color:_style.Colors.white})});