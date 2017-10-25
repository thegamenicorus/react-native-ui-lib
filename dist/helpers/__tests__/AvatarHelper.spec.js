var _AvatarHelper=require('../../../src/helpers/AvatarHelper');var uut=_interopRequireWildcard(_AvatarHelper);
var _colors=require('../../../src/style/colors');var _colors2=_interopRequireDefault(_colors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}

describe('services/AvatarService',function(){
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
});