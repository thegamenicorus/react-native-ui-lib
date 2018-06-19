Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _style=require('../../style');
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _TabBarItem=require('./TabBarItem');var _TabBarItem2=_interopRequireDefault(_TabBarItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var LAYOUT_MODES={
FIT:'FIT',
SCROLL:'SCROLL'};var








TabBar=function(_BaseComponent){_inherits(TabBar,_BaseComponent);










































function TabBar(props){_classCallCheck(this,TabBar);var _this=_possibleConstructorReturn(this,(TabBar.__proto__||Object.getPrototypeOf(TabBar)).call(this,
props));_this.


























updateIndicatorPosition=function(){
if(_this.hasMeasurements()&&_this.contentWidth){
_this.setState({selectedIndicatorPosition:new _reactNative.Animated.Value(_this.calcIndicatorPosition(_this.state.selectedIndex))});
}
};_this.
























animateIndicatorPosition=function(index){var
disableAnimatedTransition=_this.props.disableAnimatedTransition;var
selectedIndicatorPosition=_this.state.selectedIndicatorPosition;

var newPosition=_this.calcIndicatorPosition(index);

if(disableAnimatedTransition){
selectedIndicatorPosition.setValue(newPosition);
}else{
_reactNative.Animated.spring(selectedIndicatorPosition,{
toValue:newPosition,
tension:30,
friction:8}).
start();
}
};_this.



















































































































onLayout=function(event){
_this.containerWidth=event.nativeEvent.layout.width;

switch(_this.state.currentMode){
case LAYOUT_MODES.FIT:
_this.contentWidth=_this.containerWidth;
_this.updateIndicatorPosition();
break;
case LAYOUT_MODES.SCROLL:
if(_this.contentWidth){
_this.calcLayoutMode();
}
break;
default:break;}

};_this.

onContentSizeChange=function(width){
_this.contentWidth=width;
if(_this.containerWidth){
_this.calcLayoutMode();
}
};_this.














onScroll=function(event){
if(_this.props.useGradientFinish){
var x=event.nativeEvent.contentOffset.x;
_this.animateGradientOpacity(x);
}
};_this.

animateGradientOpacity=function(x){
var overflow=_this.contentWidth-_this.containerWidth;
var newValue=x>0&&x>=overflow-1?0:1;

_reactNative.Animated.spring(_this.state.gradientValue,{
toValue:newValue,
speed:20}).
start();
};_this.widthsArray={};_this.contentWidth=undefined;_this.containerWidth=undefined;_this.childrenCount=_react2.default.Children.count(_this.props.children);_this.state={selectedIndex:props.selectedIndex,selectedIndicatorPosition:new _reactNative.Animated.Value(0),gradientValue:new _reactNative.Animated.Value(1),fadeAnim:0,currentMode:props.mode,widths:{}};return _this;}_createClass(TabBar,[{key:'generateStyles',value:function generateStyles(){this.styles=createStyles(this.props);}},{key:'hasMeasurements',value:function hasMeasurements(){return _lodash2.default.keys(this.state.widths).length===this.childrenCount;}},{key:'calcIndicatorWidth',value:function calcIndicatorWidth(){if(this.childrenCount===0){return'0%';}var itemWidth=this.state.widths[this.state.selectedIndex];var width=itemWidth/this.contentWidth*100;return width+'%';}},{key:'calcIndicatorPosition',value:function calcIndicatorPosition(index){var position=0;if(!_lodash2.default.isEmpty(this.state.widths)){var itemPosition=0;for(var i=0;i<index;i++){itemPosition+=this.state.widths[i];}position=itemPosition/this.contentWidth*100;}else{position=index*(100/this.childrenCount);}return position;}},{key:'onSelectingTab',value:function onSelectingTab(index){this.animateIndicatorPosition(index);this.setState({selectedIndex:index});_lodash2.default.invoke(this.props,'onChangeIndex',index);}},{key:'renderChildren',value:function renderChildren(){var _this2=this;var selectedIndex=this.state.selectedIndex;var children=_react2.default.Children.map(this.props.children,function(child,index){return _react2.default.cloneElement(child,{selected:selectedIndex===index,width:_this2.state.widths[index]||child.props.width,onPress:function onPress(){_this2.onSelectingTab(index);_lodash2.default.invoke(child.props,'onPress');},onLayout:function onLayout(event){var width=event.nativeEvent.layout.width;if(_lodash2.default.isUndefined(_this2.state.widths[index])){_this2.widthsArray[index]=width;_this2.setState({widths:_this2.widthsArray});_this2.updateIndicatorPosition();}}});});return children;}},{key:'renderSelectedIndicator',value:function renderSelectedIndicator(){var indicatorStyle=this.props.indicatorStyle;var selectedIndicatorPosition=this.state.selectedIndicatorPosition;var width=this.calcIndicatorWidth();var left=selectedIndicatorPosition.interpolate({inputRange:[0,100],outputRange:['0%','100%']});return _react2.default.createElement(_reactNative.Animated.View,{style:[this.styles.selectedIndicator,this.styles.absoluteContainer,{left:left,width:width},indicatorStyle]});}},{key:'renderBar',value:function renderBar(){var _props=this.props,height=_props.height,style=_props.style;return _react2.default.createElement(_view2.default,{style:[this.styles.container,style],'bg-white':true,row:true,height:height,onLayout:this.onLayout,useSafeArea:true},this.renderChildren(),this.hasMeasurements()&&this.renderSelectedIndicator());}},{key:'renderScrollBar',value:function renderScrollBar(){var _props2=this.props,height=_props2.height,style=_props2.style;var sizeStyle=_lodash2.default.pick(style,['width','height']);var otherStyle=_lodash2.default.omit(style,['width','height']);return _react2.default.createElement(_view2.default,{row:true,style:{opacity:this.state.fadeAnim,height:height},useSafeArea:true},_react2.default.createElement(_reactNative.ScrollView,{horizontal:true,showsHorizontalScrollIndicator:false,onLayout:this.onLayout,onContentSizeChange:this.onContentSizeChange,onScroll:this.onScroll,style:sizeStyle},_react2.default.createElement(_view2.default,{style:[this.styles.container,otherStyle],'bg-white':true,row:true},this.renderChildren(),this.hasMeasurements()&&this.renderSelectedIndicator())));}},{key:'render',value:function render(){switch(this.state.currentMode){case LAYOUT_MODES.FIT:return this.renderBar();case LAYOUT_MODES.SCROLL:return this.renderScrollBar();default:break;}}},{key:'calcLayoutMode',value:function calcLayoutMode(){if(this.contentWidth<this.containerWidth){this.widthsArray={};this.contentWidth=undefined;this.setState({currentMode:LAYOUT_MODES.FIT,widths:{}});}else{this.updateIndicatorPosition();this.setState({fadeAnim:1});}}}]);return TabBar;}(_commons.BaseComponent);TabBar.displayName='TabBar';TabBar.propTypes=_extends({},_reactNative.ViewPropTypes.height,{selectedIndex:_propTypes2.default.number,style:_reactNative.ViewPropTypes.style,indicatorStyle:_reactNative.ViewPropTypes.style,disableAnimatedTransition:_propTypes2.default.bool,onChangeIndex:_propTypes2.default.func,layoutMode:_propTypes2.default.oneOf(Object.keys(LAYOUT_MODES)),useGradientFinish:_propTypes2.default.bool});TabBar.defaultProps={mode:LAYOUT_MODES.FIT,selectedIndex:0,height:51,useGradientFinish:false};TabBar.modes=LAYOUT_MODES;exports.default=TabBar;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
borderBottomWidth:_reactNative.StyleSheet.hairlineWidth,
borderColor:_style.Colors.dark70},

selectedIndicator:{
borderBottomWidth:1.5,
borderColor:_style.Colors.blue30},

absoluteContainer:{
position:'absolute',
bottom:0,
left:0},

linearGradient:{
flex:1}});


}

TabBar.Item=_TabBarItem2.default;