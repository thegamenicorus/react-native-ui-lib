Object.defineProperty(exports,"__esModule",{value:true});exports.





extractComponentInfo=extractComponentInfo;exports.






generateSnippet=generateSnippet;var _react=require('react');var _react2=_interopRequireDefault(_react);var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var TAB='    ';var LINE_BREAK='\n';function extractComponentInfo(instance){var componentName=instance.constructor.displayName;var defaultProps=instance.constructor.defaultProps||{};var props=instance.props||{};return{componentName:componentName,defaultProps:defaultProps,props:props};}function generateSnippet(_ref){var componentName=_ref.componentName,defaultProps=_ref.defaultProps,props=_ref.props;
var snippet='<'+componentName;

_lodash2.default.forEach(props,function(value,key){
if(key==='children'){
return;
}
var formattedValue='{'+value+'}';
if(_lodash2.default.isObject(value)){
formattedValue='{'+JSON.stringify(value)+'}';
}else if(_lodash2.default.isString(value)){
formattedValue='"'+value+'"';
}else if(_lodash2.default.isBoolean(value)&&value===true){
formattedValue='';
}

var hasEmptyValue=_lodash2.default.isUndefined(value)||_lodash2.default.isObject(value)&&_lodash2.default.isEmpty(value);
var hasDefaultValue=value==defaultProps[key];
if(!hasEmptyValue&&!hasDefaultValue){
snippet+=''+LINE_BREAK+TAB+key;
if(formattedValue){
snippet+='='+formattedValue;
}
}
});

if(props.children){
var childrenSnippets=_react2.default.Children.map(props.children,function(child){
if(_lodash2.default.get(child,'type.displayName')){
var childSnippet=TAB+generateSnippet({
componentName:child.type.displayName,
props:child.props||{},
defaultProps:child.type.defaultProps||{}});

return childSnippet;
}
if(typeof child==='string'){
return child;
}
});
snippet+='>'+LINE_BREAK+childrenSnippets.join(LINE_BREAK)+LINE_BREAK+'</'+componentName+'>';
}else{
snippet+='/>';
}
return snippet;
}