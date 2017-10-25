var _index=require('../index');var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('TabBar',function(){
it('should calcIndicatorWidth return appropriate size according to TabBarItems count',function(){
var uut=new _index2.default({});
expect(uut.calcIndicatorWidth()).toBe('0%');
uut=new _index2.default({children:[1]});
expect(uut.calcIndicatorWidth()).toBe('100%');
uut=new _index2.default({children:[1,2]});
expect(uut.calcIndicatorWidth()).toBe('50%');
uut=new _index2.default({children:[1,2,3]});
expect(uut.calcIndicatorWidth()).toBe('33%');
uut=new _index2.default({children:[1,2,3,4]});
expect(uut.calcIndicatorWidth()).toBe('25%');
});
});