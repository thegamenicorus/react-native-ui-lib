Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _hoistNonReactStatics=require('hoist-non-react-statics');var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _commons=require('../../commons');
var _style=require('../../style');
var _assets=require('../../assets');var _assets2=_interopRequireDefault(_assets);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




Image=function(_BaseComponent){_inherits(Image,_BaseComponent);





















function Image(props){_classCallCheck(this,Image);var _this=_possibleConstructorReturn(this,(Image.__proto__||Object.getPrototypeOf(Image)).call(this,
props));

_this.sourceTransformer=props.sourceTransformer||_lodash2.default.get(_style.ThemeManager.components,'Image.sourceTransformer');return _this;
}_createClass(Image,[{key:'getImageSource',value:function getImageSource()

{var _props=
this.props,assetName=_props.assetName,assetGroup=_props.assetGroup;
if(!_lodash2.default.isUndefined(assetName)){
return _lodash2.default.get(_assets2.default,assetGroup+'.'+assetName);
}

if(this.sourceTransformer){
return this.sourceTransformer(this.props);
}var

source=this.props.source;
if(_lodash2.default.get(source,'uri')===null){
return _extends({},source,{uri:undefined});
}

return source;
}},{key:'render',value:function render()

{
var source=this.getImageSource();
return _react2.default.createElement(_reactNative.Image,_extends({},this.props,{source:source}));
}}]);return Image;}(_commons.BaseComponent);Image.displayName='Image';Image.propTypes={sourceTransformer:_propTypes2.default.func,assetName:_propTypes2.default.string,assetGroup:_propTypes2.default.string};Image.defaultProps={assetGroup:'icons'};


(0,_hoistNonReactStatics2.default)(Image,_reactNative.Image);exports.default=
Image;