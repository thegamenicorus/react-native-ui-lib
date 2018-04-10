Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _helpers=require('../../helpers');
var _commons=require('../../commons');
var _screensComponents=require('../../screensComponents');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

PickerModal=function(_BaseComponent){_inherits(PickerModal,_BaseComponent);function PickerModal(){var _ref;var _temp,_this,_ret;_classCallCheck(this,PickerModal);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=PickerModal.__proto__||Object.getPrototypeOf(PickerModal)).call.apply(_ref,[this].concat(args))),_this),_this.







state={
scrollHeight:undefined,
scrollContentHeight:undefined},_this.










onScrollViewLayout=function(_ref2){var height=_ref2.nativeEvent.layout.height;
_this.setState({scrollHeight:height},function(){
_this.scrollToSelected();
});
},_this.

onScrollViewContentSizeChange=function(contentWidth,contentHeight){
_this.setState({scrollContentHeight:contentHeight},function(){
_this.scrollToSelected();
});
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(PickerModal,[{key:'generateStyles',value:function generateStyles(){this.styles=createStyles(this.props);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.scrollToSelected(nextProps.scrollPosition);}},{key:'scrollToSelected',value:function scrollToSelected()

{var scrollPosition=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props.scrollPosition;
if(!scrollPosition)return;var _state=

this.state,scrollHeight=_state.scrollHeight,scrollContentHeight=_state.scrollContentHeight;
if(this.scrollView&&scrollHeight&&scrollContentHeight){
var pageNumber=Math.floor(scrollPosition/scrollHeight);
var numberOfPages=Math.ceil(scrollContentHeight/scrollHeight);

if(pageNumber===numberOfPages-1){
this.scrollView.scrollToEnd({animated:false});
}else{
this.scrollView.scrollTo({x:0,y:pageNumber*scrollHeight,animated:false});
}
}
}},{key:'render',value:function render()

{var _this2=this;var _props=
this.props,visible=_props.visible,enableModalBlur=_props.enableModalBlur,topBarProps=_props.topBarProps,children=_props.children;
return(
_react2.default.createElement(_screensComponents.Modal,{
animationType:'slide',
transparent:_helpers.Constants.isIOS&&enableModalBlur,
enableModalBlur:_helpers.Constants.isIOS&&enableModalBlur,
visible:visible,
onRequestClose:topBarProps.onCancel},

_react2.default.createElement(_screensComponents.Modal.TopBar,topBarProps),
_react2.default.createElement(_reactNative.ScrollView,{
ref:function ref(r){return _this2.scrollView=r;},
onLayout:this.onScrollViewLayout,
onContentSizeChange:this.onScrollViewContentSizeChange},

_react2.default.createElement(_reactNative.View,{style:this.styles.modalBody},children))));



}}]);return PickerModal;}(_commons.BaseComponent);PickerModal.displayName='IGNORE';PickerModal.propTypes=_extends({},_screensComponents.Modal.propTypes,{topBarProps:_propTypes2.default.shape(_screensComponents.Modal.TopBar.propTypes),scrollPosition:_propTypes2.default.number});


function createStyles(){
return _reactNative.StyleSheet.create({
modalBody:{
paddingTop:30}});


}exports.default=

PickerModal;