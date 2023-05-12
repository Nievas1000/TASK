/*function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];
  return values.map(function(value) { 
	if(typeof value === 'number') {
		return value * mult
	}
	return value;
  });
}

function countZeroValues(values) {
	return values.filter(function(value) {
		return value == 0
	}).length
}

const multiplyByTwo = multiplyByClosure(2);
console.log(multiplyByTwo);

const multiplyByThree = multiplyByClosure(3);
console.log(multiplyByThree);

// count zero values, expecting 1:
console.log(countZeroValues(multiplyByTwo));

for (var i = 0; i < 10; i++) {
	
	const button = document.createElement('button');
	button.textContent = `Multiply by ${i}`;
	document.body.appendChild(button);

    button.onclick = function() {
        console.log(multiplyByClosure(i))
    };
}
 */

/* The errors are first in the function multiplyByClosure, that the variable 'value' has values that cannot be multiplied like for example 'a' and 'false'

Another error is in the countZeroValues function that uses '==' and should go '==='

And also in the last for is using 'var' and it should go 'let'.

Here below I leave the code solved.
*/
function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5];
  return values.map(function (value) {
    if (typeof value === "number") {
      return value * mult;
    }
    return value;
  });
}

function countZeroValues(values) {
  return values.filter(function (value) {
    return value === 0;
  }).length;
}

const multiplyByTwo = multiplyByClosure(2);
console.log(multiplyByTwo);

const multiplyByThree = multiplyByClosure(3);
console.log(multiplyByThree);

// count zero values, expecting 1:
console.log(countZeroValues(multiplyByTwo));

for (let i = 0; i < 10; i++) {
  const button = document.createElement("button");
  button.textContent = `Multiply by ${i}`;
  document.body.appendChild(button);

  button.onclick = (function (index) {
    return function () {
      console.log(multiplyByClosure(index));
    };
  })(i);
}
