Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _style=require('../../style');
var _commons=require('../../commons');
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _view=require('../view');var _view2=_interopRequireDefault(_view);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


function getColorStyle(color,inactiveColor,index,currentPage){
var compColor=color||_style.ThemeManager.primaryColor;
return{borderColor:index===currentPage?compColor:inactiveColor||compColor,
backgroundColor:index===currentPage?compColor:inactiveColor||'transparent'};
}

function getSizeStyle(size,enlargeActive,index,currentPage){
var temp=enlargeActive?index===currentPage?size+2:size:size;
return{width:temp,height:temp,borderRadius:temp/2};
}var






PageControl=function(_BaseComponent){_inherits(PageControl,_BaseComponent);function PageControl(){_classCallCheck(this,PageControl);return _possibleConstructorReturn(this,(PageControl.__proto__||Object.getPrototypeOf(PageControl)).apply(this,arguments));}_createClass(PageControl,[{key:'render',value:function render()














































{var _props=

this.props,numOfPages=_props.numOfPages,currentPage=_props.currentPage,color=_props.color,inactiveColor=_props.inactiveColor,containerStyle=_props.containerStyle,onPagePress=_props.onPagePress,size=_props.size,spacing=_props.spacing,enlargeActive=_props.enlargeActive;

return(
_react2.default.createElement(_view2.default,{style:[styles.container,containerStyle]},

_lodash2.default.map([].concat(_toConsumableArray(new Array(numOfPages))),function(item,index){return(
_react2.default.createElement(_touchableOpacity2.default,{
disabled:_lodash2.default.isUndefined(onPagePress),
onPress:function onPress(){return onPagePress&&onPagePress(index);},
key:index,
style:[
styles.pageIndicator,
{marginRight:spacing/2,marginLeft:spacing/2},
getColorStyle(color,inactiveColor,index,currentPage),
getSizeStyle(size,enlargeActive,index,currentPage)]}));})));





}}]);return PageControl;}(_commons.BaseComponent);PageControl.displayName='PageControl';PageControl.propTypes={containerStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),numOfPages:_propTypes2.default.number,currentPage:_propTypes2.default.number,onPagePress:_propTypes2.default.func,color:_propTypes2.default.string,inactiveColor:_propTypes2.default.string,size:_propTypes2.default.number,enlargeActive:_propTypes2.default.bool,spacing:_propTypes2.default.number};PageControl.defaultProps={size:10,spacing:4,enlargeActive:false};exports.default=PageControl;


var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

pageIndicator:{
backgroundColor:'transparent',
borderWidth:1}});