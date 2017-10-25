var _TextInput=require('../TextInput');var _TextInput2=_interopRequireDefault(_TextInput);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('TextInput',function(){
it('should shouldFakePlaceholder',function(){
var uut=new _TextInput2.default({});
expect(uut.shouldFakePlaceholder()).toBe(false);

uut=new _TextInput2.default({floatingPlaceholder:true});
expect(uut.shouldFakePlaceholder()).toBe(true);

uut=new _TextInput2.default({floatingPlaceholder:true,centered:true});
expect(uut.shouldFakePlaceholder()).toBe(false);
});
});