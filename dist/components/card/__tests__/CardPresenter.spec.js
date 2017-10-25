var _CardPresenter=require('../CardPresenter');var uut=_interopRequireWildcard(_CardPresenter);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

describe('CardPresenter',function(){
describe('extractPositionValues',function(){
it('should work with basic string value',function(){
expect(uut.extractPositionValues('top')).toEqual({top:true,right:false,bottom:false,left:false});
expect(uut.extractPositionValues('bottom')).toEqual({top:false,right:false,bottom:true,left:false});
expect(uut.extractPositionValues('left')).toEqual({top:false,right:false,bottom:false,left:true});
expect(uut.extractPositionValues('right')).toEqual({top:false,right:true,bottom:false,left:false});
expect(uut.extractPositionValues('')).toEqual({top:false,right:false,bottom:false,left:false});
});

it('should work with basic array of positions',function(){
expect(uut.extractPositionValues(['top','bottom'])).
toEqual({top:true,right:false,bottom:true,left:false});
expect(uut.extractPositionValues(['left','right'])).
toEqual({top:false,right:true,bottom:false,left:true});
expect(uut.extractPositionValues(['top','left','bottom','right'])).
toEqual({top:true,right:true,bottom:true,left:true});
expect(uut.extractPositionValues([])).
toEqual({top:false,right:false,bottom:false,left:false});
});
});
});