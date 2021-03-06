Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _BaseComponent2=require('./BaseComponent');var _BaseComponent3=_interopRequireDefault(_BaseComponent2);
var _style=require('../style');
var _assets=require('../assets');var _assets2=_interopRequireDefault(_assets);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var INDICATOR_TYPES={
CIRCLE:'circle',
CLEAN:'clean'};var



SelectableComponent=function(_BaseComponent){_inherits(SelectableComponent,_BaseComponent);































function SelectableComponent(props){_classCallCheck(this,SelectableComponent);var _this=_possibleConstructorReturn(this,(SelectableComponent.__proto__||Object.getPrototypeOf(SelectableComponent)).call(this,
props));

_this.state={
selected:props.selected};


_this.onSelect=_this.onSelect.bind(_this);return _this;
}_createClass(SelectableComponent,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

newProps){
if(newProps.selected!==this.state.selected){
this.setState({
selected:newProps.selected});

}
}},{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'getIndicatorContainerStyle',value:function getIndicatorContainerStyle()

{var _props=
this.props,selectableIndicatorType=_props.selectableIndicatorType,selectableIndicatorColor=_props.selectableIndicatorColor;var
selected=this.state.selected;
var style=[this.styles.container];
if(selectableIndicatorType===INDICATOR_TYPES.CIRCLE){
style.push(this.styles.circleContainer);
style.push(selected&&{backgroundColor:selectableIndicatorColor});
}

return style;
}},{key:'getIndicatorIconStyle',value:function getIndicatorIconStyle()

{var _props2=
this.props,selectableIndicatorType=_props2.selectableIndicatorType,selectableIndicatorColor=_props2.selectableIndicatorColor;
var style=[this.styles.checkIcon];
if(selectableIndicatorType===INDICATOR_TYPES.CIRCLE){
style.push(this.styles.checkIconInCircle);
}else{
style.push({tintColor:selectableIndicatorColor});
}

return style;
}},{key:'renderSelectableIndicator',value:function renderSelectableIndicator()

{var
selectable=this.props.selectable;var
selected=this.state.selected;
if(selectable){
return(
_react2.default.createElement(_reactNative.View,{style:this.getIndicatorContainerStyle()},
selected&&_react2.default.createElement(_reactNative.Image,{style:this.getIndicatorIconStyle(),source:_assets2.default.icons.check})));


}
}},{key:'onSelect',value:function onSelect()

{
this.setState({
selected:!this.state.selected});

_lodash2.default.invoke(this.props,'onPress');
}}]);return SelectableComponent;}(_BaseComponent3.default);SelectableComponent.propTypes={selectable:_propTypes2.default.bool,selected:_propTypes2.default.bool,selectableIndicatorSize:_propTypes2.default.number,selectableIndicatorType:_propTypes2.default.oneOf([INDICATOR_TYPES.CIRCLE,INDICATOR_TYPES.CLEAN]),selectableIndicatorColor:_propTypes2.default.string};SelectableComponent.defaultProps={selectableIndicatorSize:36,selectableIndicatorType:INDICATOR_TYPES.CIRCLE,selectableIndicatorColor:_style.Colors.blue30};SelectableComponent.indicatorTypes=INDICATOR_TYPES;exports.default=SelectableComponent;


function createStyles(_ref){var selectableIndicatorSize=_ref.selectableIndicatorSize;
return _reactNative.StyleSheet.create({
container:{
width:selectableIndicatorSize,
height:selectableIndicatorSize,
justifyContent:'center',
borderRadius:_style.BorderRadiuses.br100},

circleContainer:{
borderWidth:1,
borderColor:_style.Colors.blue30},

checkIcon:{
alignSelf:'center',
resizeMode:'contain'},

checkIconInCircle:{
width:selectableIndicatorSize/2,
tintColor:_style.Colors.white}});


}