/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
        this.result = 0;
    }
    add(number) {
        this.result += number;
    }
    subtract(number) {
        this.result -= number;
    }
    multiply(number) {
        this.result *= number;
    }
    divide(number) {
        if (number == 0) {
            throw new Error("Cant divided by zero");
        }
        else {
            this.result /= number;
        }
    }
    clear() {
        this.result = 0;
    }
     getResult() {
        return this.result;
    }
    calculate(expression) {
        const cleanExpr = expression.replace(/\s+/g, ''); 
        if (!/^[0-9+\-*/().]+$/.test(cleanExpr)) {
            throw new Error("Invalid characters in expression");
        }

        try {
            this.result = Function(`return (${cleanExpr})`)(); 
        } catch (e) {
            throw new Error("Invalid expression");
        }
    }

}
const calc = new Calculator();

calc.add(5);
calc.multiply(2);
console.log(calc.getResult()); // 10

calc.clear();
calc.calculate('10 +   2 * (6 - (4 + 1) / 2) + 7');
console.log(calc.getResult()); // 21

