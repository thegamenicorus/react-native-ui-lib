Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _commons=require('../../commons');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var





View=function(_BaseComponent){_inherits(View,_BaseComponent);function View(){_classCallCheck(this,View);return _possibleConstructorReturn(this,(View.__proto__||Object.getPrototypeOf(View)).apply(this,arguments));}_createClass(View,[{key:'generateStyles',value:function generateStyles()







{
this.styles=createStyles(this.props);
}},{key:'setNativeProps',value:function setNativeProps(

nativeProps){
this._root.setNativeProps(nativeProps);
}},{key:'render',value:function render()

{var _this2=this;var _state=
this.state,backgroundColor=_state.backgroundColor,borderRadius=_state.borderRadius,paddings=_state.paddings,margins=_state.margins,alignments=_state.alignments,flexStyle=_state.flexStyle;var _props=
this.props,style=_props.style,left=_props.left,top=_props.top,right=_props.right,bottom=_props.bottom,propsFlex=_props.flex,others=_objectWithoutProperties(_props,['style','left','top','right','bottom','flex']);

return(
_react2.default.createElement(_reactNative.View,_extends({},
others,{
style:[
this.styles.container,
backgroundColor&&{backgroundColor:backgroundColor},
borderRadius&&{borderRadius:borderRadius},
flexStyle,
paddings,
margins,
alignments,
style],

ref:function ref(r){return _this2.view=r;}}),

this.props.children));


}},{key:'measure',value:function measure()

{var _view;
(_view=this.view).measure.apply(_view,arguments);
}},{key:'measureInWindow',value:function measureInWindow()

{var _view2;
(_view2=this.view).measureInWindow.apply(_view2,arguments);
}}]);return View;}(_commons.BaseComponent);View.displayName='View';View.propTypes=_extends({},_reactNative.ViewPropTypes,_commons.BaseComponent.propTypes);exports.default=View;


function createStyles(){
return _reactNative.StyleSheet.create({
container:{}});

}