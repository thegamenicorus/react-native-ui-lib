Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _colorsPalette=require('./colorsPalette');var _colorsPalette2=_interopRequireDefault(_colorsPalette);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Colors=function(){function Colors(){_classCallCheck(this,Colors);}_createClass(Colors,[{key:'loadColors',value:function loadColors(





colors){var _this=this;
_lodash2.default.forEach(colors,function(value,key){
_this[key]=value;
});
}},{key:'rgba',value:function rgba(









p1,p2,p3,p4){
var hex=void 0;
var opacity=void 0;
var red=void 0;
var green=void 0;
var blue=void 0;

if(arguments.length===2){
hex=p1;
opacity=p2;

hex=validateHex(hex);
red=parseInt(hex.substring(0,2),16);
green=parseInt(hex.substring(2,4),16);
blue=parseInt(hex.substring(4,6),16);
}else if(arguments.length===4){
red=validateRGB(p1);
green=validateRGB(p2);
blue=validateRGB(p3);
opacity=p4;
}else{
throw new Error('rgba can work with either 2 or 4 arguments');
}

return'rgba('+red+', '+green+', '+blue+', '+opacity+')';
}},{key:'getBackgroundKeysPattern',value:function getBackgroundKeysPattern()

{
return new RegExp(
_lodash2.default.chain(this).
keys().
map(function(key){return['bg-'+key,'background-'+key];}).
flatten().
join('|').
value());

}}]);return Colors;}();


function validateRGB(value){
if(isNaN(value)||value>255||value<0){
throw new Error(value+' is invalid rgb code, please use number between 0-255');
}

return value;
}

function validateHex(value){
if(!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)){
throw new Error(value+' is invalid hex color');
}
return value.replace('#','');
}
var colorObject=new Colors();
colorObject.loadColors(_colorsPalette2.default);exports.default=
colorObject;