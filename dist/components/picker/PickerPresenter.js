Object.defineProperty(exports,"__esModule",{value:true});exports.

isItemSelected=isItemSelected;exports.










getItemValue=getItemValue;var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function isItemSelected(childValue,selectedValue){var isSelected=false;if(Array.isArray(selectedValue)){isSelected=_lodash2.default.includes(selectedValue,childValue);}else{isSelected=childValue===selectedValue;}return isSelected;}function getItemValue(props){
if(_lodash2.default.isArray(props.value)){
return props.getItemValue?
_lodash2.default.map(props.value,function(item){return props.getItemValue(item);}):
_lodash2.default.map(props.value,'value');
}else if(!_lodash2.default.isObject(props.value)){
return props.value;
}
return _lodash2.default.invoke(props,'getItemValue',props.value)||_lodash2.default.get(props.value,'value');
}