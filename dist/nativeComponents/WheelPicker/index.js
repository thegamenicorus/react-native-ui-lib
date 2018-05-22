Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _helpers=require('../../helpers');

var _WheelPickerItem=require('./WheelPickerItem');var _WheelPickerItem2=_interopRequireDefault(_WheelPickerItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var WheelPickerNative=(0,_reactNative.requireNativeComponent)('WheelPicker',null);var

WheelPicker=function(_Component){_inherits(WheelPicker,_Component);





















function WheelPicker(props){_classCallCheck(this,WheelPicker);var _this=_possibleConstructorReturn(this,(WheelPicker.__proto__||Object.getPrototypeOf(WheelPicker)).call(this,
props));_this.



state=_extends({},
_this.stateFromProps(_this.props));_this.onValueChange=_this.onValueChange.bind(_this);return _this;}_createClass(WheelPicker,[{key:'UNSAFE_componentWillReceiveProps',value:function UNSAFE_componentWillReceiveProps(


nextProps){
this.setState(this.stateFromProps(nextProps));
}},{key:'stateFromProps',value:function stateFromProps(


props){
var selectedIndex=0;
var items=[];
_react2.default.Children.toArray(props.children).forEach(function(child,index){
if(child.props.value===props.selectedValue){
selectedIndex=index;
}
items.push({
value:child.props.value,
label:child.props.label});

});
var orderedItems=[].concat(_toConsumableArray(items.slice(selectedIndex)),_toConsumableArray(items.slice(0,selectedIndex)));
return{selectedIndex:selectedIndex,items:orderedItems};
}},{key:'extractLabelsFromItems',value:function extractLabelsFromItems()

{
return this.state.items.map(function(item){return item.label;});
}},{key:'onValueChange',value:function onValueChange(

event){var
onValueChange=this.props.onValueChange;
if(onValueChange){var
items=this.state.items;
onValueChange(items[event.nativeEvent.itemIndex].value,event.nativeEvent.itemIndex);
}
}},{key:'render',value:function render()

{var
style=this.props.style;
return(
_react2.default.createElement(WheelPickerNative,{
data:this.extractLabelsFromItems(),
onChange:this.onValueChange,
style:[styles.container,style]}));


}}]);return WheelPicker;}(_react.Component);WheelPicker.displayName='WheelPicker';WheelPicker.propTypes={selectedValue:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.number]),onValueChange:_propTypes2.default.func,style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number]),itemStyle:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number])};


var styles=_reactNative.StyleSheet.create({
container:{
height:200}});



WheelPicker.Item=_WheelPickerItem2.default;exports.default=

_helpers.Constants.isAndroid?WheelPicker:_reactNative.Picker;