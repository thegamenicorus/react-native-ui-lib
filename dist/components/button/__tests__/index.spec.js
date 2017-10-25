var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _index=require('../index');var _index2=_interopRequireDefault(_index);
var _style=require('../../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Button',function(){
beforeEach(function(){
_style.ThemeManager.setComponentTheme('Button',{});
});

describe('getBackgroundColor',function(){
it('should return by default blue30 color',function(){
var uut=new _index2.default({});
expect(uut.getBackgroundColor()).toEqual(_style.Colors.blue30);
});

it('should return defined theme backgroundColor',function(){
_style.ThemeManager.setComponentTheme('Button',{
backgroundColor:_style.Colors.purple40});

var uut=new _index2.default({});
expect(uut.getBackgroundColor()).toEqual(_style.Colors.purple40);
});

it('should return backgroundColor according to official prop',function(){
var uut=new _index2.default({backgroundColor:'red'});
expect(uut.getBackgroundColor()).toEqual('red');
});

it('should return backgroundColor according to modifier',function(){
var uut=new _index2.default({'bg-orange30':true});
expect(uut.getBackgroundColor()).toEqual(_style.Colors.orange30);
});

it('should return undefined if this button is outline',function(){
var uut=new _index2.default({backgroundColor:'blue',outline:true});
expect(uut.getBackgroundColor()).toEqual('transparent');
});

it('should return undefined if this button is link',function(){
var uut=new _index2.default({'bg-orange30':true,link:true});
expect(uut.getBackgroundColor()).toEqual('transparent');
});

it('should return theme disabled color if button is disabled',function(){
var uut=new _index2.default({'bg-orange30':true,disabled:true});
expect(uut.getBackgroundColor()).toEqual(_style.ThemeManager.CTADisabledColor);
});
});

describe('getLabelColor',function(){
it('should return theme ctaTextColor by default',function(){
var uut=new _index2.default({});
expect(uut.getLabelColor()).toEqual(_style.ThemeManager.CTATextColor);
});

it('should return blue30 color for link',function(){
var uut=new _index2.default({link:true});
expect(uut.getLabelColor()).toEqual(_style.Colors.blue30);
});

it('should return Theme linkColor color for link',function(){
_style.ThemeManager.setComponentTheme('Button',{
linkColor:_style.Colors.yellow40});

var uut=new _index2.default({link:true});
expect(uut.getLabelColor()).toEqual(_style.Colors.yellow40);
});

it('should return linkColor color for link',function(){
var uut=new _index2.default({link:true,linkColor:_style.Colors.orange50});
expect(uut.getLabelColor()).toEqual(_style.Colors.orange50);
});

it('should return dark10 color for outline',function(){
var uut=new _index2.default({outline:true});
expect(uut.getLabelColor()).toEqual(_style.Colors.dark10);
});

it('should return color according to color modifier',function(){
var uut=new _index2.default({red10:true});
expect(uut.getLabelColor()).toEqual(_style.Colors.red10);
});

it('should return color according to color prop',function(){
var uut=new _index2.default({red10:true,color:'green'});
expect(uut.getLabelColor()).toEqual('green');
});

it('should return disabled text color according to theme for link/outline button',function(){
var uut=new _index2.default({red10:true,color:'green',link:true,disabled:true});
expect(uut.getLabelColor()).toEqual(_style.ThemeManager.CTADisabledColor);
});
});

describe('getLabelSizeStyle',function(){
it('should return style for large button',function(){
var uut=new _index2.default({size:'large'});
expect(uut.getLabelSizeStyle()).toEqual({paddingHorizontal:36});
});

it('should return style for medium button',function(){
var uut=new _index2.default({size:'medium'});
expect(uut.getLabelSizeStyle()).toEqual(_extends({paddingHorizontal:24},_style.Typography.text80));
});

it('should return style for small button',function(){
var uut=new _index2.default({size:'small'});
expect(uut.getLabelSizeStyle()).toEqual(_extends({paddingHorizontal:15},_style.Typography.text80));
});

it('should return style for xSmall button',function(){
var uut=new _index2.default({size:_index2.default.sizes.xSmall});
expect(uut.getLabelSizeStyle()).toEqual(_extends({paddingHorizontal:12},_style.Typography.text80));
});

it('should have no padding of button is a link',function(){
var uut=new _index2.default({size:'medium',link:true});
expect(uut.getLabelSizeStyle()).toEqual(_extends({paddingHorizontal:0},_style.Typography.text80));
});
});

describe('getOutlineStyle',function(){
it('should return undefined when outline is false',function(){
var uut=new _index2.default({outline:false});
expect(uut.getOutlineStyle()).toEqual(undefined);
});

it('should return borderWidth style with default borderColor when outline is true',function(){
var uut=new _index2.default({outline:true});
expect(uut.getOutlineStyle()).toEqual({borderWidth:1,borderColor:_style.Colors.dark70});
});

it('should return undefined when link is true, even when outline is true',function(){
var uut=new _index2.default({outline:true,link:true});
expect(uut.getOutlineStyle()).toEqual(undefined);
});

it('should return outlineColor according to prop',function(){
var uut=new _index2.default({outline:true,outlineColor:'red'});
expect(uut.getOutlineStyle()).toEqual({borderWidth:1,borderColor:'red'});
});

it('should return outline even if only got outlineColor prop',function(){
var uut=new _index2.default({outlineColor:'yellow'});
expect(uut.getOutlineStyle()).toEqual({borderWidth:1,borderColor:'yellow'});
});
});

describe('getBorderRadiusStyle',function(){
it('should return default border radius - br100 when no border radius sent',function(){
var uut=new _index2.default({});
expect(uut.getBorderRadiusStyle()).toEqual({borderRadius:_style.BorderRadiuses.br100});
});

it('should return given border radius when use plain number',function(){
var uut=new _index2.default({borderRadius:12});
expect(uut.getBorderRadiusStyle()).toEqual({borderRadius:12});
});

it('should return 0 border radius when button is a link',function(){
var uut=new _index2.default({link:true});
expect(uut.getBorderRadiusStyle()).toEqual({borderRadius:0});
});

it('should return 0 border radius when button is full width',function(){
var uut=new _index2.default({fullWidth:true});
expect(uut.getBorderRadiusStyle()).toEqual({borderRadius:0});
});

it('should return 0 border radius when border radius prop is 0',function(){
var uut=new _index2.default({borderRadius:0});
expect(uut.getBorderRadiusStyle()).toEqual({borderRadius:0});
});
});

describe('getContainerSizeStyle',function(){
it('should return style for large button',function(){
var uut=new _index2.default({size:'large'});
expect(uut.getContainerSizeStyle()).toEqual({paddingVertical:16,minWidth:138});
});

it('should return style for medium button',function(){
var uut=new _index2.default({size:'medium'});
expect(uut.getContainerSizeStyle()).toEqual({paddingVertical:11,minWidth:125});
});

it('should return style for small button',function(){
var uut=new _index2.default({size:'small'});
expect(uut.getContainerSizeStyle()).toEqual({paddingVertical:5,minWidth:74});
});

it('should return style for xSmall button',function(){
var uut=new _index2.default({size:_index2.default.sizes.xSmall});
expect(uut.getContainerSizeStyle()).toEqual({paddingVertical:4,minWidth:60});
});
});
});