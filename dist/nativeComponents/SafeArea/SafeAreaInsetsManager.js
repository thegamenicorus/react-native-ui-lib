Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var SafeAreaInsetsCache=null;

var NativeSafeAreaManager=_reactNative.NativeModules.SafeAreaManager;var

SafeAreaInsetsManager=function(){
function SafeAreaInsetsManager(){_classCallCheck(this,SafeAreaInsetsManager);
this._defaultInsets={top:0,left:0,bottom:0,right:0};
this._safeAreaInsets=this._defaultInsets;
this._safeAreaChangedDelegates=[];

this.addSafeAreaChangedListener();
}_createClass(SafeAreaInsetsManager,[{key:'addSafeAreaChangedListener',value:function addSafeAreaChangedListener()

{var _this=this;
if(!NativeSafeAreaManager){
return;
}
var NativeSafeAreaEvents=new _reactNative.NativeEventEmitter(NativeSafeAreaManager);
NativeSafeAreaEvents.addListener('SafeAreaInsetsDidChangeEvent',function(safeAreaInsets){
SafeAreaInsetsCache=safeAreaInsets;
_this._safeAreaInsets=SafeAreaInsetsCache;
_lodash2.default.forEach(_this._safeAreaChangedDelegates,function(delegate){
if(delegate.onSafeAreaInsetsDidChangeEvent){
delegate.onSafeAreaInsetsDidChangeEvent(_this._safeAreaInsets);
}else{
console.warn('ERROR','SafeAreaInsetsManager','safe area changed delegate was added, but it does not implement the onSafeAreaInsetsDidChangeEvent method');
}
});
});
}},{key:'_updateInsets',value:function _updateInsets(){return regeneratorRuntime.async(function _updateInsets$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(


NativeSafeAreaManager&&SafeAreaInsetsCache===null)){_context.next=5;break;}_context.next=3;return regeneratorRuntime.awrap(
NativeSafeAreaManager.getSafeAreaInsets());case 3:SafeAreaInsetsCache=_context.sent;
this._safeAreaInsets=SafeAreaInsetsCache;case 5:case'end':return _context.stop();}}},null,this);}},{key:'getSafeAreaInsets',value:function getSafeAreaInsets(){return regeneratorRuntime.async(function getSafeAreaInsets$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(




this._updateInsets());case 2:return _context2.abrupt('return',
this._safeAreaInsets);case 3:case'end':return _context2.stop();}}},null,this);}},{key:'addSafeAreaChangedDelegate',value:function addSafeAreaChangedDelegate(


delegate){
this._safeAreaChangedDelegates.push(delegate);
}},{key:'removeSafeAreaChangedDelegate',value:function removeSafeAreaChangedDelegate(

delegateToRemove){
_lodash2.default.remove(this._safeAreaChangedDelegates,function(currentDelegate){
return currentDelegate===delegateToRemove;
});
}},{key:'defaultInsets',get:function get()

{
return this._defaultInsets;
}}]);return SafeAreaInsetsManager;}();exports.default=


new SafeAreaInsetsManager();