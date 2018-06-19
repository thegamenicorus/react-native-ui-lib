var _index=require('../index');var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('TabBar',function(){
describe('calcIndicatorWidth',function(){
it('should equale 25%',function(){
var uut=new _index2.default({});
uut.state={
widths:[80,80,80,80],
selectedIndex:1};

uut.childrenCount=4;
uut.contentWidth=320;
jest.spyOn(uut,'calcIndicatorWidth');
expect(uut.calcIndicatorWidth()).toEqual('25%');
});

it('should equale 50%',function(){
var uut=new _index2.default({});
uut.state={
widths:[150,150,300],
selectedIndex:2};

uut.childrenCount=2;
uut.contentWidth=600;
jest.spyOn(uut,'calcIndicatorWidth');
expect(uut.calcIndicatorWidth()).toEqual('50%');
});
});
});