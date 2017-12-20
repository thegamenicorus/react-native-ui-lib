Object.defineProperty(exports,"__esModule",{value:true});exports.

getChildrenLength=getChildrenLength;exports.




calcOffset=calcOffset;exports.








calcPageIndex=calcPageIndex;exports.














isOutOfBounds=isOutOfBounds;exports.









calcCarouselWidth=calcCarouselWidth;var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getChildrenLength(props){var length=_lodash2.default.get(props,'children.length')||0;return length;}function calcOffset(props,state){var currentPage=state.currentPage;var pageWidth=props.pageWidth,loop=props.loop;var actualCurrentPage=loop?currentPage+1:currentPage;return pageWidth*actualCurrentPage;}function calcPageIndex(offset,props){var pagesCount=getChildrenLength(props);var pageWidth=props.pageWidth,loop=props.loop;var pageIndexIncludingClonedPages=Math.round(offset/pageWidth);var actualPageIndex=void 0;if(loop){actualPageIndex=(pageIndexIncludingClonedPages+(pagesCount-1))%pagesCount;}else{actualPageIndex=Math.min(pagesCount-1,pageIndexIncludingClonedPages);}return actualPageIndex;}function isOutOfBounds(offset,props){var pageWidth=props.pageWidth;var length=getChildrenLength(props);var minLimit=1;var maxLimit=(length+1)*pageWidth-1;return!_lodash2.default.inRange(offset,minLimit,maxLimit);}function calcCarouselWidth(props){var
pageWidth=props.pageWidth,loop=props.loop;
var length=getChildrenLength(props);
length=loop?length+2:length;
return pageWidth*length;
}