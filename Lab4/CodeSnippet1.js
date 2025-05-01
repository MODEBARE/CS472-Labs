// Code Snippet 1

let x;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    document.write(x);
    document.write(a);
    var f = function (a, b, c) {
        b = a;
        document.write(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    document.write(b);
    var x = 10;
}
c(8, 9, 10);
document.write(b);
document.write(x);

// Expected Output
undefined
8
8
9
10
undefined

// Lexical Environment Diagrams


// //Global Execution Context Creation:
// Outer: null



// Lexical Environment (LE): { x: <TDZ>, a: undefined, b: undefined, c: undefined }
// Temporal Dead Zone (TDZ): { x }


// Global Execution Context Execution:
// Outer: null
// LE: { x: undefined, a: 5, b: 10, c: <function> }
// TDZ: {}



// Function c Execution Context Creation (for c(8, 9, 10)):
// Outer: Global LE
// LE: { a: 8, b: 9, c: 10, f: undefined, x: undefined }
// TDZ: {}



// Function c Execution Context Execution:
// Outer: Global LE
// LE: { a: 8, b: 9, c: 10, f: <function>, x: 10 }
// TDZ: {}



// Function f Execution Context Creation (for f(8, 9, 10)):
// Outer: c LE
// // LE: { a: 8, b: 9, c: 10, x: undefined }
// TDZ: {}



// Function f Execution Context Execution:
// Outer: c LE
// LE: { a: 8, b: 10, c: 10, x: 5 }
// TDZ: {}