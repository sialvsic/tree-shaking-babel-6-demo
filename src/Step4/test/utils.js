var square = function() {
  console.log('square');
  return function() {
    console.log('square return');
  }
}();

function getSquare() {
  console.log('getSquare');
  square();
}

export function cube(x) {
  console.log('cube');
  return x * x * x;
}
