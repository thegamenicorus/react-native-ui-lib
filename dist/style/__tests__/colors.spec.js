var _colors=require('../colors');var _colors2=_interopRequireDefault(_colors);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('services/AvatarService',function(){
it('should add alpha to hex color value',function(){
expect(_colors2.default.rgba(_colors2.default.green30,0.7)).toBe('rgba(101, 200, 136, 0.7)');
expect(_colors2.default.rgba(_colors2.default.red10,0.7)).toBe('rgba(207, 38, 47, 0.7)');
expect(_colors2.default.rgba(_colors2.default.green30,0.25)).toBe('rgba(101, 200, 136, 0.25)');






});

it('should add alpha to rgb color value',function(){
expect(_colors2.default.rgba(101,200,136,0.7)).toBe('rgba(101, 200, 136, 0.7)');
expect(_colors2.default.rgba(207,38,47,0.7)).toBe('rgba(207, 38, 47, 0.7)');
expect(_colors2.default.rgba(101,200,136,0.25)).toBe('rgba(101, 200, 136, 0.25)');
});

it('should handle wrong number of params',function(){
expect(function(){return _colors2.default.rgba(101,136,0.7);}).toThrow(new Error('rgba can work with either 2 or 4 arguments'));
});

it('should handle invalid rgb code',function(){
expect(function(){return _colors2.default.rgba(-12,128,136,0.7);}).toThrow(
new Error('-12 is invalid rgb code, please use number between 0-255'));

expect(function(){return _colors2.default.rgba(12,128,256,0.7);}).toThrow(
new Error('256 is invalid rgb code, please use number between 0-255'));

});

it('should handle invalid hex code',function(){
expect(function(){return _colors2.default.rgba('#ff22445',0.7);}).toThrow(new Error('#ff22445 is invalid hex color'));
expect(function(){return _colors2.default.rgba('ff2244',0.7);}).toThrow(new Error('ff2244 is invalid hex color'));
expect(function(){return _colors2.default.rgba('#ff244',0.7);}).toThrow(new Error('#ff244 is invalid hex color'));
});
});