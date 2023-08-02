// =============================================================
function sumNames () {
  return "Hello"
}
  const result = sumNames()
  console.log(result)

// =============================================================

  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  
  function printNumbersGreaterThan10(arr) {
    for (let num of arr) {
      if (num > 10) {
        console.log(num);
      }
    }
  }

  console.log (printNumbersGreaterThan10(numbers))

// ===========================================================

function calculate (num1, num2,operator){
  let result

  for (let i = 0; i < 1; i++) { 
    if (operator === 'plus') {
      result = num1 + num2
    } else if (operator === 'minus') {
      result = num1 - num2
    } else if (operator === 'multiply') {
      result = num1 * num2
    } else if (operator === 'divide') {
      if (num2 === 0) {
        console.log('Ошибка: деление на ноль')
        return
      }
      result = num1 / num2;
    }
  }

  return result;
}


const additionResult = calculate(2, 3, 'plus')
console.log( additionResult)

const subtractionResult = calculate(5, 2, 'minus')
console.log(subtractionResult)

const multiplicationResult = calculate(4, 6, 'multiply')
console.log(multiplicationResult)

const divisionResult = calculate(10, 2, 'divide')
console.log(divisionResult)
