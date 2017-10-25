Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var icons=require('./icons');
var emojis=require('./emojis');var

Assets=function(){function Assets(){_classCallCheck(this,Assets);this.
icons=icons;this.
emojis=emojis;}_createClass(Assets,[{key:'loadAssetsGroup',value:function loadAssetsGroup(

groupName,assets){var _this=this;
if(!_lodash2.default.isString(groupName)){
throw new Error('group name should be a string');
}

if(!_lodash2.default.isPlainObject(assets)){
throw new Error('assets should be a hash map');
}

_lodash2.default.forEach(assets,function(value,key){
_lodash2.default.set(_this,groupName+'.'+key,value);
});
}}]);return Assets;}();exports.default=


new Assets();