if (typeof window === "undefined") {
  var jsdom = require("jsdom");
  var { JSDOM } = jsdom;
  var { document } = new JSDOM("").window;
} // you don't have to worry about this code. this is for testing.

// Dancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function Dancer(top, left, timeBetweenSteps) {
  const createDancerElement = () => {
    let elDancer = document.createElement('span');
    elDancer.className = 'dancer';
    return elDancer;
  };
  this.$node = createDancerElement();
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function(){
  setTimeout(this.step, this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left){
  Object.assign(this.$node.style, {
    top: `${top}px`,
    left: `${left}px`
  });
}


// you don't have to worry about this code. this is for testing.
if (typeof window === "undefined") {
  module.exports = Dancer;
}
