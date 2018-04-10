var _colors=require('../../../src/style/colors');var _colors2=_interopRequireDefault(_colors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('services/AvatarService',function(){
var uut=void 0;
beforeEach(function(){
uut=require('../../../src/helpers/AvatarHelper');
});

it('should getAvatarColors',function(){
var avatarColors=uut.getAvatarColors();
expect(avatarColors).toEqual([
_colors2.default.blue20,
_colors2.default.cyan20,
_colors2.default.green20,
_colors2.default.yellow20,
_colors2.default.orange20,
_colors2.default.red20,
_colors2.default.purple20,
_colors2.default.violet20]);

});

it('should getColorById',function(){
var avatarColors=uut.getAvatarColors();
expect(uut.getColorById(null)).toBe(avatarColors[0]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f48')).toBe(avatarColors[0]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f47')).toBe(avatarColors[1]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f46')).toBe(avatarColors[2]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f45')).toBe(avatarColors[3]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f44')).toBe(avatarColors[4]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f43')).toBe(avatarColors[5]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f42')).toBe(avatarColors[6]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f49')).toBe(avatarColors[7]);
});

it('should getColorById with custom array of colors',function(){
var customColors=[_colors2.default.blue10,_colors2.default.red10,_colors2.default.orange10];
expect(uut.getColorById(null,customColors)).toBe(customColors[0]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f48',customColors)).toBe(customColors[1]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f47',customColors)).toBe(customColors[2]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f46',customColors)).toBe(customColors[0]);
expect(uut.getColorById('a19c0ee3-c165-434e-bf4d-a6c218c83f45',customColors)).toBe(customColors[1]);
});

it('should getInitials',function(){
expect(uut.getInitials('Austin Guerrero')).toBe('AG');
expect(uut.getInitials('Austin   Guerrero')).toBe('AG');
expect(uut.getInitials('theresa simpson')).toBe('TS');
expect(uut.getInitials('Sarah Michelle Galler')).toBe('SM');
expect(uut.getInitials('Keith')).toBe('K');
expect(uut.getInitials()).toBe('');
expect(uut.getInitials(' Austin ')).toBe('A');
});

describe('Is-gravatar query function',function(){
it('should return true for a valid (known) gravatar url',function(){
expect(uut.isGravatarUrl('https://www.gravatar.com/avatar/00000000000000000000000000000000')).toEqual(true);
expect(uut.isGravatarUrl('http://www.gravatar.com/avatar/00000000000000000000000000000000')).toEqual(true);
expect(uut.isGravatarUrl('http://gravatar.com/avatar/00000000000000000000000000000000')).toEqual(true);
});

it('should return true for a gravatar-ish url',function(){
expect(uut.isGravatarUrl('http://gravatar.org/avatar/00000000000000000000000000000000')).toEqual(true);
expect(uut.isGravatarUrl('http://gravatar/avatar/00000000000000000000000000000000')).toEqual(true);
});

it('should return false for a url with a broken path',function(){
expect(uut.isGravatarUrl('https://www.gravatar.com')).toEqual(false);
});

it('should return false for a non-gravatar url',function(){
expect(uut.isGravatarUrl('https://www._gravatar.com/avatar/00000000000000000000000000000000')).toEqual(false);
expect(uut.isGravatarUrl('https://www.avatar.com/avatar/00000000000000000000000000000000')).toEqual(false);
expect(uut.isGravatarUrl('https://www.gravatars.com/avatar/00000000000000000000000000000000')).toEqual(false);
expect(uut.isGravatarUrl('https://www.grava.tar/avatar/00000000000000000000000000000000')).toEqual(false);
});
});

describe('Patch-fix function',function(){
var gravatarUrl='https://www.gravatar.com/avatar/00000000000000000000000000000000';
var shortGravatarUrl='https://gravatar.com/avatar/00000000000000000000000000000000';

it('should be applied for valid gravatar links without a default url-param',function(){
expect(uut.patchGravatarUrl(gravatarUrl)).toEqual(gravatarUrl+'?d=404');
expect(uut.patchGravatarUrl(shortGravatarUrl)).toEqual(shortGravatarUrl+'?d=404');
});

it('should be applied for valid gravatar links with an existing default url-param',function(){
var url=gravatarUrl+'?d=mock';
var urlShort=shortGravatarUrl+'?d=mock';
expect(uut.patchGravatarUrl(url)).toEqual(gravatarUrl+'?d=404');
expect(uut.patchGravatarUrl(urlShort)).toEqual(shortGravatarUrl+'?d=404');
});

it('should be applied for valid gravatar links with an existing default url-param and a hash',function(){
var url=gravatarUrl+'?d=mock#hash-mock';
var urlShort=shortGravatarUrl+'?d=mock#hash-mock';
expect(uut.patchGravatarUrl(url)).toEqual(gravatarUrl+'?d=404#hash-mock');
expect(uut.patchGravatarUrl(urlShort)).toEqual(shortGravatarUrl+'?d=404#hash-mock');
});

it('should be applied for valid gravatar links with both short- and longhand default url-param',function(){
var url=gravatarUrl+'?d=mock&default=mock-long';
var urlShort=shortGravatarUrl+'?d=mock&default=mock-long';
expect(uut.patchGravatarUrl(url)).toEqual(gravatarUrl+'?d=404');
expect(uut.patchGravatarUrl(urlShort)).toEqual(shortGravatarUrl+'?d=404');
});

it('should keep existing non-default params',function(){
var url=gravatarUrl+'?d=mock&mock1=param1&mock2=param2';
var urlShort=shortGravatarUrl+'?d=mock&mock1=param1&mock2=param2';
expect(uut.patchGravatarUrl(url)).toEqual(gravatarUrl+'?d=404&mock1=param1&mock2=param2');
expect(uut.patchGravatarUrl(urlShort)).toEqual(shortGravatarUrl+'?d=404&mock1=param1&mock2=param2');
});
});
});