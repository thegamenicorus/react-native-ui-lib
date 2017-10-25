Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _style=require('../../style');
var _commons=require('../../commons');
var _view=require('../view');var _view2=_interopRequireDefault(_view);
var _touchableOpacity=require('../touchableOpacity');var _touchableOpacity2=_interopRequireDefault(_touchableOpacity);
var _MultipleShadow=require('../MultipleShadow');var _MultipleShadow2=_interopRequireDefault(_MultipleShadow);

var _CardSection=require('./CardSection');var _CardSection2=_interopRequireDefault(_CardSection);
var _CardItem=require('./CardItem');var _CardItem2=_interopRequireDefault(_CardItem);
var _CardImage=require('./CardImage');var _CardImage2=_interopRequireDefault(_CardImage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





Card=function(_BaseComponent){_inherits(Card,_BaseComponent);function Card(){_classCallCheck(this,Card);return _possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).apply(this,arguments));}_createClass(Card,[{key:'generateStyles',value:function generateStyles()








































{
this.styles=createStyles(this.props);
}},{key:'calcImagePosition',value:function calcImagePosition(


childIndex){var _props=
this.props,row=_props.row,children=_props.children;
var childrenCount=_react2.default.Children.count(children);
var position=[];

if(childIndex===0){
position.push(row?'left':'top');
}

if(childIndex===childrenCount-1){
position.push(row?'right':'bottom');
}

return position;
}},{key:'renderChildren',value:function renderChildren()

{var _this2=this;var
borderRadius=this.props.borderRadius;
var children=_react2.default.Children.map(this.props.children,function(child,index){
if(_lodash2.default.get(child,'type')===_CardImage2.default){
var position=_this2.calcImagePosition(index);
return _react2.default.cloneElement(child,{key:index,position:position,borderRadius:borderRadius});
}

return child;
});
return children;
}},{key:'render',value:function render()

{var _getThemeProps=
this.getThemeProps(),onPress=_getThemeProps.onPress,style=_getThemeProps.style,containerStyle=_getThemeProps.containerStyle,enableShadow=_getThemeProps.enableShadow,borderRadius=_getThemeProps.borderRadius,testID=_getThemeProps.testID,others=_objectWithoutProperties(_getThemeProps,['onPress','style','containerStyle','enableShadow','borderRadius','testID']);
var multipleShadowProps=_MultipleShadow2.default.extractOwnProps(this.props);
var Container=onPress?_touchableOpacity2.default:_view2.default;
var ShadowContainer=enableShadow?_MultipleShadow2.default:_view2.default;
return(
_react2.default.createElement(Container,_extends({
style:[this.styles.container,{borderRadius:borderRadius},containerStyle],
onPress:onPress,
delayPressIn:10,
activeOpacity:0.6,
testID:testID},
others),

_react2.default.createElement(ShadowContainer,_extends({},multipleShadowProps,{style:{borderRadius:borderRadius}}),
_react2.default.createElement(_view2.default,{style:[this.styles.innerContainer,{borderRadius:borderRadius},style]},
this.renderChildren()))));




}}]);return Card;}(_commons.BaseComponent);Card.displayName='Card';Card.propTypes=_extends({},_MultipleShadow2.default.propTypes,{width:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),height:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),borderRadius:_propTypes2.default.number,onPress:_propTypes2.default.func,enableShadow:_propTypes2.default.bool,containerStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),testID:_propTypes2.default.string});Card.defaultProps={borderRadius:_style.BorderRadiuses.br40,enableShadow:true};


function createStyles(_ref){var width=_ref.width,height=_ref.height,enableShadow=_ref.enableShadow;

return _reactNative.StyleSheet.create({
container:{
width:width,
height:height,

overflow:'visible',

elevation:enableShadow?2:0},

innerContainer:{
backgroundColor:_style.Colors.white,

overflow:'hidden',
flexGrow:1}});


}

Card.Section=_CardSection2.default;
Card.Item=_CardItem2.default;
Card.Image=_CardImage2.default;exports.default=

Card;