var _index=require('../index');var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var countries=[
{label:'Israel',value:'IL'},
{label:'United States',value:'US'},
{label:'Germany',value:'DE'},
{label:'Italy',value:'IT'},
{label:'Spain',value:'ES '}];


describe('Picker',function(){
describe('getLabel',function(){
it('should get label of a simple item',function(){
var uut=new _index2.default({value:countries[2]});
expect(uut.getLabel()).toEqual(countries[2].label);
uut=new _index2.default({value:countries[3]});
expect(uut.getLabel()).toEqual(countries[3].label);
});

it('should get label out of an array of items',function(){
var uut=new _index2.default({value:[countries[2],countries[4]]});
expect(uut.getLabel()).toEqual(countries[2].label+', '+countries[4].label);
});
});

describe('handlePickerOnPress',function(){
it('should get label out of an array of items',function(){
var onPress=jest.fn(function(){});
var uut=new _index2.default({value:countries[0],onPress:onPress});
uut.toggleExpandableModal=jest.fn(uut.toggleExpandableModal);

uut.handlePickerOnPress();
expect(onPress).toHaveBeenCalled();
expect(uut.toggleExpandableModal).toHaveBeenCalled();
});
});
});