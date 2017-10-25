var _index=require('../index');var _index2=_interopRequireDefault(_index);
var _style=require('../../../style');
var _assets=require('../../../assets');var _assets2=_interopRequireDefault(_assets);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Image',function(){
beforeEach(function(){
_style.ThemeManager.setComponentTheme('Image',{});
});

describe('getImageSource',function(){
it('should return source prop, if no transformer was sent',function(){
var uut=new _index2.default({source:1});
expect(uut.getImageSource()).toBe(1);
});

it('should return transformed source prop, according to sourceTransform prop',function(){
var sourceTransformer=jest.fn(function(){return 2;});
var uut=new _index2.default({source:1,sourceTransformer:sourceTransformer});
expect(uut.getImageSource()).toBe(2);
});

it('should return transformed source prop, according to sourceTransform in ThemeManager',function(){
_style.ThemeManager.setTheme({
components:{
Image:{
sourceTransformer:jest.fn(function(){return 3;})}}});



var uut=new _index2.default({source:1});
expect(uut.getImageSource()).toBe(3);
});

it('should return transformed source prop, according to sourceTransform prop and other given props',function(){
var sourceTransformer=jest.fn(function(_ref){var size=_ref.size,source=_ref.source;return size==='small'?source:3;});
var uut=new _index2.default({source:1,size:'small',sourceTransformer:sourceTransformer});
expect(uut.getImageSource()).toBe(1);
uut=new _index2.default({source:1,size:'large',sourceTransformer:sourceTransformer});
expect(uut.getImageSource()).toBe(3);
});

it('should return asset according to assetName',function(){
_assets2.default.loadAssetsGroup('icons',{
test:'test.png'});


_assets2.default.loadAssetsGroup('icons.general',{
test:'test.png'});


var uut=new _index2.default({assetGroup:'icons',assetName:'test'});
expect(uut.getImageSource()).toBe('test.png');

uut=new _index2.default({assetGroup:'icons.general',assetName:'test'});
expect(uut.getImageSource()).toBe('test.png');
});

it('should handle when source sent with uri=null',function(){
var uut=new _index2.default({source:{uri:null}});
expect(uut.getImageSource()).toEqual({uri:undefined});
});
});
});