Object.defineProperty(exports,"__esModule",{value:true});exports.


extractPositionValues=extractPositionValues;exports.








generateBorderRadiusStyle=generateBorderRadiusStyle;var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);var _helpers=require('../../helpers');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function extractPositionValues(position){var top=_lodash2.default.includes(position,'top');var left=_lodash2.default.includes(position,'left');var right=_lodash2.default.includes(position,'right');var bottom=_lodash2.default.includes(position,'bottom');return{top:top,left:left,right:right,bottom:bottom};}function generateBorderRadiusStyle(_ref){var position=_ref.position,borderRadius=_ref.borderRadius;var _extractPositionValue=
extractPositionValues(position),top=_extractPositionValue.top,left=_extractPositionValue.left,right=_extractPositionValue.right,bottom=_extractPositionValue.bottom;

var borderRadiusStyle={};
if(_helpers.Constants.isAndroid){
borderRadiusStyle.borderTopLeftRadius=top||left?borderRadius:undefined;
borderRadiusStyle.borderTopRightRadius=top||right?borderRadius:undefined;
borderRadiusStyle.borderBottomLeftRadius=bottom||left?borderRadius:undefined;
borderRadiusStyle.borderBottomRightRadius=bottom||right?borderRadius:undefined;
}

return borderRadiusStyle;
}