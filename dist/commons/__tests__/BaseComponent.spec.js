

var _BaseComponent=require('../BaseComponent');var _BaseComponent2=_interopRequireDefault(_BaseComponent);
var _MultipleShadow=require('../../components/MultipleShadow');var _MultipleShadow2=_interopRequireDefault(_MultipleShadow);
var _view=require('../../components/view');var _view2=_interopRequireDefault(_view);
var _style=require('../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('BaseComponent',function(){
describe('background modifiers',function(){
it('should return color value according to background-?? prop that was sent',function(){
var uut=new _BaseComponent2.default({'background-red30':true});
expect(uut.extractBackgroundColorValue()).toBe(_style.Colors.red30);
uut=new _BaseComponent2.default({'bg-red30':true});
expect(uut.extractBackgroundColorValue()).toBe(_style.Colors.red30);
});

it('should return undefined value for unfamiliar color const',function(){
var uut=new _BaseComponent2.default({'background-uknown30':true});
expect(uut.extractBackgroundColorValue()).toBe(undefined);
});
});

describe('extractTypographyValue',function(){
it('should extract typography value according to typography modifier',function(){
expect(new _BaseComponent2.default({text40:true}).extractTypographyValue()).toEqual(_style.Typography.text40);
expect(new _BaseComponent2.default({text70:true}).extractTypographyValue()).toEqual(_style.Typography.text70);
});

it('should return undefined if not typography modifier was sent',function(){
expect(new _BaseComponent2.default({}).extractTypographyValue()).toEqual(undefined);
});

it('should return take the last typography modifier prop in case there is more than one',function(){
expect(
new _BaseComponent2.default({
text40:true,
text70:true}).
extractTypographyValue()).
toEqual(_style.Typography.text70);
expect(
new _BaseComponent2.default({
text70:true,
text40:true}).
extractTypographyValue()).
toEqual(_style.Typography.text40);
expect(
new _BaseComponent2.default({
text40:true,
text70:false}).
extractTypographyValue()).
toEqual(_style.Typography.text40);
});

it('should return value of the custom made typography',function(){
var customTypography={fontSize:34,fontWeight:'400'};
_style.Typography.loadTypographies({customTypography:customTypography});
expect(new _BaseComponent2.default({customTypography:true}).extractTypographyValue()).toEqual(customTypography);
expect(
new _BaseComponent2.default({
text40:true,
customTypography:true}).
extractTypographyValue()).
toEqual(customTypography);
expect(
new _BaseComponent2.default({
customTypography:true,
text40:true}).
extractTypographyValue()).
toEqual(_style.Typography.text40);
});
});

describe('paddings modifiers',function(){
it('should return paddings values  according to padding?-?? prop that was sent',function(){
var uut=new _BaseComponent2.default({
'padding-25':true,
'paddingL-15':true,
'paddingT-10':true,
'paddingR-20':true,
'paddingB-15':true,
'paddingH-20':true,
'paddingV-15':true});

expect(uut.extractPaddingValues()).toEqual({
padding:25,
paddingLeft:15,
paddingTop:10,
paddingRight:20,
paddingBottom:15,
paddingHorizontal:20,
paddingVertical:15});

});

it('should ignore unfamiliar paddings keys',function(){
var uut=new _BaseComponent2.default({'paddings-25':true});
expect(uut.extractPaddingValues()).toEqual({});
});

it('should ignore non numeric padding values',function(){
var uut=new _BaseComponent2.default({'padding-2a5':true});
expect(uut.extractPaddingValues()).toEqual({});
});
});

describe('margins modifiers',function(){
it('should return margins values according to margin?-?? prop that was sent',function(){
var uut=new _BaseComponent2.default({
'margin-25':true,
'marginL-15':true,
'marginT-10':true,
'marginR-20':true,
'marginB-15':true,
'marginH-20':true,
'marginV-15':true});

expect(uut.extractMarginValues()).toEqual({
margin:25,
marginLeft:15,
marginTop:10,
marginRight:20,
marginBottom:15,
marginHorizontal:20,
marginVertical:15});

});

it('should ignore unfamiliar margin keys',function(){
var uut=new _BaseComponent2.default({'margins-25':true});
expect(uut.extractMarginValues()).toEqual({});
});

it('should ignore non numeric margin values',function(){
var uut=new _BaseComponent2.default({'margin-2a5':true});
expect(uut.extractMarginValues()).toEqual({});
});
});

describe('alignments modifiers',function(){
it('should return prop alignment for a row view',function(){
var uut=new _BaseComponent2.default({row:true,left:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
justifyContent:'flex-start'});

uut=new _BaseComponent2.default({row:true,right:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
justifyContent:'flex-end'});

uut=new _BaseComponent2.default({row:true,top:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
alignItems:'flex-start'});

uut=new _BaseComponent2.default({row:true,bottom:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
alignItems:'flex-end'});

uut=new _BaseComponent2.default({row:true,centerH:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
justifyContent:'center'});

uut=new _BaseComponent2.default({row:true,centerV:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
alignItems:'center'});

uut=new _BaseComponent2.default({row:true,spread:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
justifyContent:'space-between'});

});

it('should return prop alignment for a column view (default)',function(){
var uut=new _BaseComponent2.default({left:true});
expect(uut.extractAlignmentsValues()).toEqual({alignItems:'flex-start'});
uut=new _BaseComponent2.default({right:true});
expect(uut.extractAlignmentsValues()).toEqual({alignItems:'flex-end'});
uut=new _BaseComponent2.default({top:true});
expect(uut.extractAlignmentsValues()).toEqual({
justifyContent:'flex-start'});

uut=new _BaseComponent2.default({bottom:true});
expect(uut.extractAlignmentsValues()).toEqual({
justifyContent:'flex-end'});

uut=new _BaseComponent2.default({centerH:true});
expect(uut.extractAlignmentsValues()).toEqual({alignItems:'center'});
uut=new _BaseComponent2.default({centerV:true});
expect(uut.extractAlignmentsValues()).toEqual({justifyContent:'center'});
uut=new _BaseComponent2.default({spread:true});
expect(uut.extractAlignmentsValues()).toEqual({
justifyContent:'space-between'});

});

it('should return center alignment for both axis',function(){
var uut=new _BaseComponent2.default({center:true});
expect(uut.extractAlignmentsValues()).toEqual({
justifyContent:'center',
alignItems:'center'});

uut=new _BaseComponent2.default({row:true,center:true});
expect(uut.extractAlignmentsValues()).toEqual({
flexDirection:'row',
justifyContent:'center',
alignItems:'center'});

});
});

describe('flex modifiers',function(){
it('should return flex value according to flex-? prop',function(){
var uut=new _BaseComponent2.default({'flex-2':true});
expect(uut.extractFlexValue()).toEqual(2);
uut=new _BaseComponent2.default({'flex-0':true});
expect(uut.extractFlexValue()).toEqual(0);
uut=new _BaseComponent2.default({});
expect(uut.extractFlexValue()).toEqual(undefined);
});

it('should return 1 flex value according when only flex sent',function(){
var uut=new _BaseComponent2.default({flex:true});
expect(uut.extractFlexValue()).toEqual(1);
uut=new _BaseComponent2.default({'flex-':true});
expect(uut.extractFlexValue()).toEqual(1);
});

it('should return undefined when prop sent with false value',function(){
var uut=new _BaseComponent2.default({flex:false});
expect(uut.extractFlexValue()).toEqual(undefined);
});

it('should ignore non numeric values',function(){
var uut=new _BaseComponent2.default({'flex-1a2':true});
expect(uut.extractFlexValue()).toEqual(undefined);
});
});

describe('flexStyle modifier',function(){
it('should return flex style according to flex-? prop',function(){
var uut=new _BaseComponent2.default({'flex-2':true});
expect(uut.extractFlexStyle()).toEqual({flex:2});
uut=new _BaseComponent2.default({flex:true});
expect(uut.extractFlexStyle()).toEqual({flex:1});
uut=new _BaseComponent2.default({'flex-0':true});
expect(uut.extractFlexStyle()).toEqual({flex:0});
uut=new _BaseComponent2.default({});
expect(uut.extractFlexStyle()).toEqual(undefined);
});

it('should handle flexG and flexS props',function(){
var uut=new _BaseComponent2.default({'flexG-2':true});
expect(uut.extractFlexStyle()).toEqual({flexGrow:2});
uut=new _BaseComponent2.default({flexG:true});
expect(uut.extractFlexStyle()).toEqual({flexGrow:1});
uut=new _BaseComponent2.default({'flexS-3':true});
expect(uut.extractFlexStyle()).toEqual({flexShrink:3});
uut=new _BaseComponent2.default({flexS:true});
expect(uut.extractFlexStyle()).toEqual({flexShrink:1});
uut=new _BaseComponent2.default({flexG:false,flexS:false});
expect(uut.extractFlexStyle()).toEqual(undefined);
});

it('should handle bad usage',function(){
var uut=new _BaseComponent2.default({'flexG-2s':true});
expect(uut.extractFlexStyle()).toEqual(undefined);
uut=new _BaseComponent2.default({'flex-aaa':true});
expect(uut.extractFlexStyle()).toEqual(undefined);
uut=new _BaseComponent2.default({'flexB-12':true});
expect(uut.extractFlexStyle()).toEqual(undefined);
uut=new _BaseComponent2.default({'flex-':true});
expect(uut.extractFlexStyle()).toEqual({flex:1});
});
});

describe('border radius modifier',function(){
it('should return border radius value according br? modifier prop',function(){
var uut=new _BaseComponent2.default({br10:true});
expect(uut.extractBorderRadiusValue()).toEqual(_style.BorderRadiuses.br10);
uut=new _BaseComponent2.default({br20:true});
expect(uut.extractBorderRadiusValue()).toEqual(_style.BorderRadiuses.br20);
});
});

describe('extractOwnProps',function(){
it('should extract the component props from a props object',function(){
var props={color:'red',topShadow:1,bottomShadow:2};
expect(_MultipleShadow2.default.extractOwnProps(props)).toEqual({
topShadow:1,
bottomShadow:2});

});

it('should omit props that were required to ignore',function(){
var props={color:'red',topShadow:1,bottomShadow:2};
expect(_MultipleShadow2.default.extractOwnProps(props,'topShadow')).toEqual({
bottomShadow:2});

expect(_MultipleShadow2.default.extractOwnProps(props,['topShadow','bottomShadow'])).toEqual({});
});
});

describe('extractModifiersProps',function(){
it('should return all modifiers props',function(){
var uut=new _view2.default({
'paddingL-20':true,
'bg-red30':true,
other:'some-value'});

expect(uut.extractModifierProps()).toEqual({
'paddingL-20':true,
'bg-red30':true});


uut=new _view2.default({
'margin-50':true,
'background-blue20':true,
other:'some-value'});

expect(uut.extractModifierProps()).toEqual({
'margin-50':true,
'background-blue20':true});


uut=new _view2.default({left:true,'bg-red10':false,other:'some-value'});
expect(uut.extractModifierProps()).toEqual({
left:true,
'bg-red10':false});

});
});

describe('getThemeProps',function(){
it('should return props values from the Theme Manager if were defined',function(){
_style.ThemeManager.setComponentTheme('BaseComponent',{someProp:'themeValue'});
var uut=new _BaseComponent2.default({});
expect(uut.getThemeProps()).toEqual({someProp:'themeValue'});
});

it('should return override theme values with passed props values',function(){
_style.ThemeManager.setComponentTheme('BaseComponent',{someProp:'themeValue'});
var uut=new _BaseComponent2.default({someProp:'someValue'});
expect(uut.getThemeProps()).toEqual({someProp:'someValue'});
});


it('should return props values from the Theme Manager merged with values from passed props',function(){
_style.ThemeManager.setComponentTheme('BaseComponent',{someProp:'themeValue'});
var uut=new _BaseComponent2.default({anotherProps:'anotherValue'});
expect(uut.getThemeProps()).toEqual({someProp:'themeValue',anotherProps:'anotherValue'});
});
});
});