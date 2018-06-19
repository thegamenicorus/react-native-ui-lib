Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _text=require('../text');var _text2=_interopRequireDefault(_text);
var _style=require('../../style');
var _commons=require('../../commons');
var _helpers=require('../../helpers');
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





TabBarItem=function(_BaseComponent){_inherits(TabBarItem,_BaseComponent);













































function TabBarItem(props){_classCallCheck(this,TabBarItem);var _this=_possibleConstructorReturn(this,(TabBarItem.__proto__||Object.getPrototypeOf(TabBarItem)).call(this,
props));_this.















onLayout=function(event){
_lodash2.default.invoke(_this.props,'onLayout',event);

_this.setState({fontStyle:{}});
};_this.state={fontStyle:_this.getFontStyle(props)};return _this;}_createClass(TabBarItem,[{key:'getFontStyle',value:function getFontStyle(props){return props.selectedLabelStyle||this.styles.labelSelected;}},{key:'generateStyles',value:function generateStyles(){this.styles=createStyles(this.props);}},{key:'render',value:function render()

{var _props=










this.props,label=_props.label,labelStyle=_props.labelStyle,maxLines=_props.maxLines,selected=_props.selected,selectedLabelStyle=_props.selectedLabelStyle,showDivider=_props.showDivider,width=_props.width,onPress=_props.onPress,testID=_props.testID;
return(
_react2.default.createElement(_touchableOpacity2.default,{
activeOpacity:1,
onPress:onPress,
style:width?{width:width}:this.styles.container,
testID:testID,
onLayout:this.onLayout},

_react2.default.createElement(_view2.default,{flex:true,center:true,style:[showDivider&&this.styles.divider,{paddingHorizontal:_style.Spacings.s4}]},
!_lodash2.default.isEmpty(label)&&
_react2.default.createElement(_text2.default,{
numberOfLines:maxLines,
style:[
this.styles.label,
labelStyle,
selected&&this.styles.labelSelected,
selected&&selectedLabelStyle,
this.state.fontStyle]},


label),

this.props.children)));



}}]);return TabBarItem;}(_commons.BaseComponent);TabBarItem.displayName='TabBar.Item';TabBarItem.propTypes={label:_propTypes2.default.string,labelStyle:_text2.default.propTypes.style,maxLines:_propTypes2.default.number,selectedLabelStyle:_text2.default.propTypes.style,selected:_propTypes2.default.bool,onPress:_propTypes2.default.func,showDivider:_propTypes2.default.bool,width:_propTypes2.default.number,onLayout:_propTypes2.default.func};TabBarItem.defaultProps={maxLines:1};exports.default=TabBarItem;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
flex:1},

label:_extends({
color:_style.Colors.dark10},
_style.Typography.text90),

labelSelected:{
color:_style.Colors.blue30,
fontWeight:_helpers.Constants.isIOS?'600':'700'},

divider:{
borderRightWidth:1,
borderRightColor:_style.Colors.dark70,
marginVertical:14}});


}