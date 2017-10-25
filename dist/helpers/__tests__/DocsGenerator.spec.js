var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _DocsGenerator=require('../DocsGenerator');var uut=_interopRequireWildcard(_DocsGenerator);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

ExampleComponent=function(_React$Component){_inherits(ExampleComponent,_React$Component);function ExampleComponent(){_classCallCheck(this,ExampleComponent);return _possibleConstructorReturn(this,(ExampleComponent.__proto__||Object.getPrototypeOf(ExampleComponent)).apply(this,arguments));}return ExampleComponent;}(_react2.default.Component);ExampleComponent.
displayName='ExampleComponent';ExampleComponent.
propTypes={
color:_propTypes2.default.string,
label:_propTypes2.default.string,
size:_propTypes2.default.number,
disabled:_propTypes2.default.bool};ExampleComponent.


defaultProps={
color:'blue'};



describe('DocsGenerator Helper',function(){
it('should extract component info from instance',function(){
var instance=new ExampleComponent({color:'red'});
var componentInfo=uut.extractComponentInfo(instance);
expect(componentInfo).toEqual({
componentName:'ExampleComponent',
defaultProps:{color:'blue'},
props:{color:'red'}});
});

it('should generateSnippet handle basic usage with no props',function(){
var snippet=uut.generateSnippet({componentName:'ExampleComponent',props:{},defaultProps:{}});
expect(snippet).toBe('<ExampleComponent/>');
});

it('should generateSnippet handle with string prop',function(){
var instance=new ExampleComponent({label:'test'});
var snippet=uut.generateSnippet(uut.extractComponentInfo(instance));
expect(snippet).toBe('<ExampleComponent\n    label="test"/>');
});

it('should generateSnippet handle with number prop',function(){
var instance=new ExampleComponent({size:12});
var snippet=uut.generateSnippet(uut.extractComponentInfo(instance));
expect(snippet).toBe('<ExampleComponent\n    size={12}/>');
});

it('should generateSnippet handle with boolean prop',function(){
var instance=new ExampleComponent({disabled:true});
var snippet=uut.generateSnippet(uut.extractComponentInfo(instance));
expect(snippet).toBe('<ExampleComponent\n    disabled/>');

instance=new ExampleComponent({disabled:false});
snippet=uut.generateSnippet(uut.extractComponentInfo(instance));
expect(snippet).toBe('<ExampleComponent\n    disabled={false}/>');
});

it('should generateSnippet handle with object prop',function(){
var instance=new ExampleComponent({style:{color:'red'}});
var snippet=uut.generateSnippet(uut.extractComponentInfo(instance));
expect(snippet).toBe('<ExampleComponent\n    style={{"color":"red"}}/>');
});
});