Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _reactNativeAnimatable=require('react-native-animatable');var Animatable=_interopRequireWildcard(_reactNativeAnimatable);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _style=require('../../style');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _button=require('../button');var _button2=_interopRequireDefault(_button);
var _listItem=require('../listItem');var _listItem2=_interopRequireDefault(_listItem);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var






ActionSheet=function(_BaseComponent){_inherits(ActionSheet,_BaseComponent);




































function ActionSheet(props){_classCallCheck(this,ActionSheet);var _this=_possibleConstructorReturn(this,(ActionSheet.__proto__||Object.getPrototypeOf(ActionSheet)).call(this,
props));

_this.onOptionPress=_this.onOptionPress.bind(_this);
_this.renderAction=_this.renderAction.bind(_this);return _this;
}_createClass(ActionSheet,[{key:'renderSheet',value:function renderSheet()

{
return(
_react2.default.createElement(Animatable.View,{animation:'slideInUp',duration:600,easing:'ease-out-quint'},
_react2.default.createElement(_view2.default,{'bg-white':true},
this.renderTitle(),
this.renderActions())));



}},{key:'renderTitle',value:function renderTitle()

{var
title=this.props.title;
if(!_lodash2.default.isEmpty(title)){
return(
_react2.default.createElement(_view2.default,{height:56,'paddingL-16':true,centerV:true},
_react2.default.createElement(_text2.default,{dark40:true,text70:true},
title)));



}
}},{key:'renderActions',value:function renderActions()

{var _props=
this.props,title=_props.title,options=_props.options,cancelButtonIndex=_props.cancelButtonIndex;
var optionsToRender=_lodash2.default.filter(options,function(option,index){return index!==cancelButtonIndex;});
return(
_react2.default.createElement(_view2.default,{'paddingB-8':true,'paddingT-8':_lodash2.default.isEmpty(title)},
_lodash2.default.map(optionsToRender,this.renderAction)));


}},{key:'renderAction',value:function renderAction(

option,index){var _this2=this;
return(
_react2.default.createElement(_listItem2.default,{
style:{backgroundColor:'transparent'},
height:48,
key:index,
onPress:function onPress(){return _this2.onOptionPress(index);},
activeBackgroundColor:_style.Colors.dark80},

_react2.default.createElement(_view2.default,{'paddingH-20':true,flex:true,centerV:true},
_react2.default.createElement(_text2.default,{text70:true,dark10:true,numberOfLines:1},
option.label))));




}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){var _getThemeProps=
this.getThemeProps(),useNativeIOS=_getThemeProps.useNativeIOS;
var wasVisible=this.props.visible;
var willBeVisible=nextProps.visible;

if(!wasVisible&&willBeVisible&&useNativeIOS&&_helpers.Constants.isIOS){var
title=nextProps.title,message=nextProps.message,cancelButtonIndex=nextProps.cancelButtonIndex,destructiveButtonIndex=nextProps.destructiveButtonIndex,options=nextProps.options;

_reactNative.ActionSheetIOS.showActionSheetWithOptions(
{
title:title,
message:message,
options:_lodash2.default.map(options,'label'),
cancelButtonIndex:cancelButtonIndex,
destructiveButtonIndex:destructiveButtonIndex},

this.onOptionPress);

}
}},{key:'onOptionPress',value:function onOptionPress(

optionIndex){
_lodash2.default.invoke(this.props,'options['+optionIndex+'].onPress');
_lodash2.default.invoke(this.props,'onDismiss');
}},{key:'render',value:function render()

{var _getThemeProps2=
this.getThemeProps(),visible=_getThemeProps2.visible,useNativeIOS=_getThemeProps2.useNativeIOS,onDismiss=_getThemeProps2.onDismiss;

if(_helpers.Constants.isIOS&&useNativeIOS)return null;

return(
_react2.default.createElement(_reactNative.Modal,{visible:visible,transparent:true,onRequestClose:onDismiss},
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onDismiss},
_react2.default.createElement(_view2.default,{style:styles.container},
_react2.default.createElement(Animatable.View,{
style:styles.overlay,
animation:'fadeIn',
duration:300,
easing:'ease-out-quint',
useNativeDriver:true},

_react2.default.createElement(_view2.default,{flex:true,bottom:true},
this.renderSheet()))))));






}}]);return ActionSheet;}(_commons.BaseComponent);ActionSheet.displayName='ActionSheet';ActionSheet.propTypes={visible:_propTypes2.default.bool,title:_propTypes2.default.string,message:_propTypes2.default.string,cancelButtonIndex:_propTypes2.default.number,destructiveButtonIndex:_propTypes2.default.number,options:_propTypes2.default.arrayOf(_propTypes2.default.shape(_button2.default.propTypes)),onDismiss:_propTypes2.default.func,useNativeIOS:_propTypes2.default.bool};exports.default=ActionSheet;


var styles=_reactNative.StyleSheet.create({
container:_extends({},
_reactNative.StyleSheet.absoluteFillObject),

overlay:{
flex:1,
backgroundColor:_style.Colors.rgba(_style.Colors.black,0.4)}});