var _index=require('../index');var _index2=_interopRequireDefault(_index);
var _style=require('../../../style');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

describe('Avatar Badge',function(){
describe('getStatusBadgeColor',function(){
it('should return yellow when passed AWAY',function(){
var uut=new _index2.default({status:_index2.default.modes.AWAY});
expect(uut.getStatusBadgeColor(uut.props.status)).toEqual(_style.Colors.yellow30);
});
it('should return yellow when passed ONLINE',function(){
var uut=new _index2.default({status:_index2.default.modes.ONLINE});
expect(uut.getStatusBadgeColor(uut.props.status)).toEqual(_style.Colors.green30);
});
it('should return yellow when passed OFFLINE',function(){
var uut=new _index2.default({status:_index2.default.modes.OFFLINE});
expect(uut.getStatusBadgeColor(uut.props.status)).toEqual(_style.Colors.dark60);
});
});

describe('getBadgeColor',function(){
it('should rerun transparent when either isOnline nor status is passed',function(){
var uut=new _index2.default({});
expect(uut.getBadgeColor(uut.props.isOnline,uut.props.status)).toEqual(null);
});
it('should rerun transparent when isOnline is false and status not passed',function(){
var uut=new _index2.default({isOnline:false});
expect(uut.getBadgeColor(uut.props.isOnline,uut.props.status)).toEqual(null);
});
it('should rerun transparent when isOnline not passed and status is NONE',function(){
var uut=new _index2.default({status:_index2.default.modes.NONE});
expect(uut.getBadgeColor(uut.props.isOnline,uut.props.status)).toEqual(null);
});
it('should rerun green when isOnline is true and status is NONE',function(){
var uut=new _index2.default({isOnline:true,status:_index2.default.modes.NONE});
expect(uut.getBadgeColor(uut.props.isOnline,uut.props.status)).toEqual(_style.Colors.green30);
});
it('should rerun yellow when isOnline is true and status is AWAY (status to override isOnline)',function(){
var uut=new _index2.default({isOnline:true,status:_index2.default.modes.AWAY});
expect(uut.getBadgeColor(uut.props.isOnline,uut.props.status)).toEqual(_style.Colors.yellow30);
});
});

describe('renderBadge',function(){
it('should rerun false when isOnline is false and status is NONE',function(){
var uut=new _index2.default({isOnline:false,status:_index2.default.modes.NONE});
expect(uut.renderBadge()).toEqual(false);
});
it('should rerun false when isOnline is false and status is not passed',function(){
var uut=new _index2.default({isOnline:false});
expect(uut.renderBadge()).toEqual(false);
});
it('should rerun false when isOnline not passed and status is NONE',function(){
var uut=new _index2.default({status:_index2.default.modes.NONE});
expect(uut.renderBadge()).toEqual(false);
});
it('should rerun false when either isOnline nor status is passed',function(){
var uut=new _index2.default({});
expect(uut.renderBadge()).toEqual(false);
});
});
});