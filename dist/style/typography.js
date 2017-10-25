Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _helpers=require('../helpers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Typography=function(){function Typography(){_classCallCheck(this,Typography);this.
text10={
fontSize:64,
fontWeight:'100',
lineHeight:Math.floor(64*1.4),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-thin':undefined};this.

text20={
fontSize:50,
fontWeight:'100',
lineHeight:Math.floor(50*1.4),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-thin':undefined};this.

text30={
fontSize:36,
fontWeight:_helpers.Constants.isAndroid?'100':'200',
lineHeight:Math.floor(36*1.3),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-thin':undefined};this.

text40={
fontSize:28,
fontWeight:'300',
lineHeight:_helpers.Constants.isAndroid?Math.floor(28*1.4):Math.floor(28*1.21),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};this.

text50={
fontSize:_helpers.Constants.isAndroid?24:22,
fontWeight:'300',
lineHeight:_helpers.Constants.isAndroid?Math.floor(24*1.17):Math.floor(22*1.27),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};this.

text60={
fontSize:20,
fontWeight:'300',
lineHeight:Math.floor(20*1.2),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};this.

text70={
fontSize:_helpers.Constants.isAndroid?16:17,
fontWeight:'300',
lineHeight:_helpers.Constants.isAndroid?Math.floor(16*1.38):Math.floor(17*1.29),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};this.

text80={
fontSize:_helpers.Constants.isAndroid?14:15,
fontWeight:'300',
lineHeight:_helpers.Constants.isAndroid?Math.floor(14*1.33):Math.floor(15*1.33),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};this.

text90={
fontSize:_helpers.Constants.isAndroid?12:13,
fontWeight:'300',
lineHeight:_helpers.Constants.isAndroid?Math.floor(12*1.33):Math.floor(13*1.38),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};this.

text100={
fontSize:_helpers.Constants.isAndroid?10:11,
fontWeight:'300',
lineHeight:_helpers.Constants.isAndroid?Math.floor(10*1.18):Math.floor(11*1.18),
fontFamily:_helpers.Constants.isAndroid?'sans-serif-light':undefined};}_createClass(Typography,[{key:'loadTypographies',value:function loadTypographies(








typographies){var _this=this;
_lodash2.default.forEach(typographies,function(value,key){
_this[key]=value;
});
}},{key:'getKeysPattern',value:function getKeysPattern()

{
return new RegExp(_lodash2.default.chain(this).
keys().
map(function(key){return[''+key];}).
flatten().
join('|').
value());
}}]);return Typography;}();exports.default=


new Typography();