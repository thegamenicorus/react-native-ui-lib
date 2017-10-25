var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _index=require('../index');var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('ConnectionStatusBar',function(){
var uut=void 0;
beforeEach(function(){
uut=new _index2.default({});
});

describe('registerGlobalOnConnectionLost',function(){
it('should register a callback for when connection is lost',function(){
var callback=jest.fn();
expect(_index2.default.onConnectionLost).toBe(undefined);
_index2.default.registerGlobalOnConnectionLost(callback);
expect(_index2.default.onConnectionLost).toBe(callback);
_index2.default.unregisterGlobalOnConnectionLost();
expect(_index2.default.onConnectionLost).toBe(undefined);
});

it('should call onConnectionLost callback when connection state changed from connected to disconnected',function(){
var callback=jest.fn();
_index2.default.registerGlobalOnConnectionLost(callback);
_lodash2.default.set(uut,'state.isConnected',true);

uut.onConnectionChange('none');

expect(callback).toHaveBeenCalled();
});

it('should not call onConnectionLost callback when connection state changed from disconnected to connected',function(){
var callback=jest.fn();
_index2.default.registerGlobalOnConnectionLost(callback);
_lodash2.default.set(uut,'state.isConnected',false);

uut.onConnectionChange('wifi');

expect(callback).not.toHaveBeenCalled();
});
});
});