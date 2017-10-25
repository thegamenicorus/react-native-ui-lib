Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _image=require('../image');var _image2=_interopRequireDefault(_image);
var _style=require('../../style');
var _commons=require('../../commons');
var _CardPresenter=require('./CardPresenter');var CardPresenter=_interopRequireWildcard(_CardPresenter);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





CardImage=function(_BaseComponent){_inherits(CardImage,_BaseComponent);function CardImage(){_classCallCheck(this,CardImage);return _possibleConstructorReturn(this,(CardImage.__proto__||Object.getPrototypeOf(CardImage)).apply(this,arguments));}_createClass(CardImage,[{key:'generateStyles',value:function generateStyles()

































{
this.styles=createStyles(this.props);
}},{key:'render',value:function render()

{var _props=
this.props,imageSource=_props.imageSource,style=_props.style,position=_props.position,borderRadius=_props.borderRadius;
var borderStyle=CardPresenter.generateBorderRadiusStyle({position:position,borderRadius:borderRadius});
if(imageSource){
return(
_react2.default.createElement(_reactNative.View,{style:[this.styles.container,borderStyle,style]},
_react2.default.createElement(_image2.default,{source:imageSource,style:[this.styles.image,borderStyle]})));


}

return null;
}}]);return CardImage;}(_commons.BaseComponent);CardImage.displayName='CardImage';CardImage.propTypes={imageSource:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),width:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),height:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.string]),position:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.arrayOf(_propTypes2.default.string)]),borderRadius:_propTypes2.default.number,testID:_propTypes2.default.string};CardImage.defaultProps={borderRadius:_style.BorderRadiuses.br40};exports.default=CardImage;


function createStyles(_ref){var width=_ref.width,height=_ref.height,position=_ref.position;var _CardPresenter$extrac=
CardPresenter.extractPositionValues(position),top=_CardPresenter$extrac.top,left=_CardPresenter$extrac.left,right=_CardPresenter$extrac.right,bottom=_CardPresenter$extrac.bottom;
return _reactNative.StyleSheet.create({
container:{
height:left||right?undefined:height,
width:top||bottom?undefined:width},

image:{
width:null,
height:null,
flex:1,
resizeMode:'cover'}});


}