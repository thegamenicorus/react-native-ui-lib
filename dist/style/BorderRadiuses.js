Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _helpers=require('../helpers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

BorderRadiuses=function(){function BorderRadiuses(){_classCallCheck(this,BorderRadiuses);this.
br0=_helpers.Constants.isIOS?0:0;this.
br10=_helpers.Constants.isIOS?3:2;this.
br20=6;this.
br30=_helpers.Constants.isIOS?9:8;this.
br40=12;this.
br50=_helpers.Constants.isIOS?15:16;this.
br60=20;this.
br100=999;}_createClass(BorderRadiuses,[{key:'getKeysPattern',value:function getKeysPattern()

{
return new RegExp(
_lodash2.default.chain(this).
keys().
map(function(key){return[''+key];}).
flatten().
join('|').
value());

}}]);return BorderRadiuses;}();exports.default=


new BorderRadiuses();