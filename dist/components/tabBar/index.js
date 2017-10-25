Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _style=require('../../style');
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _TabBarItem=require('./TabBarItem');var _TabBarItem2=_interopRequireDefault(_TabBarItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

TabBar=function(_BaseComponent){_inherits(TabBar,_BaseComponent);
































function TabBar(props){_classCallCheck(this,TabBar);var _this=_possibleConstructorReturn(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).call(this,
props));
var childrenCount=_react2.default.Children.count(_this.props.children);
_this.state={
selectedIndex:props.selectedIndex,
selectedIndicatorPosition:new _reactNative.Animated.Value(_this.calcPosition(props.selectedIndex,childrenCount))};return _this;

}_createClass(TabBar,[{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'calcPosition',value:function calcPosition(

index,tabsCount){
var position=index*(100/tabsCount);
return position;
}},{key:'calcIndicatorWidth',value:function calcIndicatorWidth()

{
var childrenCount=_react2.default.Children.count(this.props.children);
if(childrenCount===0){
return'0%';
}
var width=Math.floor(100/childrenCount);
return width+'%';
}},{key:'onSelectingTab',value:function onSelectingTab(

index){var
disableAnimatedTransition=this.props.disableAnimatedTransition;var
selectedIndicatorPosition=this.state.selectedIndicatorPosition;

var newPosition=this.calcPosition(index,this.props.children.length);

if(disableAnimatedTransition){
selectedIndicatorPosition.setValue(newPosition);
}else{
_reactNative.Animated.spring(selectedIndicatorPosition,{
toValue:this.calcPosition(index,this.props.children.length),
tension:30,
friction:8}).
start();
}

this.setState({
selectedIndex:index});


_lodash2.default.invoke(this.props,'onChangeIndex',index);
}},{key:'renderChildren',value:function renderChildren()

{var _this2=this;var
selectedIndex=this.state.selectedIndex;
var children=_react2.default.Children.map(this.props.children,function(child,index){
return _react2.default.cloneElement(child,{
selected:selectedIndex===index,
onPress:function onPress(){
_this2.onSelectingTab(index);
_lodash2.default.invoke(child.props,'onPress');
}});

});

return children;
}},{key:'renderSelectedIndicator',value:function renderSelectedIndicator()

{var
indicatorStyle=this.props.indicatorStyle;var
selectedIndicatorPosition=this.state.selectedIndicatorPosition;
var width=this.calcIndicatorWidth();
var left=selectedIndicatorPosition.interpolate({
inputRange:[0,100],
outputRange:['0%','100%']});

return(
_react2.default.createElement(_reactNative.Animated.View,{style:[this.styles.selectedIndicator,{left:left,width:width},indicatorStyle]}));

}},{key:'render',value:function render()

{var _props=
this.props,height=_props.height,style=_props.style;
return(
_react2.default.createElement(_view2.default,{style:[this.styles.container,style],'bg-white':true,row:true,height:height},
this.renderChildren(),
this.renderSelectedIndicator()));


}}]);return TabBar;}(_commons.BaseComponent);TabBar.displayName='TabBar';TabBar.propTypes=_extends({},_reactNative.ViewPropTypes.height,{selectedIndex:_propTypes2.default.number,style:_reactNative.ViewPropTypes.style,indicatorStyle:_reactNative.ViewPropTypes.style,disableAnimatedTransition:_propTypes2.default.bool,onChangeIndex:_propTypes2.default.func});TabBar.defaultProps={selectedIndex:0,height:51};exports.default=TabBar;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
borderBottomWidth:_reactNative.StyleSheet.hairlineWidth,
borderColor:_style.Colors.dark70},

selectedIndicator:{
position:'absolute',
bottom:0,
left:0,
borderBottomWidth:1.5,
borderColor:_style.Colors.blue30}});


}

TabBar.Item=_TabBarItem2.default;