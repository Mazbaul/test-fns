
let wrapperHeight = document.getElementById("wrapper").offsetHeight;

setInterval( doMove, 100);

function doMove() {

  var element = document.getElementById('box'),
      rect = element.getBoundingClientRect(),
      move = 10; // in pixel

  var goRight = ( (rect.right+move) <= window.innerWidth) ? true : false;
  var goBottom = ( (rect.bottom+move) <= window.innerHeight ) ? true : false;

  var goBottomRight = (goRight && goBottom) ? true : false;

  

  if( typeof(goDirection) == 'undefined' ) goDirection = 'bottomRight';

  var goRight = ( (rect.right+move) <= window.innerWidth) ? true : false;
  var goBottom = ( (rect.bottom+move) <= window.innerHeight ) ? true : false;
  var goTop = ( (rect.top+move) <= window.innerHeight ) ? true : false;

  if(goRight && !goBottom && (goDirection != 'bottomLeft'))goDirection = 'topRight';
  if(goRight && !goBottom && (goDirection == 'bottomLeft'))goDirection = 'topLeft';
  if(goRight && (rect.top ==0)&& (goDirection != 'topLeft'))goDirection = 'bottomRight';
  if(goRight && (rect.top ==0)&& (goDirection == 'topLeft'))goDirection = 'bottomLeft';
  if(!goRight && (rect.top ==0))goDirection = 'bottomLeft';
  if(!goRight && !goBottom)goDirection = 'topLeft';


  if(goDirection == 'topLeft') {
    if(rect.left == 0) goDirection = 'bottomRight';
    if(rect.left > 0) goDirection = 'topLeft';

  }
  else if(goDirection == 'bottomRight') {
    goDirection = (goBottomRight) ? 'bottomRight' : 'topLeft';
  }


  if( goDirection=='bottomRight' ) {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left+move) + "px";
  }
  else if( goDirection=='topLeft' ) {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left-move) + "px";
  }
  else if( goDirection=='topRight' ) {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left+move) + "px";
  }
  else if( goDirection=='bottomLeft' ) {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left-move) + "px";
  }

}
