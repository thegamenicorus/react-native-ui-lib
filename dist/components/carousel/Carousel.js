Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _reactNativeInteractable=require('react-native-interactable');var _reactNativeInteractable2=_interopRequireDefault(_reactNativeInteractable);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _helpers=require('../../helpers');
var _commons=require('../../commons');
var _CarouselPresenter=require('./CarouselPresenter');var presenter=_interopRequireWildcard(_CarouselPresenter);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Carousel=function(_BaseComponent){_inherits(Carousel,_BaseComponent);












function Carousel(props){_classCallCheck(this,Carousel);var _this=_possibleConstructorReturn(this,(Carousel.__proto__||Object.getPrototypeOf(Carousel)).call(this,
props));
_this.deltaX=new _reactNative.Animated.Value(0);

_this.onStop=_this.onStop.bind(_this);
_this.state={
currentPage:props.initialPage};return _this;

}_createClass(Carousel,[{key:'componentWillMount',value:function componentWillMount()

{
this.updateCarouselPosition();
}},{key:'onStop',value:function onStop(

event){var _this2=this;
var offset=event.nativeEvent.x;
var newPage=presenter.calcPageIndex(-offset,this.props);var
currentPage=this.state.currentPage;

this.setState({
currentPage:newPage},
function(){
if(currentPage!==newPage){
_lodash2.default.invoke(_this2.props,'onChangePage',newPage,currentPage);
}
});

if(presenter.isOutOfBounds(-offset,this.props)){
this.updateCarouselPosition();
}
}},{key:'updateCarouselPosition',value:function updateCarouselPosition()

{
var position={
x:-presenter.calcOffset(this.props,this.state),
y:0};

this.setState({position:position});

if(!this.carousel){
return;
}

this.carousel.snapTo({index:1});
}},{key:'getSnappingPoints',value:function getSnappingPoints()

{var _props=
this.props,pageWidth=_props.pageWidth,loop=_props.loop;
var length=presenter.getChildrenLength(this.props);
if(loop){
length+=2;
}
var snappingPoints=_lodash2.default.times(length,function(i){
return{
x:-i*pageWidth,
id:i,
tension:500,
damping:0.6};

});

return snappingPoints;
}},{key:'generateStyles',value:function generateStyles()















{
this.styles=createStyles(this.props);
}},{key:'cloneChild',value:function cloneChild(

child){
if(!child.key){
return child;
}
return _react2.default.cloneElement(child,{
key:child.key+'-clone'});

}},{key:'renderPages',value:function renderPages()

{var
loop=this.props.loop;var
children=this.props.children;
var length=presenter.getChildrenLength(this.props);

if(loop){
children=[
this.cloneChild(children[length-1])].concat(_toConsumableArray(
children),[
this.cloneChild(children[0])]);

}

return children;




















}},{key:'render',value:function render()

{var _this3=this;
var carouselWidth=presenter.calcCarouselWidth(this.props);var
position=this.state.position;
return(
_react2.default.createElement(_reactNative.View,{style:this.styles.container},
_react2.default.createElement(_reactNativeInteractable2.default.View,{
ref:function ref(carousel){_this3.carousel=carousel;},
horizontalOnly:true,
dragToss:0.05,
snapPoints:this.getSnappingPoints(),
onStop:this.onStop,
animatedValueX:this.deltaX,
initialPosition:position,
style:[this.styles.scrollStrip,{width:carouselWidth}]},

this.renderPages())));



}}]);return Carousel;}(_commons.BaseComponent);Carousel.propTypes={pageWidth:_propTypes2.default.number,initialPage:_propTypes2.default.number,loop:_propTypes2.default.bool};Carousel.defaultProps={pageWidth:_helpers.Constants.screenWidth,initialPage:0};exports.default=Carousel;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{
flex:1},

scrollStrip:{
flexDirection:'row',
flex:1,
borderBottomWidth:1}});


}