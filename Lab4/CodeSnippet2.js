var x = 9;
function myFunction() {
    return x * x;
}
document.write(myFunction());
x = 5;
document.write(myFunction());

//Expected Output

81
25

// Lexical Environment Diagrams


// Global Execution Context Creation:
// Outer: null
// LE: { x: undefined, myFunction: <function> }
// TDZ: {}



// Global Execution Context Execution (after first `
// document.write`):
// Outer: null
// LE: { x: 9, myFunction: <function> }
// TDZ: {}



// Function myFunction Execution Context Creation:
// Outer: Global LE
// LE: {}
// TDZ: {}



// Function myFunction Execution Context Execution (first call):
// Outer: Global LE (x: 9)
// LE: {}
// TDZ: {}



// Global Execution Context Execution (after x = 5 and second document.write):
// Outer: null
// LE: { x: 5, myFunction: <function> }
// TDZ: {}


// Function myFunction Execution Context Execution (second call):
// Outer: Global LE (x: 5)
// LE: {}
// TDZ: {}