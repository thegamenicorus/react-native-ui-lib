Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _helpers=require('../helpers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Spacings=function(){function Spacings(){_classCallCheck(this,Spacings);this.
s1=_helpers.Constants.isIOS?3:4;this.
s2=_helpers.Constants.isIOS?6:8;this.
s3=_helpers.Constants.isIOS?9:12;this.
s4=_helpers.Constants.isIOS?12:16;this.
s5=_helpers.Constants.isIOS?15:20;this.
s6=_helpers.Constants.isIOS?18:24;this.
s7=_helpers.Constants.isIOS?21:28;this.
s8=_helpers.Constants.isIOS?24:32;this.
s9=_helpers.Constants.isIOS?27:36;this.
s10=_helpers.Constants.isIOS?30:40;}_createClass(Spacings,[{key:'loadSpacings',value:function loadSpacings(

spacings){var _this=this;
_lodash2.default.forEach(spacings,function(value,key){
_this[key]=value;
});
}}]);return Spacings;}();exports.default=


new Spacings();