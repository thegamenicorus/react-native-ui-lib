var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _Constants=require('../../../helpers/Constants');var Constants=_interopRequireWildcard(_Constants);
var _index=require('../index');var _index2=_interopRequireDefault(_index);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('TagsInput',function(){
var uut=void 0;
beforeEach(function(){
uut=new _index2.default({});
uut.setState=jest.fn(function(state){return _lodash2.default.assign(uut.state,state);});
_lodash2.default.set(uut.state,'tags',[{},{},{}]);
});

describe('getLabel',function(){
it('should return the string value in case item is a string',function(){
expect(uut.getLabel('value')).toBe('value');
expect(uut.getLabel('label')).toBe('label');
});

it('should return the label prop value in case item is an object and getLabel was not provided',function(){
expect(uut.getLabel({label:'labelValue'})).toBe('labelValue');
expect(uut.getLabel({label2:'labelValue'})).toBe(undefined);
});

it('should return the label according to getLabel callback provided in props',function(){
var getLabel=jest.fn(function(item){return item.value;});
uut=new _index2.default({getLabel:getLabel});
expect(uut.getLabel({value:'label',label:'bla'})).toBe('label');
});

it('should return the label according to getLabel callback even if item is a string',function(){
var getLabel=jest.fn(function(item){return item+'1';});
uut=new _index2.default({getLabel:getLabel});
expect(uut.getLabel('label')).toBe('label1');
});
});

describe('onKeyPress',function(){
var removeTagSpy=void 0;
beforeEach(function(){
removeTagSpy=jest.spyOn(uut,'removeMarkedTag');
});

it('should update state - tagIndexToRemove with last tag index',function(){
var pressEvent={nativeEvent:{key:'Backspace'}};
uut.onKeyPress(pressEvent);
expect(uut.state.tagIndexToRemove).toBe(2);
});

it('should not update state if keyCode is not backspace',function(){
var pressEvent={nativeEvent:{key:'space'}};
uut.onKeyPress(pressEvent);
expect(uut.state.tagIndexToRemove).toBe(undefined);
expect(removeTagSpy).not.toHaveBeenCalled();
});

it('should not update state if there are not tags',function(){
var pressEvent={nativeEvent:{key:'Backspace'}};
_lodash2.default.set(uut.state,'tags',[]);
uut.onKeyPress(pressEvent);
expect(uut.state.tagIndexToRemove).toBe(undefined);
expect(removeTagSpy).not.toHaveBeenCalled();
});

it('should ignore key event if platform is Android',function(){
Constants.isAndroid=true;
var pressEvent={};
_lodash2.default.set(uut.state,'tags',[{},{},{}]);
uut.onKeyPress(pressEvent);
expect(uut.state.tagIndexToRemove).toBe(2);
Constants.isAndroid=false;
});

it('should not update state if input value is not empty',function(){
var pressEvent={nativeEvent:{key:'Backspace'}};
_lodash2.default.set(uut.state,'tags',[{},{},{}]);
_lodash2.default.set(uut.state,'value','some text');
uut.onKeyPress(pressEvent);
expect(uut.state.tagIndexToRemove).toBe(undefined);
expect(removeTagSpy).not.toHaveBeenCalled();
});

it('should invoke onKeyPress callback provided in props with the event',function(){
var pressEvent={nativeEvent:{key:'space'}};
var onKeyPressCallback=jest.fn();
uut=new _index2.default({onKeyPress:onKeyPressCallback});

uut.onKeyPress(pressEvent);
expect(onKeyPressCallback).toHaveBeenCalledWith(pressEvent);
});

it('should not set last tag index if it is already set to last index, instead call remove tag',function(){
var pressEvent={nativeEvent:{key:'Backspace'}};
_lodash2.default.set(uut.state,'tagIndexToRemove',2);
uut.onKeyPress(pressEvent);
expect(removeTagSpy).toHaveBeenCalled();
expect(uut.state.tagIndexToRemove).toBe(undefined);
});

it('should not remove tag nor update tagIndexToRemove if pressed any key while tagIndexToRemove was set',function(){
var pressEvent={nativeEvent:{key:'space'}};
_lodash2.default.set(uut.state,'tagIndexToRemove',2);
uut.onKeyPress(pressEvent);
expect(removeTagSpy).not.toHaveBeenCalled();
expect(uut.state.tagIndexToRemove).toBe(2);
});
});

describe('removeMarkedTag',function(){
var onChangeTagsCallback=jest.fn();
beforeEach(function(){
_lodash2.default.set(uut,'props.onChangeTags',onChangeTagsCallback);
});
it('should not change tags if there is no tagIndexToRemove in state',function(){
var tags=[{},{}];
_lodash2.default.set(uut,'state',{tagIndexToRemove:undefined,tags:tags});
uut.removeMarkedTag();
expect(uut.state.tags).toEqual(tags);
expect(onChangeTagsCallback).not.toHaveBeenCalled();
});

it('should remove tag according to the tagIndexToRemove in state and invoke ',function(){
var tags=[{},{},{}];
_lodash2.default.set(uut,'state',{tagIndexToRemove:2,tags:tags});
uut.removeMarkedTag();
expect(uut.state.tags).toEqual([tags[0],tags[1]]);
expect(onChangeTagsCallback).toHaveBeenCalledWith([tags[0],tags[1]]);
expect(uut.state.tagIndexToRemove).toBeUndefined();
});
});

describe('onTagPress',function(){
it('should set tagIndexToRemove according to given index',function(){
_lodash2.default.set(uut,'state.tagIndexToRemove',undefined);
uut.onTagPress(1);
expect(uut.state.tagIndexToRemove).toBe(1);
uut.onTagPress(2);
expect(uut.state.tagIndexToRemove).toBe(2);
});

it('should call to removeMarkedTag if the given index is the same as the current tagIndexToRemove',function(){
var removeTagSpy=jest.spyOn(uut,'removeMarkedTag');
_lodash2.default.set(uut,'state.tagIndexToRemove',1);
uut.onTagPress(1);
expect(removeTagSpy).toHaveBeenCalledWith();
});
});
});