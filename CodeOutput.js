var y = 1;
if (function f() {}) {
    y += typeof f;
}
console.log(y); //1undefined

// Above code would give output 1undefined. 

// If condition statement evaluate using eval so eval(function f() {}) 
// which return function f() {} which is true so inside if statement code execute. 
// typeof f return undefined because if statement code execute at run time, 
// so statement inside if condition evaluated at run time.