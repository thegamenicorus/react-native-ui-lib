Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var NativeHighlighterView=(0,_reactNative.requireNativeComponent)('HighlighterView',null);
var DefaultOverlayColor='rgba(0, 0, 0, 0.5)';

var HighlighterOverlayView=function HighlighterOverlayView(props){var

overlayColor=












props.overlayColor,borderRadius=props.borderRadius,strokeColor=props.strokeColor,strokeWidth=props.strokeWidth,visible=props.visible,_onRequestClose=props.onRequestClose,highlightFrame=props.highlightFrame,style=props.style,children=props.children,highlightViewTag=props.highlightViewTag,highlightViewTagParams=props.highlightViewTagParams,minimumRectSize=props.minimumRectSize,innerPadding=props.innerPadding;

var overlayColorToUse=overlayColor||DefaultOverlayColor;
var strokeColorToUse=strokeColor;
if(_reactNative.Platform.OS==='android'){
overlayColorToUse=(0,_reactNative.processColor)(overlayColorToUse);
strokeColorToUse=(0,_reactNative.processColor)(strokeColorToUse);
}

return(
_react2.default.createElement(_reactNative.Modal,{
visible:!!visible,
animationType:'fade',
transparent:true,
onRequestClose:function onRequestClose(){return _onRequestClose&&_onRequestClose();}},

_react2.default.createElement(NativeHighlighterView,{
highlightFrame:highlightFrame,
style:[style,_extends({},_reactNative.StyleSheet.absoluteFillObject,{backgroundColor:'transparent'})],
overlayColor:overlayColorToUse,
borderRadius:borderRadius,
strokeColor:strokeColorToUse,
strokeWidth:strokeWidth,
highlightViewTag:highlightViewTag,
highlightViewTagParams:highlightViewTagParams,
minimumRectSize:minimumRectSize,
innerPadding:innerPadding}),

children));


};

HighlighterOverlayView.propTypes={
overlayColor:_propTypes2.default.string,
borderRadius:_propTypes2.default.number,
strokeColor:_propTypes2.default.string,
strokeWidth:_propTypes2.default.number,
visible:_propTypes2.default.bool.isRequired,
onRequestClose:_propTypes2.default.func,
highlightFrame:_propTypes2.default.shape({
x:_propTypes2.default.number,
y:_propTypes2.default.number,
width:_propTypes2.default.number,
height:_propTypes2.default.number}),

style:_propTypes2.default.oneOfType([_propTypes2.default.object,_propTypes2.default.number,_propTypes2.default.array]),
highlightViewTag:_propTypes2.default.number,
children:_propTypes2.default.oneOfType([
_propTypes2.default.arrayOf(_propTypes2.default.node),
_propTypes2.default.node]),

highlightViewTagParams:_propTypes2.default.shape({
padding:_propTypes2.default.oneOfType([
_propTypes2.default.number,
_propTypes2.default.shape({
top:_propTypes2.default.number,
left:_propTypes2.default.number,
bottom:_propTypes2.default.number,
right:_propTypes2.default.number})]),

offset:_propTypes2.default.shape({
x:_propTypes2.default.number,
y:_propTypes2.default.number})}),


minimumRectSize:_propTypes2.default.shape({
width:_propTypes2.default.number,
height:_propTypes2.default.number}),

innerPadding:_propTypes2.default.number};exports.default=


HighlighterOverlayView;