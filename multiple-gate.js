var forwardMultiplyGate = function(x, y) {
  return x * y;
};
const result = forwardMultiplyGate(-2, 3); // returns -6. Exciting.
console.log(result)

var x = -2, y = 3; // some input values

// try changing x,y randomly small amounts and keep track of what works best
var tweak_amount = 0.01;
var best_out = -Infinity;
var best_x = x, best_y = y;
for(var k = 0; k < 100; k++) {
  var x_try = x + tweak_amount * (Math.random() * 2 - 1); // tweak x a bit
  var y_try = y + tweak_amount * (Math.random() * 2 - 1); // tweak y a bit
  var out = forwardMultiplyGate(x_try, y_try);
  if(out > best_out) {
    // best improvement yet! Keep track of the x and y
    best_out = out; 
    best_x = x_try, best_y = y_try;
  }
}
console.log('best', best_out, best_x, best_y)

var out = forwardMultiplyGate(x, y); // before: -6
var x_gradient = y; // by our complex mathematical derivation above
var y_gradient = x;

var step_size = 0.01;
x += step_size * x_gradient; // -1.97
y += step_size * y_gradient; // 2.98
var out_new = forwardMultiplyGate(x, y); // -5.87. Higher output! Nice.
console.log('new', out_new, x, y)

var forwardAddGate = function(a, b) { 
	return a + b;
};
	var forwardCircuit = function(x,y,z) { 
	var q = forwardAddGate(x, y);
	var f = forwardMultiplyGate(q, z);
	return f;
};

var x = -2, y = 5, z = -4;
var f = forwardCircuit(x, y, z); // output is -12

console.log('f', f, x, y, z)
