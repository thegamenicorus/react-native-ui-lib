Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _helpers=require('../../helpers');
var _CarouselPresenter=require('./CarouselPresenter');var presenter=_interopRequireWildcard(_CarouselPresenter);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}


var OFFSET_PIXEL_CORRECTION=5;var




Carousel=function(_BaseComponent){_inherits(Carousel,_BaseComponent);





























function Carousel(props){_classCallCheck(this,Carousel);var _this=_possibleConstructorReturn(this,(Carousel.__proto__||Object.getPrototypeOf(Carousel)).call(this,
props));
_this.state={
currentPage:props.initialPage,
currentStandingPage:props.initialPage};


_this.onScroll=_this.onScroll.bind(_this);
_this.updateOffset=_this.updateOffset.bind(_this);return _this;
}_createClass(Carousel,[{key:'generateStyles',value:function generateStyles()

{
this.styles=createStyles(this.props);
}},{key:'onScroll',value:function onScroll(





event){var
loop=this.props.loop;
var offsetX=event.nativeEvent.contentOffset.x;
if(offsetX>=0){var
currentStandingPage=this.state.currentStandingPage;
var newPage=presenter.calcPageIndex(offsetX,this.props);

this.setState({currentPage:newPage});


if(offsetX%this.pageWidth<=OFFSET_PIXEL_CORRECTION){
this.setState({currentStandingPage:newPage});
if(currentStandingPage!==newPage){
_lodash2.default.invoke(this.props,'onChangePage',newPage,currentStandingPage);
}
}
}

if(loop&&presenter.isOutOfBounds(offsetX,this.props)){
this.updateOffset();
}

_lodash2.default.invoke(this.props,'onScroll',event);
}},{key:'updateOffset',value:function updateOffset()

{var animated=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;
var x=presenter.calcOffset(this.props,this.state);
this.carousel.scrollTo({x:x,animated:animated});
}},{key:'componentDidMount',value:function componentDidMount()

{var _this2=this;
setTimeout(function(){
_this2.updateOffset();
},0);
}},{key:'cloneChild',value:function cloneChild(

child){
if(!child.key){
return child;
}
return _react2.default.cloneElement(child,{
key:child.key+'-clone'});

}},{key:'renderChildren',value:function renderChildren()

{var _props=
this.props,children=_props.children,loop=_props.loop;
var length=presenter.getChildrenLength(this.props);

var childrenArray=_react2.default.Children.toArray(children);
if(loop){
childrenArray.unshift(this.cloneChild(children[length-1]));
childrenArray.push(this.cloneChild(children[0]));
}

return childrenArray;
}},{key:'render',value:function render()

{var _this3=this;var
containerStyle=this.props.containerStyle;
return(
_react2.default.createElement(_view2.default,{flex:true,style:containerStyle},
_react2.default.createElement(_reactNative.ScrollView,{
ref:function ref(scrollView){
_this3.carousel=scrollView;
},
horizontal:true,
showsHorizontalScrollIndicator:false,
pagingEnabled:true,
onScroll:this.onScroll,
scrollEventThrottle:200},

this.renderChildren())));



}},{key:'goToPage',value:function goToPage(

pageIndex){var _this4=this;var animated=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;
this.setState(
{
currentPage:pageIndex},

function(){return _this4.updateOffset(animated);});

}},{key:'pageWidth',get:function get(){return Math.floor(this.props.pageWidth);}}]);return Carousel;}(_commons.BaseComponent);Carousel.displayName='Carousel';Carousel.propTypes={initialPage:_propTypes2.default.number,pageWidth:_propTypes2.default.number,onChangePage:_propTypes2.default.func,onScroll:_propTypes2.default.func,containerStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array])};Carousel.defaultProps={initialPage:0,pageWidth:_helpers.Constants.screenWidth};exports.default=Carousel;


function createStyles(){
return _reactNative.StyleSheet.create({});




}