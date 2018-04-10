var _TextInput=require('../TextInput');var _TextInput2=_interopRequireDefault(_TextInput);
var _style=require('../../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('TextInput',function(){


describe('shouldFakePlaceholder',function(){
it('should shouldFakePlaceholder',function(){
var uut=new _TextInput2.default({});
expect(uut.shouldFakePlaceholder()).toBe(false);

uut=new _TextInput2.default({floatingPlaceholder:true});
expect(uut.shouldFakePlaceholder()).toBe(true);

uut=new _TextInput2.default({floatingPlaceholder:true,centered:true});
expect(uut.shouldFakePlaceholder()).toBe(false);
});
});

describe('getStateColor',function(){
it('should return dark70 when blur (inactive)',function(){
var uut=new _TextInput2.default({});
expect(uut.getStateColor(undefined,true)).toEqual(_style.Colors.dark70);
});
it('should return red30 when error',function(){
var uut=new _TextInput2.default({error:'test error'});
expect(uut.getStateColor(undefined,true)).toEqual(_style.Colors.red30);
});
it('should return blue30 when focused',function(){
var uut=new _TextInput2.default({});
uut.state={focused:true};
expect(uut.getStateColor(undefined,true)).toEqual(_style.Colors.blue30);
});

var underlines={default:_style.Colors.cyan40,focus:_style.Colors.orange60,error:_style.Colors.purple50};
it('should return cyan40 when passing underlineColor and when blur (inactive)',function(){
var uut=new _TextInput2.default({underlineColor:underlines});
expect(uut.getStateColor(uut.props.underlineColor,true)).toEqual(_style.Colors.cyan40);
});
it('should return purple50 when passing underlineColor and when error',function(){
var uut=new _TextInput2.default({underlineColor:underlines,error:'test error'});
expect(uut.getStateColor(uut.props.underlineColor,true)).toEqual(_style.Colors.purple50);
});
it('should return orange60 when passing underlineColor and when focused',function(){
var uut=new _TextInput2.default({underlineColor:underlines});
uut.state={focused:true};
expect(uut.getStateColor(uut.props.underlineColor,true)).toEqual(_style.Colors.orange60);
});
});

describe('getCharCount',function(){
it('should return 5 when value is "inbal"',function(){
var uut=new _TextInput2.default({value:'inbal'});
expect(uut.getCharCount()).toBe(5);
});
});

describe('isCounterLimit',function(){
it('should return true when character count = 10 and maxLength = 10',function(){
var uut=new _TextInput2.default({maxLength:10});
jest.spyOn(uut,'getCharCount').mockImplementation(function(){return 10;});
expect(uut.isCounterLimit()).toBe(true);
expect(uut.getCharCount).toHaveBeenCalledTimes(1);
});
it('should return false when character count = 5 and maxLength = 10',function(){
var uut=new _TextInput2.default({maxLength:10});
jest.spyOn(uut,'getCharCount').mockImplementation(function(){return 5;});
expect(uut.isCounterLimit()).toBe(false);
expect(uut.getCharCount).toHaveBeenCalledTimes(1);
});
});
});