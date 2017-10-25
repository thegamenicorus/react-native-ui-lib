Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _assets=require('../../assets');var _assets2=_interopRequireDefault(_assets);
var _style=require('../../style');
var _view=require('../../components/view');var _view2=_interopRequireDefault(_view);

var _button=require('../../components/button');var _button2=_interopRequireDefault(_button);
var _text=require('../../components/text');var _text2=_interopRequireDefault(_text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var DEFAULT_BUTTON_PROPS={
color:_style.Colors.blue30};var


TopBar=function(_BaseComponent){_inherits(TopBar,_BaseComponent);function TopBar(){_classCallCheck(this,TopBar);return _possibleConstructorReturn(this,(TopBar.__proto__||Object.getPrototypeOf(TopBar)).apply(this,arguments));}_createClass(TopBar,[{key:'generateStyles',value:function generateStyles()


























































{
this.styles=createStyles(this.props);
}},{key:'renderTopBarButton',value:function renderTopBarButton(_ref)

{var onPress=_ref.onPress,label=_ref.label,icon=_ref.icon,buttonProps=_ref.buttonProps;
if(onPress&&(label||icon)){var
iconStyle=buttonProps.iconStyle,labelStyle=buttonProps.labelStyle,otherButtonProps=_objectWithoutProperties(buttonProps,['iconStyle','labelStyle']);

return(
_react2.default.createElement(_button2.default,_extends({
link:true,
onPress:onPress,
label:label,
labelStyle:[this.styles.actionLabel,labelStyle],
iconSource:icon,
iconStyle:[this.styles.icon,iconStyle]},
DEFAULT_BUTTON_PROPS,
otherButtonProps,{
hitSlop:{top:6,bottom:6,left:6,right:6}})));


}
}},{key:'renderDone',value:function renderDone()

{var _props=
this.props,doneButtonProps=_props.doneButtonProps,doneLabel=_props.doneLabel,doneIcon=_props.doneIcon,onDone=_props.onDone;
return this.renderTopBarButton({
onPress:onDone,label:doneLabel,icon:doneIcon,buttonProps:doneButtonProps});

}},{key:'renderCancel',value:function renderCancel()

{var _props2=
this.props,cancelButtonProps=_props2.cancelButtonProps,cancelLabel=_props2.cancelLabel,cancelIcon=_props2.cancelIcon,onCancel=_props2.onCancel;
return this.renderTopBarButton({
onPress:onCancel,label:cancelLabel,icon:cancelIcon,buttonProps:cancelButtonProps});

}},{key:'render',value:function render()

{var _props3=
this.props,title=_props3.title,titleStyle=_props3.titleStyle,includeStatusBar=_props3.includeStatusBar;

return(
_react2.default.createElement(_view2.default,null,
includeStatusBar&&_react2.default.createElement(_view2.default,{style:this.styles.statusBar}),
_react2.default.createElement(_view2.default,{style:this.styles.container},
_react2.default.createElement(_view2.default,{row:true,flex:true,bottom:true,'paddingL-15':true,centerV:true},
this.renderCancel()),

_react2.default.createElement(_view2.default,{row:true,'flex-3':true,bottom:true,centerH:true,centerV:true},
_react2.default.createElement(_text2.default,{numberOfLines:1,text70:true,style:[this.styles.title,titleStyle]},title)),

_react2.default.createElement(_view2.default,{row:true,flex:true,bottom:true,right:true,'paddingR-15':true,centerV:true},
this.renderDone()))));




}}]);return TopBar;}(_commons.BaseComponent);TopBar.displayName='Moda.TopBar';TopBar.propTypes={title:_propTypes2.default.string,titleStyle:_propTypes2.default.object,doneButtonProps:_propTypes2.default.shape(_button2.default.propTypes),doneLabel:_propTypes2.default.string,doneIcon:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),onDone:_propTypes2.default.func,cancelButtonProps:_propTypes2.default.shape(_button2.default.propTypes),cancelLabel:_propTypes2.default.string,cancelIcon:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),onCancel:_propTypes2.default.func,includeStatusBar:_propTypes2.default.bool};TopBar.defaultProps={doneLabel:'Save',cancelIcon:_assets2.default.icons.x,doneButtonProps:{},cancelButtonProps:{},includeStatusBar:_helpers.Constants.isIOS};exports.default=TopBar;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
flexDirection:'row',
height:32+_helpers.Constants.statusBarHeight},

statusBar:{
height:_helpers.Constants.statusBarHeight},

title:{
fontWeight:'500'},

actionLabel:_extends({},
_style.Typography.text70),

icon:{
width:16,
height:16,
tintColor:_style.Colors.dark10,
marginBottom:2}});


}