var _PickerPresenter=require('../PickerPresenter');var uut=_interopRequireWildcard(_PickerPresenter);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

describe('components/PickerPresenter',function(){
it('should isItemSelected, handle single mode',function(){
expect(uut.isItemSelected('value','value')).toBe(true);
expect(uut.isItemSelected('value','value2')).toBe(false);
});

it('should isItemSelected, handle multi mode',function(){
expect(uut.isItemSelected('value',['value','value1','value3'])).toBe(true);
expect(uut.isItemSelected('value',['value1','value2','value3'])).toBe(false);
expect(uut.isItemSelected('value',[])).toBe(false);
expect(uut.isItemSelected('value',undefined)).toBe(false);
});

describe('getItemValue',function(){
it('should return item value when item has value prop',function(){
expect(uut.getItemValue({value:{value:'item value'}})).toBe('item value');
});

it('should return item value for multiple values',function(){
var itemProps={value:[{value:'1'},{value:'2'},{value:'3'}]};
expect(uut.getItemValue(itemProps)).toEqual(['1','2','3']);
});

it('should return item value when item has getItemValue prop',function(){
var itemProps={value:{name:'value',age:12},getItemValue:function getItemValue(item){return item.name;}};
expect(uut.getItemValue(itemProps)).toBe('value');
});

it('should return item value for multiple values when item has getItemValue prop',function(){
var itemProps={value:[{name:'david'},{name:'sarah'},{name:'jack'}],getItemValue:function getItemValue(item){return item.name;}};
expect(uut.getItemValue(itemProps)).toEqual(['david','sarah','jack']);
});

it('should support backward compatibility for when child item value was not an object',function(){
var itemProps={value:'item-value'};
expect(uut.getItemValue(itemProps)).toEqual('item-value');
});
});
});