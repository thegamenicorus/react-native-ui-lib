var _helpers=require('../../../helpers');

describe('FeatureHighlight',function(){
var FeatureHighlight=void 0;

beforeEach(function(){
mockScreenDimentions();
FeatureHighlight=require('../index').default;
});

describe('getContentPositionStyle',function(){
it('massage should be placed above element positioned below screen\'s vertical center',function(){
var uut=new FeatureHighlight({});
uut.state={
targetPosition:{left:0,top:500,width:80,height:80},
contentViewHeight:200};

expect(uut.getContentPositionStyle()).toEqual({top:300});
});
it('massage should be placed below element positioned above screen\'s vertical center',function(){
var uut=new FeatureHighlight({minimumRectSize:{width:56,height:56},innerPadding:10});
uut.state={
targetPosition:{left:0,top:200,width:20,height:20},
contentViewHeight:200};

expect(uut.getContentPositionStyle()).toEqual({top:243});
});
it('massage should be placed below element positioned above screen\'s vertical center',function(){
var uut=new FeatureHighlight({minimumRectSize:{width:56,height:56},innerPadding:10});
uut.state={
targetPosition:{left:0,top:200,width:80,height:80},
contentViewHeight:200};

expect(uut.getContentPositionStyle()).toEqual({top:290});
});
});

describe('setTargetPosition',function(){
it('targetPosition should be equal to component position',function(){

var mockTarget={measureInWindow:jest.fn()};
var getTargetMock=jest.fn();
getTargetMock.mockReturnValue(mockTarget);
var uut=new FeatureHighlight({getTarget:getTargetMock});
jest.spyOn(uut,'findTargetNode').mockImplementation(function(){return 23;});
jest.spyOn(uut,'setState').mockImplementation(function(){});
jest.useFakeTimers();


uut.setTargetPosition();


expect(uut.findTargetNode).toHaveBeenCalledWith(mockTarget);
expect(uut.setState).toHaveBeenCalledWith({node:23});

expect(mockTarget.measureInWindow).not.toBeCalled();

jest.runAllTimers();

expect(setTimeout).toHaveBeenCalledTimes(1);
expect(mockTarget.measureInWindow).toBeCalled();
});
});

describe('setTargetPosition',function(){
it('targetPosition should be equal to component position',function(){

var mockTarget={measureInWindow:jest.fn()};
var getTargetMock=jest.fn();
getTargetMock.mockReturnValue(mockTarget);
var uut=new FeatureHighlight({getTarget:getTargetMock});
jest.spyOn(uut,'findTargetNode').mockImplementation(function(){return 23;});
jest.spyOn(uut,'setState').mockImplementation(function(){});
jest.useFakeTimers();


uut.setTargetPosition();


expect(uut.findTargetNode).toHaveBeenCalledWith(mockTarget);
expect(uut.setState).toHaveBeenCalledWith({node:23});

expect(mockTarget.measureInWindow).not.toBeCalled();

jest.runAllTimers();

expect(setTimeout).toHaveBeenCalledTimes(1);
expect(mockTarget.measureInWindow).toBeCalled();
});
});
});

function mockScreenDimentions(){

_helpers.Constants.screenWidth=375;
_helpers.Constants.screenHeight=667;
}